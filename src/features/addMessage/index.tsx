import React, {useEffect, useRef, useState} from "react";
import {
    createMessageByName,
    CreateMessageData,
    getRoomById,
    Room,
} from "../../entities";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

const AddMessageFeature = (request : CreateMessageData) => {
    const [currentRoomData, setCurrentRoomData] = useState<Room | null>(null);

    const location = useLocation();

    const addMessageInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let roomId = new URLSearchParams(location.search).get("roomId");

        async function fetchData() {
            try {
                if (roomId !== null){
                    const room = await getRoomById({Id: roomId });
                    setCurrentRoomData(room);
                }
                else {
                    setCurrentRoomData(null)
                }
            } catch (error) {
                console.error('Error fetching rooms data:', error);
            }
        }

        fetchData();
    }, [location]);

    const [text,setText] = useState(String);

    const navigate = useNavigate()

    const handleInputChange = (e : React.ChangeEvent<any>) => {
        const {id , value} = e.target;
        switch (id){
            case "messageTextInput":
                setText(value);
                break;
            default:
                break;
        }
    }

    async function fetchData() {
        try {
            let createMessageRequest: CreateMessageData = {
                text: text,
                roomId: currentRoomData?.id
            }
            const response = await createMessageByName(
                createMessageRequest
            );
        } catch (error) {
            console.error('Error create:', error);
        }
        finally {
            if (addMessageInputRef){
                let element = addMessageInputRef.current
                if (element)
                    element.value = ""
            }
        }
    }

    return (
        <form>
            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                <input ref={addMessageInputRef} type="text" className="form-control form-control-lg" id="messageTextInput"
                       placeholder="Написать сообщение..." onChange = {(e) => handleInputChange(e)}/>
                <button onClick={fetchData} type="submit" className="btn btn-primary">Отправить</button>
                {/*<a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>*/}
                {/*<a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>*/}
                {/*<a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>*/}
            </div>
        </form>
    );
}

export default AddMessageFeature