import {Message} from "../../model";
import {deleteMessageById, deleteRoomById} from "../../api";

export const MessagesCard = ( message : Message ) => {
    function convertUTCDateToLocalDate(date : Date) {
        let newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

        let offset = date.getTimezoneOffset() / 60;
        let hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }
    let messageDate : string
    if (message.createdAt !== undefined){
        messageDate = convertUTCDateToLocalDate(new Date(message.createdAt)).toLocaleString("ru-RU")
    }
    else {
        messageDate = ""
    }

    async function deleteMessage() {
        try {
            if (message.id !== null){
                await deleteMessageById({messageId: message.id });
            }
        } catch (error) {
            console.error('Error deleting:', error);
        }
    }

    switch (message.isMy){
        case true:
            return (
                <div id={message.id} className="d-flex flex-row justify-content-end">
                    <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                            <p className="small me-3 mb-3 rounded-3">{message.user?.name}</p>
                            {message.text}
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">{messageDate}</p>
                    </div>
                    <button type="button" className="btn-close" aria-label="Удалить" onClick={deleteMessage}></button>
                </div>
            )
        case false:
            return (
                <div id={message.id} className="d-flex flex-row justify-content-start">
                    <div>
                        <p className="small p-2 ms-3 mb-1 text-white rounded-3 bg-secondary">
                            <p className="small me-3 mb-3 rounded-3">{message.user?.name}</p>
                            {message.text}
                        </p>
                        {/*style="background-color: #f5f6f7;"*/}
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{messageDate}</p>
                    </div>
                </div>
            )
        default:
            break
    }
}

export default MessagesCard