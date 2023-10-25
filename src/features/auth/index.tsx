import React, {useState} from "react";
import {
    logIn,
    LogInData
} from "../../entities";
import {useNavigate} from "react-router";

const AuthFeature = (request : LogInData) => {
    const [login, setLogin] = useState(String);
    const [password,setPassword] = useState(String);

    const navigate = useNavigate()

    React.useEffect( () => {
        const wasToken = localStorage.getItem('access_token')
        if(wasToken != null){
            navigate(-1);
        }
    })

    const handleInputChange = (e : React.ChangeEvent<any>) => {
        const {id , value} = e.target;
        switch (id){
            case "login":
                setLogin(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    async function fetchData() {
        try {
            let logInRequest: LogInData = {
                login: login,
                password: password
            }
            const response = await logIn(
                logInRequest
            );
            if(response.token != null)
            {
                localStorage.setItem('access_token', response.token);
                navigate(-1);
            }
        } catch (error) {
            console.error('Error auth:', error);
        }
    }

    return (
        <>
            <div className="form">
                <div className="form-body">
                    <div className="login">
                        <label className="form-label" htmlFor="login">Логин </label>
                        <input  type="login" id="login" className="form-control" value={login} onChange = {(e) => handleInputChange(e)} placeholder="Почта"/>
                    </div>
                    <div className="password">
                        <label className="form-label" htmlFor="password">Пароль </label>
                        <input className="form-control" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Пароль"/>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={fetchData} type="submit" className="btn">Войти</button>
                </div>
            </div>
        </>
    );
}

export default AuthFeature