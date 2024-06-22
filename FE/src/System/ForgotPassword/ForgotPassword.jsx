import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForgotPassword } from "./ForgotPasswordApi/useForgotPassword";
import { ErrorText } from "../../UI/ErrorText";
import { LoadingPage } from "../../UI/LoadingPage";
import { InputRequire } from "../../UI/InputRequire";
import apiGetMyIn4 from "../../API/apiGetMyIn4";

export const ForgotPassword = () => {
    const { sendEmail, isLoading, error: forgotError } = useForgotPassword();
    const [email, setEmail] = useState("");
    const [error, setError] = useState({
        email: "",
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const newError = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newError.email = "Vui lòng nhập định dạng email hợp lệ";
        }

        if (email.length === 0) {
            newError.email = "Vui lòng nhập email";
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
            return;
        }
        const result = await sendEmail(email);
        if (
            result.status === 200 &&
            result.data === "Sending email successfully"
        )
            navigate("/login");
    };

    useEffect(() => {

        const fetchUserInfo = async () => {
            try {
                const userInfo = await apiGetMyIn4();
                setUser(userInfo);
                // If user is already logged in, navigate to a different page
                if (userInfo.status !== 706) {
                    navigate('/home'); // Replace '/home' with the desired path
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserInfo();

        if (forgotError) {
            const newError = {};
            if (forgotError?.message === "User doesn't exist") {
                forgotError.message = "Không tìm thấy email người dùng";
            }
            newError.email = forgotError.message;
            setError({ ...newError });
        }
    }, [forgotError, navigate]);

    if (isLoading || loading) return <LoadingPage />;
    return (
        <>
            <div
                className="card text-center"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ddd",
                    height: "100vh",
                }}
            >
                <div
                    className="shadow"
                    style={{
                        width: "450px",
                        borderRadius: "18px",
                        overflow: "hidden",
                        backgroundColor: "white",
                    }}
                >
                    <div className="card-header h5 text-white main-background-bold">
                        Đặt lại mật khẩu
                    </div>
                    <div className="card-body px-5">
                        <p
                            className="card-text py-2"
                            style={{ fontWeight: "600", fontSize: "16px" }}
                        >
                            {
                                "Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một email kèm theo hướng dẫn để đặt lại mật khẩu của bạn."
                            }
                        </p>
                        <form onSubmit={(e) => handleSubmitForm(e)}>
                            <div className="form-outline">
                                <label
                                    className="form-label"
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                        fontWeight: "800",
                                        fontSize: "18px",
                                    }}
                                    htmlFor="typeEmail"
                                >
                                    Địa chỉ email:
                                    <InputRequire />
                                </label>
                                <input
                                    type="text"
                                    id="typeEmail"
                                    className="form-control mb-2"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="text-left">
                                    <ErrorText
                                        errorText={error?.email}
                                        mt={2}
                                        mb={2}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-outline-info w-100"
                                style={{ fontWeight: "500", fontSize: "16px" }}
                            >
                                Xác nhận
                            </button>
                        </form>
                        <div className="d-flex justify-content-between mt-4">
                            <Link
                                className="main-color-bold"
                                to={"/login"}
                                style={{ fontWeight: "600" }}
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                className="main-color-bold"
                                to={"/register"}
                                style={{ fontWeight: "600" }}
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
