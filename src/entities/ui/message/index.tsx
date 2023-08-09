import {Message} from "../../model";

export const MessagesCard = ( message : Message ) => {
    return (
        <div className="d-flex flex-row justify-content-end">
            <div>
                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                    quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
            </div>
        </div>
    )
}
export const MessagesCardMy = ( message : Message ) => {
    return (
    <div className="d-flex flex-row justify-content-start">
        <div>
            <p className="small p-2 ms-3 mb-1 rounded-3" >Duis aute
                irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            {/*style="background-color: #f5f6f7;"*/}
            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
        </div>
    </div>
)
}

export default MessagesCard