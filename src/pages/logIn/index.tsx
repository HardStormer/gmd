import Header from "../../widgets/ui/header";
import Footer from "../../widgets/ui/footer";
import Registration from "../../features/registration";
import LogIn from "../../features/auth";
import React, {useEffect, useState} from "react";


const LogInPage = () => {

    const [isRegistered, setSearchInput] = useState(true);

    const changeAuthMode = (e : any) => {
        setSearchInput(!isRegistered);
    }
    useEffect(() => {
    }, [isRegistered, setSearchInput]);

    return (
        <>
            <Header />
            <div className={"container"}>
                {
                    isRegistered ? (
                        <LogIn/>
                    ) : (
                        <Registration/>
                    )
                }
                {
                    isRegistered ? (
                        <button onClick={changeAuthMode} type={"button"} className="btn">
                            Переключиться на регистрацию
                        </button>
                    ) : (
                        <button onClick={changeAuthMode} type={"button"} className="btn">
                            Переключиться на авторизацию
                        </button>
                    )
                }
            </div>
            <Footer />
        </>
    );
};

export default LogInPage;