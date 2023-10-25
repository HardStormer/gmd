import {SearchFormChat} from "../../../shared";
import {useEffect, useState} from "react";
import MessagesFeature from "../../../features/messages";
import RoomsFeature from "../../../features/rooms";
import {Link} from "react-router-dom";
import Button from "../../../shared/ui/button";

const ChatWidget = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e : any) => {
        console.log(e.target.value)
        setSearchInput(e.target.value);
    }
    useEffect(() => {
    }, [searchInput, setSearchInput]);

    return (
        <section >
            {/*style="background-color: #CDC4F9;"*/}
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-2" id="chat3" >
                            {/*style="border-radius: 15px;"*/}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                                        <div className="p-3">
                                            <SearchFormChat value={searchInput} onChange={handleChange}/>
                                            <div data-mdb-perfect-scrollbar="true" >
                                                {/*style="position: relative; height: 400px"*/}
                                                <ul className="list-unstyled mb-0">
                                                    <RoomsFeature Name={searchInput} key={Math.floor(Math.random() * 200)} />
                                                </ul>
                                            </div>
                                            <Link to={"/roomCreate"} className={"btn btn-primary"}>Создать комнату</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-7 col-xl-8">
                                        <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true">

                                            <MessagesFeature/>

                                        </div>
                                        <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                                                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                                                       placeholder="Type message"/>
                                                    <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                                                    <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                                                    <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                                        </div>
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