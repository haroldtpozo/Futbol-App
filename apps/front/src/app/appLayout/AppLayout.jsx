import { Outlet } from "react-router-dom";

import AppNav from "../appNav/App.Nav";

function AppLayout() {
    return (
        <>
            <header>
                <AppNav />
            </header>
            <Outlet />
        </>
    );
}

export default AppLayout;
