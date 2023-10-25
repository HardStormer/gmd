import {useEffect, useState} from "react";
import {
    getMessageListByRoomId,
    getMessageListByText,
    GetMessageListByTextParams,
    Message,
    Messages,
    MessagesCard
} from "../../entities";
import LoadSpinner from "../../shared/ui/spinner";
import {useLocation, useSearchParams} from "react-router-dom";

const MessagesFeature = (request : GetMessageListByTextParams) => {
    const [messagesData, setMessagesData] = useState<Messages | null>(null);

    const location = useLocation();

    let text = ""

    if (request != null){
        if (request.Text != null){
            text = request.Text
        }
    }
    useEffect(() => {
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