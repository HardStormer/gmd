import {useEffect, useState} from "react";
import {
    getMessageListByRoomId,
    GetMessageListByTextParams,
    Message,
    Messages,
    MessagesCard
} from "../../entities";
import LoadSpinner from "../../shared/ui/spinner";
import {useLocation} from "react-router-dom";
import * as signalR from "@microsoft/signalr";

interface ChatParams {
    request: GetMessageListByTextParams; // Здесь используйте реальный тип, который содержит параметры запроса
    searchInput: string;
}

const MessagesFeature = ({ params }: { params: ChatParams }) => {
    const { request, searchInput } = params;

    const [messagesData, setMessagesData] = useState<Messages | null>(null);

    const location = useLocation();

    let text = ""
    useEffect(() => {
        let connection = new signalR.HubConnectionBuilder()
            .withUrl("https://messenger-api.guzeevmd.ru/messageHub", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();

        async function start() {
            try {
                await connection.start();
                console.log("SignalR Connected.");
            } catch (err) {
                console.log("SignalR not connected retry...");
                console.log(err);
                setTimeout(start, 5000);
            }
        }

        connection.onclose(async () => {
            await start();
        });

        start();

        connection.on("ReceiveMessage", (username: string, message: string) => {
            console.log("working")
            fetchData()
        });

        return () => {
            // Закрыть соединение при размонтировании компонента
            connection.stop();
        };
    }, []);

    if (request != null){
        if (request.Text != null){
            text = request.Text
        }
    }

    let roomId = new URLSearchParams(location.search).get("roomId");
    async function fetchData() {
        try {
            if (roomId !== null){
                const messages = await getMessageListByRoomId({RoomId: roomId });
                setMessagesData(messages);
            }
            else {
                setMessagesData(null)
            }
        } catch (error) {
            console.error('Error fetching rooms data:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [location]);

    let i = 0

    return (
        <>
            {!messagesData ? (<LoadSpinner/> ) : (
                !messagesData.modelList ? (
                    <div className="alert alert-warning" role="alert">
                        Не найдено
                    </div>) : (
                    messagesData.modelList.map( function (message : Message){
                        {
                            i++;
                            let messagesScrollDiv = document.getElementById("messagesScroll");
                            if (messagesScrollDiv != null){
                                messagesScrollDiv.scrollTop = messagesScrollDiv.scrollHeight;
                            }
                        }
                        return(
                            <MessagesCard text={message.text} isRead={message.isRead} isMy={message.isMy} id={message.id} createdAt={message.createdAt} isEdited={message.isEdited} user={message.user} key={i}/>
                        )
                    })
                )

            )}
        </>
    );
}

export default MessagesFeature