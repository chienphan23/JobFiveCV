import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditEmployerInformation } from "./EmployerUI/EditEmployerInformation";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { useUser } from "../../Context/UseContext";
import { useUpdateEmployer } from "./EmployerAPI/useUpdateEmployer";
import { LoadingPage } from "../../UI/LoadingPage";
import { PageNotAccess } from "../../UI/PageNotAccess";
import { ErrorText } from "../../UI/ErrorText";
import { Modal } from "../../UI/Modal";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const EditProfileEmployer = () => {
  const { user: employerCurrent, isLoadingUser: isLoading } = useUser();
  const { updateEmployer, error: errorUpdate } = useUpdateEmployer();
  const [employerName, setEmployerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [provinceName, setProvinceName] = useState("");
  const [description, setDescription] = useState("");
  const [filePhoto, setFilePhoto] = useState("");
  const [fileBackground, setFileBackground] = useState("");
  const [rankId, setRankId] = useState(1);
  const [error, setError] = useState({
    employerName: "",
    email: "",
    phone: "",
    address: "",
    provinceName: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChangeEmployerName = (e) => {
    setEmployerName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("lolo");

    const newError = {};
    if (employerName.replace(/\s+/g, " ").trim().length === 0) {
      newError.employerName = "Vui lòng nhập tên công ty";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newError.email = "Vui lòng nhập định dạng email hợp lệ";
    }

    if (email.replace(/\s+/g, " ").trim().length === 0) {
      newError.email = "Vui lòng nhập email";
    }

    if (provinceName.length === 0) {
      newError.provinceName = "Vui lòng chọn tỉnh / thành phố";
    }
    if (phone.length === 0) {
      newError.phone = "Vui lòng nhập số điện thoại";
    }
    const phoneRegex =
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    if (!phoneRegex.test(phone)) {
      newError.phone = "Vui lòng nhập định dạng số điện thoại hợp lệ";
    }
    if (address.replace(/\s+/g, " ").trim().length === 0) {
      newError.address = "Vui lòng nhập địa chỉ";
    }
    if (description.replace(/\s+/g, " ").trim().length === 0) {
      newError.description = "Vui lòng nhập thông tin giới thiệu về công ty";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      toast.error("Dữ liệu bạn nhập chưa hợp lệ vui lòng kiểm tra lại");
      return;
    }
    const formData = new FormData();
    formData.append("employerName", employerName.replace(/\s+/g, " ").trim());
    formData.append("email", email.replace(/\s+/g, " ").trim());
    formData.append("phone", phone);
    formData.append("address", address.replace(/\s+/g, " ").trim());
    formData.append("provinceName", provinceName);
    formData.append("description", description.replace(/\s+/g, " ").trim());
    formData.append("filePhoto", filePhoto);
    formData.append("fileBackground", fileBackground);
    formData.append("rankId", rankId);

    const result = updateEmployer({
      id: employerCurrent.data.employerId,
      formData,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      setEmployerName(employerCurrent.data.employerName);
      setEmail(employerCurrent.data.email);
      setPhone(employerCurrent.data.phone);
      setAddress(employerCurrent.data.address);
      setDescription(employerCurrent.data.description ?? "");
      setProvinceName(employerCurrent.data.provinceName);
      setFilePhoto(employerCurrent.data.photo);
      setFileBackground(employerCurrent.data.background);
      setRankId(employerCurrent.data.rankId);
    }
    if (errorUpdate) {
      const newError = {};
      if (errorUpdate?.message === "Email already existed") {
        errorUpdate.message = "Email đã tồn tại, vui lòng thử lại";
      }
      newError.email = errorUpdate.message;
      setError({ ...newError });
    }
  }, [isLoading, errorUpdate]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (employerCurrent && !("employerId" in employerCurrent.data))
    return <PageNotAccess />;

  return (
    <>
      <form style={{ fontSize: "16px" }} onSubmit={onHandleSubmit}>
        <EditEmployerInformation
          employerCurrent={employerCurrent?.data}
          filePhoto={filePhoto}
          setFilePhoto={setFilePhoto}
          fileBackground={fileBackground}
          setFileBackground={setFileBackground}
        />
        <div className="mt-3 text-right">
          <Link
            to={`/employer-profile/${employerCurrent?.data.employerId}`}
            className="font-weight-bold"
          >
            Đi đến trang
            <i style={{ fontSize: "12px" }} className="ml-2">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </i>
          </Link>
        </div>
        <div className="border border-light bg-white p-3 mt-3 rounded pb-5">
          <div className="form-group">
            <label>Tên công ty</label>
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên công ty"
              value={employerName}
              onChange={(e) => handleChangeEmployerName(e)}
              style={{ fontSize: "16px", height: "38px" }}
            />

            <ErrorText errorText={error?.employerName} mt={2} />
          </div>
          <div className="form-row mt-4">
            <div className="form-group col-lg-6">
              <label>Email</label>
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email công ty"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
                style={{ fontSize: "16px", height: "38px" }}
              />
              <ErrorText errorText={error?.email} mt={2} />
            </div>
            <div className="form-group col-lg-6">
              <label>Số điện thoại</label>
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số liên lạc công ty"
                value={phone}
                onChange={(e) => handleChangePhone(e)}
                style={{ fontSize: "16px", height: "38px" }}
              />
              <ErrorText errorText={error?.phone} mt={2} />
            </div>
          </div>
          <div className="form-row mt-4">
            <div className="form-group col-lg-6">
              <label>Tỉnh / Thành phố</label>
              <span className="text-danger"> *</span>
              <ProvinceNameSelect
                provinceName={provinceName}
                setProvinceName={setProvinceName}
              />

              <ErrorText errorText={error?.provinceName} mt={2} />
            </div>
            <div className="form-group col-lg-6">
              <label>Địa chỉ</label>
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập địa chỉ công ty"
                value={address}
                onChange={(e) => handleChangeAddress(e)}
                style={{ fontSize: "16px", height: "38px" }}
              />
              <ErrorText errorText={error?.address} mt={2} />
            </div>
          </div>
          <div className="form-group mt-4">
            <label>Giới thiệu công ty</label>
            <span className="text-danger"> *</span>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => handleChangeDescription(e)}
              rows={5}
              placeholder="Nhập thông tin giới thiệu về công ty"
              style={{ fontSize: "16px" }}
            ></textarea>
            <ErrorText errorText={error?.description} mt={2} />
          </div>
          <div className="col-lg-12 form-group text-center mt-5">
            <button
              className="btn btn-outline-info col-lg-4 font-weight-bold"
              type="submit"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
