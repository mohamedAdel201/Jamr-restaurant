import { Outlet } from "react-router-dom";
import NavBar from "../../components/Main/NavBar/NavBar";
import Footer from "../../components/Main/Footer/Footer";
const MainLayout = ()=>{
    return<>
        {/* header */}
        <NavBar />


        {/* main Content */}
        <main>
            <Outlet />
        </main>

        {/* footer */}
        <Footer />
    
    </>
}
export default MainLayout;