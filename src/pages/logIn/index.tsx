import Header from "../../widgets/ui/header";
import Footer from "../../widgets/ui/footer";

const LogInPage = () => {
    return (
        <>
            <Header />
            <div className={"container"}>
                <h1>Please Log In</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default LogInPage;