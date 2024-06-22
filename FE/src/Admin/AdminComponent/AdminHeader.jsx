import { Link, useNavigate } from "react-router-dom";
// import { apiPostLogOut } from "../../System/Login/apiLogout";
import { useGetIn4 } from "../../API/useGetIn4";
import { useLogout } from "../../System/Login/useLogout";
export const AdminHeader = () => {
  const navigate = useNavigate();
  const {logoutMutate} = useLogout()
  const { user, isLoading } = useGetIn4();
  const onClickLogOut = async () => {
    console.log("alo")
    await logoutMutate();
    navigate("/login");
  };
  if (isLoading) return <>Loading</>;
  return (
    <>
      {console.log(user)}
      <div className="mainheader-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div
                className="logo"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/admin">
                  <img src="/logo.png" alt="logo" />
                </Link>
                <h3
                  style={{
                    fontWeight: "600",
                    textShadow: "0.1em 0.1em 0.2em #1e86c4",
                  }}
                >
                  Job 5
                </h3>
              </div>
            </div>
            <div className="col-md-9 clearfix text-right">
              <div className="col-sm-16 clearfix">
                <div
                  className="user-profile pull-right"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                 
                  <h4
                    className="user-name dropdown-toggle main-color-bold"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontSize: "18px",
                      paddingRight: "3px",
                      fontWeight: "bold",
                      paddingBottom: "2px",
                    }}
                  >
                     <span
                    
                  >
                    Chào {" "}
                  </span>
                    {user?.data?.userName} <i className="fa fa-angle-down"></i>
                  </h4>
                  <div className="dropdown-menu" style={{background: "#f3f2f2"}}>
                    <Link className="dropdown-item" onClick={onClickLogOut}>
                      Đăng xuất
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
