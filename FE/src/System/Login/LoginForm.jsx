import { useEffect, useState } from "react";
import { useLogin } from "./useLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        userName: '',
        password: ''
    })
    const [isHidden, setIsHidden] = useState(true);

    const { loginMutate, isLoading, error: errorLogin } = useLogin();
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        const newError = {}
        if(username.length === 0){
            newError.userName = "Vui lòng nhập tên tài khoản"
        }
        if(username.length > 0 && username.length < 4){
            newError.userName = "Vui lòng nhập tên tài khoản lớn hơn 3 ký tự"
        }
        if(password.length === 0){
            newError.password = "Vui lòng nhập mật khẩu"
        }
        if(Object.keys(newError).length > 0){
            setError(newError)
            return;
        }

        const formData = new FormData();
        formData.append("userName", username);
        formData.append("password", password);
        const result = loginMutate(formData);
    };
    useEffect(() => {
        if(errorLogin){
            const newError = {}
           if(errorLogin?.message === "User doesn't exist"){
                errorLogin.message = "Bạn đã nhập sai thông tin đăng nhập, vui lòng thử lại"
           }
           if (errorLogin?.message === "User is block") {
            errorLogin.message = "Tài khoản bạn đã bị vô hiệu hóa";
          }
          if(errorLogin?.message === "User invalid"){
            errorLogin.message = "Bạn đã nhập sai mật khẩu, vui lòng thử lại."
          }
            newError.password = errorLogin.message
            setError({...newError})
        }
    }, [errorLogin]);
    if (isLoading) return <>Loading</>;
    return (
        <>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h2
                    className="text-center mb-4 main-color-bold"
                    style={{ fontWeight: "bold" }}
                >
                    Đăng nhập
                </h2>
                <form onSubmit={onSubmitLogin}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                            Tài khoản
                        </label>
                        <input
                            onChange={(e) => onChangeUsername(e)}
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                        />
                    </div>
                        <div className="text-danger" style={{marginBottom: "10px"}}>{error && error?.userName}</div>

                    <div
                        className="form-outline mb-4"
                        style={{ position: "relative" }}
                    >
                        <label className="form-label " htmlFor="form2Example27">
                            Mật khẩu
                        </label>
                        <input
                            onChange={(e) => onChangePassword(e)}
                            type={isHidden ? "password" : "text"}
                            id="form2Example27"
                            className="form-control form-control-lg"
                        />
                        <i
                            style={{
                                padding: "0 10px",
                                flex: "1",
                                position: "absolute",
                                top: "57.5%",
                                right: "4px",
                            }}
                            onClick={() => setIsHidden(!isHidden)}
                        >
                            <FontAwesomeIcon
                                icon={isHidden ? faEyeSlash : faEye}
                                className="me-2"
                                style={{ fontSize: "20px", color: "#3a3f64" }}
                            />
                        </i>
                    </div>
                    <div className="text-danger" style={{marginBottom: "10px"}}>{error && error?.password}</div>


                    <div className="d-flex justify-content-around align-items-center mb-4">
                        <div className="form-check">
                            <Link
                                to={"/register"}
                                className="main-color-bold"
                                style={{ fontWeight: "600" }}
                            >
                                Bạn chưa có tài khoản?
                            </Link>
                        </div>
                        <Link
                            to={"/forgotPassword"}
                            className="main-color-bold"
                            style={{ fontWeight: "600" }}
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className=" main-background-bold text-white"
                        style={{
                            padding: "18px 0",
                            borderRadius: "4px",
                            width: "100%",
                            border: "none",
                            fontSize: "16px",
                            fontWeight: "700",
                        }}
                    >
                        Đăng nhập
                    </button>

                    {/* <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>

                        <a className="btn btn-primary btn-lg btn-block" style={{background: "#3b5998"}} href="#!"
                            role="button">
                             <i style={{padding: "0 10px", flex: "1"}}><FontAwesomeIcon icon={faFacebookF} className="me-2" /></i>Continue with Facebook
                        </a>
                        <a className="btn btn-primary btn-lg btn-block" style={{background: "#55acee"}} href="#!"
                            role="button">
                            <i style={{padding: "0 10px", flex: "1"}}><FontAwesomeIcon icon={faTwitter} className="me-2" /></i>Continue with Twitter</a> */}
                </form>
            </div>
        </>
    );
};
