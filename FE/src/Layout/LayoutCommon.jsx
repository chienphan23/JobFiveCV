import { NavbarHome } from "../User/Home/NavbarHome"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { useEffect, useState } from "react";

export const LayoutCommon = () => {
    const location = useLocation();
    const [path, setPath] = useState("")
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setPath(location.pathname)
      }, [location.pathname]);
    
    return (
        <>
            <NavbarHome/>
                <Outlet />
            <Footer/>
        </>
    )
}