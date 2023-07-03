import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export default function Root() {
    return (
        <>
            <Navbar />
            <main className="main-page">
                <Sidebar />
                <Outlet />
            </main>
        </>
    );
}
