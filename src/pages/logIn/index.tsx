import Header from "../../widgets/ui/header";
import Footer from "../../widgets/ui/footer";
import Registration from "../../features/registration";

const LogInPage = () => {
    return (
        <>
            <Header />
            <div className={"container"}>
                <Registration/>
            </div>
            <Footer />
        </>
    );
};

export default LogInPage;