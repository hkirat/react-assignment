import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Wrapper = (Component) => {
    return ({...props}) => {
        return (
            <div>
                <Header />
                <Component {...props}/>
                <Footer />
            </div>
        );
    };
};

export default Wrapper;