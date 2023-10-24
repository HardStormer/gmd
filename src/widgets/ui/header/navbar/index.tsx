import {Link} from "react-router-dom";
import LogOutFeature from "../../../../features/logOut";


const Navbar = () => {
    let app = document.getElementById('app') as HTMLElement
    function changeTheme() {
        if(app != null){
            if (app.getAttribute('data-bs-theme') === 'dark') {
                app.setAttribute('data-bs-theme','light')
            }
            else {
                app.setAttribute('data-bs-theme','dark')
            }
        }
        else {
            app = document.getElementById('app') as HTMLElement
            changeTheme()
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">TestMessenger</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className={"nav-link"}>Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/chat"} className={"nav-link"}>Чат</Link>
                        </li>
                    </ul>
                    <LogOutFeature/>
                    <button onClick={changeTheme} className="btn btn-dark shadow" id="btnSwitch">Сменить тему</button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;


