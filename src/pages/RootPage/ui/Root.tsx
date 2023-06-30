import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";

export default function Root() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}
