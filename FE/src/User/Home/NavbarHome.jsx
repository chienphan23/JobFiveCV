import { Link, useLocation } from "react-router-dom";
import { ModalNotification } from "../Notification/ModalNotification";
import { useEffect, useState } from "react";
import { useUser } from "../../Context/UseContext";
import { DropDownHome } from "./HomeUI/DropDownHome";
import { apiPostLogOut } from "../../System/Login/apiLogout";
import { useLogout } from "../../System/Login/useLogout";
export const NavbarHome = () => {
  const { logoutMutate } = useLogout();
  const [width, setWidth] = useState(window.innerWidth);
  const { user, isLoading } = useUser();

  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, path]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light "
        style={{
          borderBottom: "0.4px solid #b2e6f3",
          position: "sticky",
          width: "100%",
          top: "0",
          zIndex: 10,
          boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
        }}
      >
        {/* {console.log("123" + user)} */}
        <Link className="navbar-brand ml-3 mr-5" to={"/home"}>
          <img src="http://localhost:5173/logo.png" alt="logo" width={60} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="d-flex w-100 align-items-center navbar-nav mt-2 mt-lg-0">
            <li
              className="nav-item mr-3 main-color"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              <Link to={"/home"} className="nav-link main-color-bold ">
                Trang chủ
              </Link>
            </li>
            <li
              className="nav-item mr-3  main-color"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              <Link
                to={
                  "/search-page?provinceParam=&minSalaryParam=0&maxSalaryParam=0&industryParam=0&experienceParam=0&searchKeyParam=&typeParam=0"
                }
                className="nav-link main-color-bold"
              >
                Việc làm
              </Link>
            </li>

            <li
              className="nav-item mr-3  main-color"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              <Link
                to={"/list-employer?employerName="}
                className="main-color-bold"
              >
                Nhà tuyển dụng
              </Link>
            </li>
            <li className="ml-auto"></li>
            <li className="nav-item" style={{ fontSize: "18px" }}>
              <ModalNotification />
            </li>

            {user && user.status !== 706 ? (
              width > 992 ? (
                <li className="nav-item  " style={{ fontSize: "18px" }}>
                  <DropDownHome />
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to={`${
                        "candidateId" in user.data
                          ? "/edit-candidate-profile"
                          : "/edit-employer-profile"
                      }`}
                      className="dropdown-item py-2 main-color-bold"
                    >
                      Quản lý tài khoản
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="dropdown-item py-2 main-color-bold" 
                      onClick={async () => await logoutMutate()}
                    >
                      Đăng xuất
                    </button>
                  </li>
                </>
              )
            ) : (
              <>
                <li
                  className="nav-link main-color-bold"
                  style={{ fontSize: "18px" }}
                >
                  <Link to={`/register`} className="nav-link main-color-bold" style={{fontSize: "16px", fontWeight: "700"}}>
                    Đăng ký
                  </Link>
                </li>
                <li
                  className="nav-link main-color-bold"
                  style={{ fontSize: "18px" }}
                >
                  <Link to={`/login`} className="nav-link main-color-bold" style={{fontSize: "16px", fontWeight: "700"}}>
                    Đăng nhập
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
