import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div id={"detail"}>
                <Outlet />
            </div>
        </div>
    )
}
