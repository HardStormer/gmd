import {useEffect, useState} from "react";
import {
    getRoomListByName,
    GetRoomListByNameParams, getRoomListByUserId,
    GetRoomListByUserIdParams, getRoomListMy,
    Room,
    RoomCard,
    Rooms
} from "../../entities";
import LoadSpinner from "../../shared/ui/spinner";

const RoomsMyFeature = (request : GetRoomListByUserIdParams) => {
    const [roomsData, setRoomsData] = useState<Rooms | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const rooms = await getRoomListMy({});
                setRoomsData(rooms);
            } catch (error) {
                console.error('Error fetching rooms data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div id={"myRooms"}>
            {!roomsData ? (<LoadSpinner/>) : (
                !roomsData.modelList ? (
                    <div className="alert alert-warning" role="alert">
                        Не найдено
                    </div>) : (
                    roomsData.modelList.map( function (room : Room){
                        return(
                            <RoomCard key={Math.floor(Math.random() * 200)} name={room.name} id={room.id}/>
                        )
                    })
                )

            )}
        </div>
    );
}

export default RoomsMyFeature