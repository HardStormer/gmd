import {useEffect, useState} from "react";
import {getUserById, User} from "../../entities";
import Header from "../../widgets/ui/header";
import Footer from "../../widgets/ui/footer";
import LoadSpinner from "../../shared/ui/spinner";

function HomePage() {
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUserById({Id: "237B3F8C-5AD4-4C97-AC3D-9AAB155EC18C"});
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Header/>
            <div className={"container"}>
                Добро пожаловать
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;