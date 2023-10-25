import {Message} from "../../model";

export const MessagesCard = ( message : Message ) => {
    let messageDate : string
    if (message.createdAt !== undefined){
        messageDate = new Date(message.createdAt).toLocaleString("ru-RU")
    }
    else {
        messageDate = ""
    }
    return (
        <div className="d-flex flex-row justify-content-end">
            <div>
                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    <p className="small me-3 mb-3 rounded-3">{message.user?.name}</p>
                    {message.text}
                </p>
                <p className="small me-3 mb-3 rounded-3 text-muted">{messageDate}</p>
            </div>
        </div>
    )
}
export const MessagesCardMy = ( message : Message ) => {
    let messageDate : string
    if (message.createdAt !== undefined){
        messageDate = new Date(message.createdAt).toLocaleString("ru-RU")
    }
    else {
        messageDate = ""
    }
    return (
    <div className="d-flex flex-row justify-content-start">
        <div>
            <p className="small p-2 ms-3 mb-1 rounded-3" >
                <p className="small me-3 mb-3 rounded-3">{message.user?.name}</p>
                {message.text}
            </p>
            {/*style="background-color: #f5f6f7;"*/}
            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{messageDate}</p>
        </div>
    </div>
)
}

export default MessagesCard