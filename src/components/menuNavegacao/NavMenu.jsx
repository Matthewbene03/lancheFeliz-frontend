import { Link } from "react-router-dom";
import {Nav} from "./styled"

function NavMenu() {
    return (
        <Nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
        </Nav>
    )
}

export default NavMenu;