import React, {useState} from "react";
import {
    LogInData, logOut
} from "../../entities";
import {Link} from "react-router-dom";

const LogOutFeature = () => {

    async function fetchData() {
        try {
            await logOut();
        } catch (error) {
            console.error('Error logout:', error);
        } finally {
            localStorage.removeItem('access_token')
        }
    }

    let token = localStorage.getItem('access_token')

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