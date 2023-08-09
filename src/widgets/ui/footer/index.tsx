import {Link} from "react-router-dom";
import "./styles.css";

const Footer = () => (
        <footer className="mx-3 row g-0 row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
            <div className="col">
            </div>

            <div className="col">

            </div>

            <div className="col">
            </div>

            <div className="col">
            </div>

            <div className="col">
                <h5 className="text-body-secondary">TestMessenger</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to={"/"} className={"nav-link p-0 text-muted"}>Главная</Link></li>
                    <li className="nav-item mb-2"><Link to={"/chat"} className={"nav-link p-0 text-muted"}>Чат</Link></li>
                </ul>
            </div>
        </footer>
);

export default Footer;