import {Link} from "react-router-dom";
import {Room} from "../../model";

export const RoomCard = (room : Room) => {
    return(
        <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                    <div>
                        <span className="badge bg-success badge-dot"></span>
                    </div>
                    <div className="pt-1">
                        <p className="fw-bold mb-0">{room.name}</p>
                        <p className="small text-muted">{room.id}</p>
                    </div>
                </div>
                <div className="pt-1">
                    <p className="small text-muted mb-1">Just now</p>
                    <span className="badge bg-danger rounded-pill float-end">3</span>
                </div>
            </a>
        </li>
    )
}

export default RoomCard