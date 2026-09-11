import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Menue from "../pages/menue/Menue";
import ContactUs from "../pages/contactUs/ContactUs";
import About from "../pages/about/About";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"menue",
                element:<Menue />
            },
            {
                path:"contactUs",
                element:<ContactUs />
            },
            {
                path:"about",
                element:<About />
            }
        ]
    }
])
export default router;