import { NavbarHome } from "../User/Home/NavbarHome"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { SearchJobHome } from "../User/Home/SearchJobHome"
import { useEffect, useState } from "react"
import { BreadCrumb } from "../User/BreadCrumb/BreadCrumb"
import { LoadingPage } from "../UI/LoadingPage"
import { useGetIn4 } from "../API/useGetIn4"
import { UserProvider } from "../Context/UseContext"

export const JobLayout = () => {
    const location = useLocation();
    const [path, setPath] = useState("")
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setPath(location.pathname)
      }, [location.pathname]);

    return (
        <>
        <UserProvider>
            <NavbarHome/>
            {/* <BreadCrumb/> */}
            {path != "/createjob" && !path.includes("/editJob") ?
            <SearchJobHome/>
            : ""
            }
                <Outlet />
            <Footer/>
        </UserProvider>
        </>
    )
}