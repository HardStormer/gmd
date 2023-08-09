import Routing from "../pages";
import "./index.css";
import { Scrollbar } from 'react-scrollbars-custom';

const App = () => {
    return (
        <div id="app" data-bs-theme="light">
            <Scrollbar>
                <Routing />
            </Scrollbar>
        </div>
    )
}

export default App;
