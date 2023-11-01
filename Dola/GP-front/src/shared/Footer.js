import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="Logo">
                <p>LOGO</p>
            </div>
            <div className="links">
                <Link to={"/"} className="nav-link">Home</Link>
                <Link to={"/"} className="nav-link">About</Link>
                <Link to={"/"} className="nav-link">Available Games</Link>
                <Link to={"/"} className="nav-link">Contact</Link>
            </div>
            <div className="teem">
                <p> &copy; Team Gamed</p>
            </div>
        </div>
     );
}
 
export default Footer;
