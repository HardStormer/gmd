import Header from "../../widgets/ui/header";
import Footer from "../../widgets/ui/footer";
import CreateRoomFeature from "../../features/createRoom";

function RoomCreatePage() {
    return (
        <>
            <Header/>
            <div className={"container"}>
                <CreateRoomFeature/>
            </div>
            <Footer/>
        </>
    );
}

export default RoomCreatePage;