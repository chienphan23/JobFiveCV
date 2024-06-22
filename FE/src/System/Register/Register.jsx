import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
  faL,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { apiRegister } from "./apiRegister";
import { apiGetProvince } from "../../API/apiGetProvince";
import { useGetProvince } from "../../API/useGetProvince";
import "react-datepicker/dist/react-datepicker.css";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
import { useRegister } from "./useRegister";
import { InputRequire } from "../../UI/InputRequire";
import { ErrorText } from "../../UI/ErrorText";
import toast from "react-hot-toast";
import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";

export const Register = () => {
  const navigate = useNavigate();
  const { user, isLoading: isLoadingUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [userState, setUser] = useState(null);

  const { listProvince, isLoading } = useGetProvince();
  const {
    registerMutate,
    isLoading: isLoadingRegister,
    error: errorRegister,
  } = useRegister();
  const [isCandidate, setIsCandidate] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [birthDay, setBirthDay] = useState(new Date());
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [provinceName, setProvinceName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState({
    userName: "",
    name: "",
    password: "",
    passwordRepeat: "",
    birthDay: "",
    provinceName: "",
    phone: "",
    address: "",
    email: "",
    role: "",
    terms: "",
  });

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setProvinceName(e.target.value);
  };

  const handleChangeDate = (e) => {
    setBirthDay(e.target.value);
  };
  const handleCheckboxChange = (event) => {
    setTerms(event.target.checked);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    const newError = {};
    if (password !== passwordRepeat) {
      newError.passwordRepeat = "Mật khẩu nhập lại không chính xác";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newError.email = "Vui lòng nhập định dạng email hợp lệ";
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (!passwordRegex.test(password))
      newError.password =
        "Mật khẩu phải có từ 8-20 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt.";

    // if (!passwordRegex.test(passwordRepeat))
    //   newError.passwordRepeat =
    //     "Mật khẩu phải có từ 8-20 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt.";

    const phoneRegex =
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    if (!phoneRegex.test(phone)) {
      newError.phone = "Vui lòng nhập định dạng số điện thoại hợp lệ";
    }
    if (address.replace(/\s+/g, " ").trim().length == 0) {
      newError.address = "Vui lòng nhập địa chỉ.";
    }
    if (birthDay == null) {
      newError.birthDay = "Vui lòng nhập ngày sinh";
    }
    if (password.length == 0) {
      newError.password = "Vui lòng nhập mật khẩu";
    }
    if (passwordRepeat == 0) {
      newError.passwordRepeat = "Vui lòng nhập mật khẩu";
    }
    if (provinceName.length == 0) {
      newError.provinceName = "Vui lòng chọn thành phố";
    }
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (userName.replace(/\s+/g, " ").trim().length == 0) {
      newError.userName = "Vui lòng nhập tài khoản đăng nhập";
    }
    if (!usernameRegex.test(userName)) {
      newError.userName = "Vui lòng không nhập khoảng trắng và ký tự đặc biệt";
    }
    if (name.replace(/\s+/g, " ").trim().length == 0) {
      newError.name = "Vui lòng nhập tên người dùng";
    }
    if (!isCandidate && !isEmployer) {
      newError.role = "Vui lòng chọn vai trò của bạn.";
    }
    if (phone.length === 0) {
      newError.phone = "Vui lòng nhập số điện thoại";
    }
    if (terms === false) {
      newError.terms = "Bạn chưa đồng ý với điều khoản của chúng tôi.";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      toast.error("Dữ liệu bạn nhập chưa hợp lệ vui lòng kiểm tra lại");
      return;
    }

    const formData = new FormData();
    formData.append("userName", userName.replace(/\s+/g, " ").trim());
    formData.append("password", password);
    if (isCandidate) {
      formData.append("role", "candidate");
    } else {
      if (isEmployer) {
        formData.append("role", "employer");
      }
    }
    const formData2 = new FormData();
    formData2.append("phone", phone);
    formData2.append("email", email);
    formData2.append("address", address.replace(/\s+/g, " ").trim());
    formData2.append("provinceName", provinceName);
    if (isCandidate) {
      formData2.append("fullName", name.replace(/\s+/g, " ").trim());
      formData2.append("birthDate", formatDate(birthDay));
    } else {
      formData2.append("location", provinceName);
      formData2.append("employerName", name.replace(/\s+/g, " ").trim());
    }
    const result = await registerMutate({ formData, formData2, email });
    console.log("anc");
    console.log(result);
  };
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await apiGetMyIn4();
        setUser(userInfo);
        // If user is already logged in, navigate to a different page
        if (userInfo.status !== 706) {
          navigate("/home"); // Replace '/home' with the desired path
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();

    if (errorRegister) {
      const newError = {};
      if (errorRegister.message == "User already existed") {
        errorRegister.message =
          "tên tài khoản đã bị trùng lặp vui lòng nhập tài khoản khác";
        newError.userName = errorRegister.message;
      }
      if (errorRegister.message === "Email already existed") {
        errorRegister.message =
          "email đã bị trùng lặp vui lòng nhập email khác";
        newError.email = errorRegister.message;
      }
      setError({ ...newError });
    }
  }, [errorRegister, user, navigate]);

  if (isLoading || isLoadingRegister || isLoadingUser || loading)
    return <LoadingPage />;

  return (
    <>
      <section className="pb-5 pt-3 main-background">
        <div
          className="container "
          style={{ paddingTop: "8px", paddingBottom: "8.5px" }}
        >
          <div
            className={`row d-flex justify-content-center align-items-center h-100 `}
          >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div
                  className="card-body p-md-5 shadow "
                  style={{ borderRadius: "25px" }}
                >
                  <form
                    className={`row justify-content-center align-items-${
                      isCandidate || isEmployer ? "start" : "center"
                    }`}
                    onSubmit={(e) => onSubmitRegister(e)}
                  >
                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Đăng ký
                      </p>
                      <div className="mx-1 mx-md-4 mt-3">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faUserCircle}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c1"
                            >
                              Tên tài khoản:
                            </label>
                            <InputRequire />
                            <input
                              type="text"
                              id="form3Example1c1"
                              className="form-control"
                              onChange={(e) => onChangeUserName(e)}
                            />
                            <ErrorText errorText={error.userName} mt={2} />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faUser}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Tên của bạn:
                            </label>
                            <InputRequire />
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={(e) => onChangeName(e)}
                            />
                            <ErrorText errorText={error.name} mt={2} />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Địa chỉ Email:
                            </label>
                            <InputRequire />
                            <input
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e) => onChangeEmail(e)}
                            />
                            <ErrorText errorText={error.email} mt={2} />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faLock}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Mật khẩu:
                            </label>
                            <InputRequire />
                            <input
                              type={"password"}
                              id="form3Example4c"
                              className="form-control"
                              onChange={(e) => onChangePassword(e)}
                            />
                            <ErrorText errorText={error.password} />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faKey}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd2"
                            >
                              Nhập lại mật khẩu:
                            </label>
                            <InputRequire />
                            <input
                              type={"password"}
                              id="form3Example4cd2"
                              className="form-control"
                              onChange={(e) => onChangePasswordRepeat(e)}
                            />
                            <ErrorText
                              errorText={error.passwordRepeat}
                              mt={2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7  order-2 order-lg-2">
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%",
                          paddingTop: "5px",
                          paddingBottom: "6px",
                        }}
                      >
                        {!isCandidate && !isEmployer ? (
                          <p
                            className="col-lg-12 text-center mb-4"
                            style={{ fontSize: "24px", fontWeight: "bold" }}
                          >
                            Tham gia với vai trò?{" "}
                          </p>
                        ) : (
                          ""
                        )}
                        <button
                          className={`btn ${
                            isCandidate ? "btn-info" : "btn-outline-info"
                          }`}
                          type="button"
                          onClick={() => {
                            setIsCandidate(true);
                            setIsEmployer(false);
                          }}
                        >
                          Ứng viên
                        </button>
                        <button
                          className={`btn ${
                            isEmployer ? "btn-info" : "btn-outline-info"
                          }`}
                          type="button"
                          onClick={() => {
                            setIsCandidate(false);
                            setIsEmployer(true);
                          }}
                        >
                          Nhà tuyển dụng
                        </button>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        {!isCandidate && !isEmployer && (
                          <ErrorText errorText={error.role} mt={2} />
                        )}
                      </div>

                      {isCandidate || isEmployer ? (
                        <div className="mt-3">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd3"
                              >
                                Số điện thoại:
                              </label>
                              <InputRequire />
                              <input
                                type="text"
                                id="form3Example4cd3"
                                className="form-control"
                                onChange={(e) => onChangePhone(e)}
                              />
                              <ErrorText errorText={error.phone} mt={2} />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Địa chỉ:
                              </label>
                              <InputRequire />
                              <input
                                type="text"
                                id="form3Example4cd"
                                className="form-control"
                                onChange={(e) => onChangeAddress(e)}
                              />
                              <ErrorText errorText={error.address} mt={2} />
                            </div>
                          </div>

                          <div>
                            <div className="form-outline flex-fill mb-4">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Thành phố:
                              </label>
                              <InputRequire />
                              <div className="form-group">
                                <ProvinceNameSelect
                                  provinceName={provinceName}
                                  setProvinceName={setProvinceName}
                                  errorProvince={error.provinceName}
                                />
                              </div>
                            </div>
                          </div>

                          {isCandidate && (
                            <div className="d-flex flex-row align-items-center mb-3">
                              <div className="form-outline flex-fill mb-0">
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4cd"
                                >
                                  Ngày sinh:
                                </label>
                                <InputRequire />
                                <DatePicker
                                  dateFormat="dd/MM/yyyy"
                                  selected={birthDay}
                                  className="form-control w-full"
                                  style={{ width: "100%" }}
                                  onChange={(date) => setBirthDay(date)}
                                />
                                <ErrorText errorText={error.birthDay} />
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className=" mx-1 mx-md-4 order-3">
                      <div className="ml-4 form-check  mb-3">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value={terms}
                          id="form2Example3c"
                          onChange={handleCheckboxChange}
                        />

                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Tôi đồng ý với các thông tin trong{" "}
                          <a
                            href="#!"
                            data-toggle="modal"
                            data-target="#registerModal"
                          >
                            điều khoản
                          </a>
                        </label>

                        {!terms && error.terms && (
                          <ErrorText errorText={error.terms} mt={2} />
                        )}
                      </div>
                      <div className="ml-4 form-check d-flex mb-3">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Nếu đã có tài khoản ?{" "}
                          <Link to={"/login"}>Đăng nhập</Link>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn  btn-md btn-info"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            borderRadius: "10px",
                          }}
                        >
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {console.log(terms)}
      {/* Modal */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">
                Điều khoản
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ĐIỀU KHOẢN ĐĂNG KÝ TÀI KHOẢN JOB5 <br />
              1. Chấp nhận Điều khoảnKhi đăng ký tài khoản tại JOB5, người dùng
              đồng ý tuân thủ các điều khoản và điều kiện được đề cập dưới đây.
              Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này,
              vui lòng không sử dụng dịch vụ của chúng tôi. <br />
              2. Điều kiện Đăng ký Người dùng phải đủ 18 tuổi trở lên. Người
              dùng cần cung cấp thông tin cá nhân chính xác, đầy đủ và cập nhật
              khi đăng ký tài khoản. Người dùng chịu trách nhiệm bảo mật thông
              tin tài khoản và mật khẩu của mình. JOB5 sẽ không chịu trách nhiệm
              về bất kỳ thiệt hại nào phát sinh từ việc người dùng không bảo mật
              thông tin tài khoản của mình.
              <br /> 3. Quyền và Trách nhiệm của Người dùng Người dùng cam kết
              sử dụng dịch vụ của JOB5 đúng mục đích tìm kiếm việc làm và tuyển
              dụng nhân sự. Người dùng không được đăng tải thông tin sai sự
              thật, thông tin gây hiểu lầm, hoặc thông tin vi phạm pháp luật và
              quy định của nhà nước. Người dùng không được sử dụng tài khoản của
              mình để phát tán spam, phần mềm độc hại hoặc bất kỳ hình thức tấn
              công mạng nào.
              <br /> 4. Quyền và Trách nhiệm của JOB5 JOB5 có quyền tạm ngừng
              hoặc chấm dứt tài khoản của người dùng nếu phát hiện bất kỳ vi
              phạm nào đối với các điều khoản này. JOB5 cam kết bảo mật thông
              tin cá nhân của người dùng theo chính sách bảo mật của chúng tôi.
              JOB5 có quyền thay đổi, cập nhật các điều khoản này mà không cần
              thông báo trước. Việc tiếp tục sử dụng dịch vụ sau khi có sự thay
              đổi đồng nghĩa với việc người dùng chấp nhận các thay đổi đó.{" "}
              <br />
              5. Quy định về Nội dung và Hành vi Người dùng không được đăng tải
              nội dung phản cảm, tục tĩu, hoặc nội dung vi phạm quyền sở hữu trí
              tuệ của bên thứ ba. JOB5 có quyền kiểm duyệt và xóa bỏ bất kỳ nội
              dung nào vi phạm các quy định này mà không cần thông báo trước.
              <br /> 6. Giới hạn Trách nhiệm JOB5 không chịu trách nhiệm về bất
              kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt hoặc hậu
              quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ
              của chúng tôi. JOB5 không đảm bảo rằng dịch vụ sẽ luôn an toàn,
              không bị gián đoạn hoặc không có lỗi.
              <br /> 7. Liên hệ và Hỗ trợ Nếu có bất kỳ câu hỏi hoặc thắc mắc
              nào về các điều khoản này, vui lòng liên hệ với chúng tôi qua
              email: support@JOB5.com hoặc số điện thoại: +84-123-456-789.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
