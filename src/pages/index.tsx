import {Route, Routes} from "react-router-dom";
import HomePage from "./home/index";
import TestPage from "./test";
import ChatPage from "./chat";
import LogIn from "./logIn";
import RoomCreatePage from "./roomCreate";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/roomCreate" element={<RoomCreatePage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/test" element={<TestPage/>}/>
            <Route path="/*" element={<HomePage/>}/>
        </Routes>
    );
}

export default Routing;
