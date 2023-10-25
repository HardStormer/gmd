import React, {useEffect, useState} from "react";
import {
    LogInData, logOut
} from "../../entities";
import {Link} from "react-router-dom";

const LogOutFeature = () => {
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    useEffect(() => {
        setToken(localStorage.getItem('access_token'));
    }, []);

    async function fetchData() {
        try {
            await logOut();
        } catch (error) {
            console.error('Error logout:', error);
        } finally {
            localStorage.removeItem('access_token')
            setToken(null)
            window.location.reload();
        }
    }

    if (token == null) {
        return (<Link to={"/login"} className="btn">Авторизация</Link>)
    } else {
        return (
            <div>
                <button onClick={fetchData} type="submit" className="btn">Выйти</button>
            </div>
        );
    }
}

export default LogOutFeature