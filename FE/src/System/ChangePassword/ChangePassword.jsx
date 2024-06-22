import { useEffect, useState } from "react";
import { ErrorText } from "../../UI/ErrorText";
import { InputRequire } from "../../UI/InputRequire";
import { useChangePassword } from "./ChangePasswordAPI/useChangePassword";
import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";

export const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState({
        password: "",
        newPassword: "",
        confirmPassword: "",
    });

    const { user, isLoading } = useUser();
    const {
        changePassword,
        isLoading: isChangeLoading,
        error: changeError,
    } = useChangePassword();

    const onChangeOldPassword = (e) => {
        setOldPassword(e.target.value);
    };
    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newError = {};
        if (oldPassword.length === 0)
            newError.password = "Vui lòng nhập mật khẩu cũ";

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (!passwordRegex.test(newPassword))
            newError.newPassword =
                "Mật khẩu phải có từ 8-20 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt.";

        if (newPassword.length === 0)
            newError.newPassword = "Vui lòng nhập mật khẩu mới";

        if (confirmPassword && newPassword !== confirmPassword)
            newError.confirmPassword = "Xác nhận mật khẩu không trùng khớp.";

        if (confirmPassword.length === 0)
            newError.confirmPassword = "Vui lòng nhập mật khẩu xác nhận";

        if (Object.keys(newError).length > 0) {
            setError(newError);
            return;
        }

        const formData = new FormData();
        formData.append("password", oldPassword);
        formData.append("newPassword", newPassword);
        formData.append("confirmPassword", confirmPassword);

        const userId =
            user &&
            ("employerId" in user.data
                ? user.data.employerId
                : user.data.candidateId);

        const result = await changePassword({
            id: userId,
            formData,
        });
    };
    useEffect(() => {
        if (changeError) {
            const newError = {};

            if (changeError?.message === "Password incorrect") {
                changeError.message =
                    "Mật khẩu cũ không trùng khớp, vui lòng thử lại";
            }
            newError.password = changeError.message;
            setError({ ...newError });
        }
    }, [changeError]);

    if (isChangeLoading || isLoading) return <LoadingPage />;
    return (
        <>
            <div className="bg-white p-3 d-flex justify-content-between">
                <h5>Đổi mật khẩu</h5>
            </div>
            <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <div className="d-flex flex-row align-items-center">
                                <img
                                    src="/changepassword.png"
                                    style={{
                                        maxWidth: "200px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div style={{ fontSize: "12px" }}>
                                    <div>Lưu ý:</div>
                                    <div>
                                        Mật khẩu phải có độ dài từ 8 đến 20 ký
                                        tự, bao gồm chữ hoa, chữ thường và ký tự
                                        đặc biệt
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>
                                    Mật khẩu cũ:
                                    <InputRequire />
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={oldPassword}
                                    onChange={(e) => onChangeOldPassword(e)}
                                />
                                {
                                    <ErrorText
                                        errorText={error?.password}
                                        mb={3}
                                        mt={2}
                                    />
                                }
                            </div>
                            <div className="form-group">
                                <label>
                                    Mật khẩu mới:
                                    <InputRequire />
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={newPassword}
                                    onChange={(e) => onChangeNewPassword(e)}
                                />
                                <ErrorText
                                    errorText={error?.newPassword}
                                    mb={3}
                                    mt={2}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    Xác nhận mật khẩu:
                                    <InputRequire />
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => onChangeConfirmPassword(e)}
                                />
                                <ErrorText
                                    errorText={error?.confirmPassword}
                                    mb={3}
                                    mt={2}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary d-flex m-auto">
                        Đổi mật khẩu
                    </button>
                </form>
            </div>
        </>
    );
};
