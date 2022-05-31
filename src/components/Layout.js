import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className="mainContainer">
                {children}
            </div>
        </div>
    );
}
 
export default Layout;