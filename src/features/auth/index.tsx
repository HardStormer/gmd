import React, {useState} from "react";
import {
    logIn,
    LogInData, ValidationError
} from "../../entities";
import {useNavigate} from "react-router";

const AuthFeature = (request : LogInData) => {
    const [login, setLogin] = useState(String);
    const [password,setPassword] = useState(String);

    const [loginValidError, setLoginValidError] = useState(String);
    const [passwordValidError,setPasswordValidError] = useState(String);

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
            try {
                let validationError: ValidationError = (error as ValidationError)
                if (validationError.errors !== null) {
                    let loginError = validationError.errors?.Login
                    if (loginError !== null && loginError !== undefined) {
                        setLoginValidError(loginError.toString())
                    }
                    else {
                        setLoginValidError("")
                    }
                    let passwordError = validationError.errors?.Password
                    if (passwordError !== null && passwordError !== undefined) {
                        setPasswordValidError(passwordError.toString())
                    }
                    else {
                        setLoginValidError("")
                    }
                }
            } catch (error) {
                console.error('Error auth:', error);
            }
        }
    }

    return (
        <>
            <form className="form">
                <div className="form-body">
                    <div className="login">
                        <label className="form-label" htmlFor="login">Логин </label>
                        <input  type="login" id="login" className={loginValidError ? "form-control is-invalid" : "form-control"} value={login} onChange = {(e) => handleInputChange(e)} placeholder="Логин"/>
                        <div className="invalid-feedback">{loginValidError}</div>
                    </div>
                    <div className="password">
                        <label className="form-label" htmlFor="password">Пароль </label>
                        <input className={passwordValidError ? "form-control is-invalid" : "form-control"} type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Пароль"/>
                        <div className="invalid-feedback">{passwordValidError}</div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={fetchData} type="submit" className="btn">Войти</button>
                </div>
            </form>
        </>
    );
}

export default AuthFeature