import {SearchFormChat} from "../../../shared";
import React, {useEffect, useRef, useState} from "react";
import MessagesFeature from "../../../features/messages";
import RoomsFeature from "../../../features/rooms";
import {Link, useLocation} from "react-router-dom";
import RoomsMyFeature from "../../../features/roomsMy";
import {getRoomById, Room} from "../../../entities";
import AddMessage from "../../../features/addMessage";

const ChatWidget = () => {

    const [searchInput, setSearchInput] = useState("");

    let token = localStorage.getItem('access_token')

    if (token === null){
        window.location.replace(`#/login`)
    }

    const handleChange = (e : any) => {
        console.log(e.target.value)
        setSearchInput(e.target.value);
    }
    useEffect(() => {
    }, [searchInput, setSearchInput]);

    const messagesScrollRef = useRef(null);

    const [currentRoomData, setCurrentRoomData] = useState<Room | null>(null);

    const location = useLocation();

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

        return () => {
            setCurrentRoomData(null)
        };
    }, [location]);

    const combinedParams = {
        request: {
        },
        searchInput: searchInput,
        scrollRef: messagesScrollRef
    };
    return (
        <section >
            {/*style="background-color: #CDC4F9;"*/}
            <div className="container py-5" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-2" id="chat3" >
                            {/*style="border-radius: 15px;"*/}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                                        <div className="p-3">
                                            Мои комнаты:

                                            <div data-mdb-perfect-scrollbar-y="true" style={{height: "150px", overflowY: "scroll"}}>
                                                <RoomsMyFeature key={Math.floor(Math.random() * 200)} />
                                            </div>
                                            <SearchFormChat value={searchInput} onChange={handleChange}/>
                                            <div data-mdb-perfect-scrollbar="true" style={{maxHeight: "150px", overflowY: "scroll"}}>
                                                {/*style="position: relative; height: 400px"*/}
                                                <ul className="list-unstyled mb-0">
                                                    <RoomsFeature Name={searchInput} key={Math.floor(Math.random() * 200)} />
                                                </ul>
                                            </div>
                                            <Link to={"/roomCreate"} className={"btn btn-primary"}>Создать комнату</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-7 col-xl-8">
                                        {!currentRoomData?.name ?
                                            (
                                                <div className="alert alert-info" role="alert">
                                                    Выберите комнату
                                                </div>
                                            )
                                            :
                                            (
                                            !currentRoomData?.name ?
                                                (
                                                    <div className="alert alert-warning" role="alert">
                                                        Не найдено
                                                    </div>
                                                )
                                                :
                                                (
                                                    <>
                                                        Комната: {currentRoomData?.name}
                                                        <div ref={messagesScrollRef} id="messagesScroll" className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{
                                                            display: "flex",flexDirection: "column-reverse", maxHeight: "300px", overflowY: "scroll"}}>
                                                            <MessagesFeature params={combinedParams} />
                                                        </div>
                                                        <AddMessage/>
                                                    </>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatWidget;