import { NavbarHome } from "../User/Home/NavbarHome";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { MainSideBar } from "../User/Candidate/MainSideBar";
import { useUser } from "../Context/UseContext";
import { PageNotLogin } from "../UI/PageNotLogin";
import { PageNotAccess } from "../UI/PageNotAccess";
import { ListJobHome } from "../User/Home/ListJobHome";

export const CandidateLayout = () => {
  const { user, isLoadingUser } = useUser();
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <NavbarHome />
      <div className="container-fluid " style={{ backgroundColor: "#f2f3f7" }}>
        {user && user.status == 706 ? (
          <PageNotLogin />
        ) : !("candidateId" in user.data) ? (
          <PageNotAccess />
        ) : (
          <div className="row row-gap pt-1">
            <div className="col-lg-3 p-0 bg-white">
              <MainSideBar />
            </div>
            <div className="col-lg-9">
              <Outlet />
            </div>
            <div className="container">
              <ListJobHome />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
