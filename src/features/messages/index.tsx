import {useEffect, useState} from "react";
import {getMessageListByText, GetMessageListByTextParams, Message, Messages, MessagesCard} from "../../entities";
import LoadSpinner from "../../shared/ui/spinner";

const MessagesFeature = (request : GetMessageListByTextParams) => {
    const [roomsData, setMessagesData] = useState<Messages | null>(null);

    let text = ""

    if (request != null){
        if (request.Text != null){
            text = request.Text
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const rooms = await getMessageListByText({Text: text });
                setMessagesData(rooms);
            } catch (error) {
                console.error('Error fetching rooms data:', error);
            }
        }

        fetchData();
    }, []);

    let i = 0

    return (
        <>
            {!roomsData ? (<LoadSpinner/> ) : (
                !roomsData.modelList ? (
                    <div className="alert alert-warning" role="alert">
                        Не найдено
                    </div>) : (
                    roomsData.modelList.map( function (message : Message){
                        {
                            i++;
                        }
                        return(
                            <MessagesCard text={message.text} key={i}/>
                        )
                    })
                )

            )}
        </>
    );
}

export default MessagesFeature