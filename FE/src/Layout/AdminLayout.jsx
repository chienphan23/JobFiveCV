import { useEffect } from "react"
import { AdminFooter } from "../Admin/AdminComponent/AdminFooter"
import { AdminHeader } from "../Admin/AdminComponent/AdminHeader"
import { AdminSidebar } from "../Admin/AdminComponent/AdminSidebar"
import { AdminWrap } from "../Admin/AdminComponent/AdminWrap"
import {Outlet} from "react-router-dom"
import { useUser } from "../Context/UseContext"
import { PageNotAccess } from "../UI/PageNotAccess"
import { PageNotLogin } from "../UI/PageNotLogin"
import { LoadingPage } from "../UI/LoadingPage"

export const AdminLayout = () => {
    const { user, isLoadingUser } = useUser();
    if(isLoadingUser) return <LoadingPage/>
    if(user && user.status === 706 ) return <PageNotLogin/>
    if(user && !("userId" in user.data)) return <PageNotAccess/>
    return (
        <>
           <AdminWrap>
            <AdminHeader/>
            <AdminSidebar/>
            <Outlet/>
            <AdminFooter/>
           </AdminWrap>
        </>
    )
}