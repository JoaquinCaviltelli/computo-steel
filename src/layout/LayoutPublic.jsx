import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutPublic = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <footer>Footer</footer>
        </div>
    );
};
export default LayoutPublic;