import {Link} from "react-router-dom";
import {CreateRoomData, DeleteRoomData, Room} from "../../model";
import {createRoomByName, deleteRoomById, getRoomById} from "../../api";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from "react";

export const RoomCard = (room : Room) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let roomHref = "#/chat?roomId="
    if (room.id !== null && room.id !== undefined){
        roomHref = roomHref + room.id.toString()
    }
    else {
        roomHref = "#/chat"
    }


    async function deleteRoom() {
        try {
            if (room.id !== null){
                await deleteRoomById({roomId: room.id });
            }
        } catch (error) {
            handleShow()
            console.error('Error fetching rooms data:', error);
        }
    }

    return(
        <div className="p-2 border-bottom">
            <a href={roomHref} className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Сообщение</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Вы не можете удалить этот чат</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрыть
                            </Button>
                            {/*<Button variant="primary" onClick={handleClose}>*/}
                            {/*    Save Changes*/}
                            {/*</Button>*/}
                        </Modal.Footer>
                    </Modal>
                    <div className="pt-1">
                        <p className="fw-bold mb-0">{room.name}</p>
                        <p className="small text-muted">{room.id}</p>
                    </div>
                </div>
                <button type="button" className="btn-close" aria-label="Удалить" onClick={deleteRoom}></button>
                {/*<div className="pt-1">*/}
                {/*    <p className="small text-muted mb-1">Just now</p>*/}
                {/*    <span className="badge bg-danger rounded-pill float-end">3</span>*/}
                {/*</div>*/}
            </a>
        </div>
    )
}

export default RoomCard