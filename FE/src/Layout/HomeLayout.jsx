import { NavbarHome } from "../User/Home/NavbarHome";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { useGetIn4 } from "../API/useGetIn4";
import { LoadingPage } from "../UI/LoadingPage";
import { UserProvider } from "../Context/UseContext";

export const HomeLayout = () => {
  const location = useLocation();
  const [path, setPath] = useState("");
  const { user, isLoading } = useGetIn4();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPath(location.pathname);
  }, [location.pathname]);

  if (isLoading) return <LoadingPage />;
  return (
    <>
      {/* {console.log(user)} */}
      <UserProvider>
        <NavbarHome />
        <Outlet user={user} />
        <Footer />
      </UserProvider>
    </>
  );
};
