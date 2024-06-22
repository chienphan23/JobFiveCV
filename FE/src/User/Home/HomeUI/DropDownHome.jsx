import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../Context/UseContext";
import { useLogout } from "../../../System/Login/useLogout";
import { LoadingPage } from "../../../UI/LoadingPage";

export function DropDownHome() {
  const { logoutMutate } = useLogout();
  const [isVisible, setIsVisible] = useState(false);
  const { user, isLoadingUser } = useUser();

  const handleClickOutside = (e) => {
    setIsVisible(false);
  };
  const handleClickNotification = () => {
    setIsVisible(!isVisible);
  };
  if (isLoadingUser) return <LoadingPage />;
  return (
    <>
      <div style={{ position: "relative" }}>
        <span
          id="toggleButton"
          className=" btn btn-bell"
          style={{ position: "relative" }}
          onClick={() => handleClickNotification()}
        >
          <img
            src={`http://localhost:8080/api/v1/files/${
              user.data.photo ? user.data.photo : "nophoto.png"
            }`}
            alt="avatar"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              objectFit: "cover",
            }}
          />
        </span>
        {isVisible && (
          <div>
            <div
              className="overlay"
              onClick={(e) => handleClickOutside(e)}
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                zIndex: "999",
              }}
            ></div>
            <div
              className="shadow bg-white rounded border"
              id="content"
              style={{
                width: "150px",
                position: "absolute",
                top: "100%",
                right: "0",
                zIndex: "1000",
              }}
            >
              {user && !("userId" in user.data) && (
                <>
                  <div>
                    <Link
                      to={`${
                        user && "candidateId" in user.data
                          ? "/edit-candidate-profile"
                          : "/edit-employer-profile"
                      }`}
                      className="dropdown-item py-2 main-color-bold font-weight-bold"
                    >
                      Quản lý tài khoản
                    </Link>
                    <div>
                      <Link
                        to={`${
                          user && "candidateId" in user.data
                            ? "/change-password-candidate"
                            : "/change-password-employer"
                        }`}
                        className="dropdown-item py-2 main-color-bold font-weight-bold"
                      >
                        Đổi mật khẩu
                      </Link>
                    </div>
                  </div>
                </>
              )}

              <div>
                <button
                  className="dropdown-item py-2 main-color-bold font-weight-bold"
                  onClick={async () => await logoutMutate()}
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
