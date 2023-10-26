import {useEffect, useState} from "react";
import {getRoomListByName, GetRoomListByNameParams, Room, RoomCard, Rooms} from "../../entities";
import LoadSpinner from "../../shared/ui/spinner";

const RoomsFeature = (request : GetRoomListByNameParams) => {
    const [roomsData, setRoomsData] = useState<Rooms | null>(null);

    let name = ""

    if (request != null){
        if (request.Name != null){
            name = request.Name
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const rooms = await getRoomListByName({Name: name });
                setRoomsData(rooms);
            } catch (error) {
                console.error('Error fetching rooms data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
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
        </>
    );
}

export default RoomsFeature