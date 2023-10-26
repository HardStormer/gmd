import React, {useEffect, useRef, useState} from "react";
import {
    getMessageListByRoomId,
    GetMessageListByTextParams,
    Message,
    MessagesCard
} from "../../entities";
import LoadSpinner from "../../shared/ui/spinner";
import {useLocation} from "react-router-dom";
import * as signalR from "@microsoft/signalr";
import {components} from "../../../generated/privateMessanger-api-types-v1";
import message from "../../entities/ui/message";

interface ChatParams {
    request: GetMessageListByTextParams;
    searchInput: string;
    scrollRef: React.MutableRefObject<HTMLElement | null>
}

const MessagesFeature = ({ params }: { params: ChatParams }) => {
    const { request, searchInput } = params;

    const [messagesData, setMessagesData] = useState<components["schemas"]["MessageViewModel"][] | null>(null);
    const [allMessageCount, setAllMessageCount] = useState(0);
    const [messageCount, setMessageCount] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);
    const [needUpdate, setNeedUpdate] = useState(false);

    const location = useLocation();

    const messagesScrollRef = params.scrollRef;
    let roomId = new URLSearchParams(location.search).get("roomId");
    let text = ""
    let messageKey = 0

    if (request != null){
        if (request.Text != null){
            text = request.Text
        }
    }

    useEffect(() => {
        let connection = new signalR.HubConnectionBuilder()
            .withUrl("https://messenger-api.guzeevmd.ru/messageHub", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build();

        async function start() {
            try {
                await connection.start();
                console.log("SignalR Connected.");
            } catch (err) {
                console.log("SignalR not connected retry...");
                setTimeout(start, 5000);
            }
        }

        connection.onclose(async () => {
            await start();
        });

        start();

        connection.on("ReceiveMessage", (username: string, message: string) => {
            console.log("working")
            setNeedUpdate(true)
        });

        return () => {
            connection.stop();
        };
    }, []);

    useEffect(() => {
        async function fetchMoreMessages(messageCount : number) {
            try {
                if (roomId !== null){
                    const response = await getMessageListByRoomId({RoomId: roomId, Limit: 10, Offset: messageCount})
                    const newMessages = response?.modelList
                    setMessagesData(prevCount => prevCount = [...(prevCount || []), ...(newMessages || [])])
                }
            } catch (error) {
                console.error('Error fetching messages data:', error);
            }
            finally {
                setMessageCount(prevState =>  prevState + 10)
            }
        }
        const loadMoreMessages = async () => {
            console.log(allMessageCount)
            console.log(messageCount)
            if (!loadingMore && allMessageCount > messageCount) {
                setLoadingMore(true);
                try {
                    await fetchMoreMessages(messageCount);
                } catch (error) {
                    console.error('Error fetching more messages:', error);
                } finally {
                    setLoadingMore(false);
                }
            }
        };
        function handleScroll() {
            if (
                messagesScrollRef.current && messagesScrollRef.current.scrollTop <=
                messagesScrollRef.current.clientHeight - messagesScrollRef.current.scrollHeight + 1
            ) {
                loadMoreMessages();
            }
        }
        if (messagesScrollRef.current) {
            messagesScrollRef.current.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (messagesScrollRef.current) {
                messagesScrollRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [allMessageCount, messageCount, messagesData]);

    useEffect(() => {
        async function fetchData() {
            try {
                if (roomId !== null){
                    const messages = await getMessageListByRoomId({RoomId: roomId });
                    if (messages.modelList){
                        setMessagesData(messages.modelList);
                        let length = messages.modelList.length
                        setMessageCount(length);
                    }
                    if (messages.totalCount){
                        setAllMessageCount(messages.totalCount)
                    }
                }
            } catch (error) {
                console.error('Error fetching rooms data:', error);
            }
        }

        fetchData();
        setNeedUpdate(false)
    }, [location, needUpdate]);

    return (
        <>
            {!messagesData ? (<LoadSpinner/> ) : (
                !messagesData ? (
                    <div className="alert alert-warning" role="alert">
                        Не найдено
                    </div>) : (
                    messagesData.map( function (message : Message){
                        {
                            messageKey++;
                            // let messagesScrollDiv = document.getElementById("messagesScroll");
                            // if (messagesScrollDiv != null){
                            //     messagesScrollDiv.scrollTop = messagesScrollDiv.scrollHeight;
                            // }
                        }
                        return(
                            <MessagesCard text={message.text} isRead={message.isRead} isMy={message.isMy} id={message.id} createdAt={message.createdAt} isEdited={message.isEdited} user={message.user} key={messageKey}/>
                        )
                    })
                )

            )}
        </>
    );
}

export default MessagesFeature