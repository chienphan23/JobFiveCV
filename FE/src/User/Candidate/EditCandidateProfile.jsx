import { useEffect, useState } from "react";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { LoadingPage } from "../../UI/LoadingPage";
import { useUpdateCandidate } from "../Candidate/CandidateAPI/useUpdateCandidate";
import DatePicker from "react-datepicker";
import { useUser } from "../../Context/UseContext";
import { InputRequire } from "../../UI/InputRequire";
import { ErrorText } from "../../UI/ErrorText";
import { EditTimeLine } from "./EditTimeLine";
import toast from "react-hot-toast";
export const EditCandidateProfile = () => {
  const [filePhoto, setFilePhoto] = useState("");
  const { user, isLoadingUser } = useUser(); // user hiện tại
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [exp, setExp] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState();
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [error, setError] = useState({
    name: "",
    dob: "",
    address: "",
    email: "",
    phone: "",
    province: "",
  });
  const { updateCandidate, isLoading: isLoadingCandidate } =
    useUpdateCandidate();
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newError = {};
    if (name.replace(/\s+/g, " ").trim().length === 0) {
      newError.name = "Vui lòng nhập họ tên";
    }
    if (dob == null) {
      newError.dob = "Vui lòng chọn ngày sinh";
    }
    if (address.replace(/\s+/g, " ").trim().length === 0) {
      newError.address = "Vui lòng nhập địa chỉ";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newError.email = "Vui lòng nhập định dạng email hợp lệ";
    }
    const phoneRegex =
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    if (!phoneRegex.test(phone)) {
      newError.phone = "Vui lòng nhập định dạng số điện thoại hợp lệ";
    }
    if (province == 0) {
      newError.province = "Vui lòng chọn tỉnh thành";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      toast.error("Dữ liệu bạn nhập chưa hợp lệ vui lòng kiểm tra lại");
      return;
    }
    const formData = new FormData();

    formData.append("fullName", name.replace(/\s+/g, " ").trim());
    formData.append("birthDate", formatDate(dob));
    formData.append("yearExperience", exp);
    formData.append("bio", bio);
    formData.append("currentJob", currentJob.replace(/\s+/g, " ").trim());
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("file", filePhoto);
    formData.append("provinceName", province);
    formData.append("address", address.replace(/\s+/g, " ").trim());

    const result = await updateCandidate({
      id: user.data.candidateId,
      formData,
    });

    if (result.status == 200) {
      setError({});
    }
  };
  useEffect(() => {
    if (user) {
      setName(user.data.fullName);
      setDob(user.data.birthDate);
      setExp(user.data.yearExperience);
      setBio(user.data.bio ?? "");
      setCurrentJob(
        user.data.currentJob && user.data.currentJob !== "null"
          ? user.data.currentJob
          : "Không có"
      );
      setPhone(user.data.phone);
      setEmail(user.data.email);
      setProvince(user.data.provinceName);
      setAddress(user.data.address);
      setFilePhoto(user.data.photo);
    }
  }, [user]);
  if (isLoadingUser || isLoadingCandidate) return <LoadingPage />;
  return (
    <>
      <div className="bg-white p-3">
        <h5>Thông tin cá nhân</h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
        <form onSubmit={handleSubmit}>
          <div className="row border-bottom pt-3 pb-3">
            <div className="col-lg-2">
              {typeof filePhoto === "object" ? (
                <img
                  src={URL?.createObjectURL(filePhoto)}
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    height: "100px",
                    objectFit: "cover",
                    position: "relative",
                  }}
                />
              ) : (
                <img
                  src={`http://localhost:8080/api/v1/files/${filePhoto}`}
                  // src="./b3.png"
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    height: "100px",
                    objectFit: "cover",
                    position: "relative",
                  }}
                />
              )}
              <label
                htmlFor="filePhoto"
                className="btn main-color-bold col-lg-3 p-0 m-0 rounded-circle bg-transparent"
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  right: "26px",
                }}
              >
                <i className="fa fa-camera"></i>
              </label>

              <input
                id="filePhoto"
                type="file"
                onChange={(e) => setFilePhoto(...e.target.files)}
                accept="image/*"
                encType="multipart/form-data"
                className="d-none"
              />
            </div>
            <div className="col-lg-10">
              <div className="form-group col-lg-12 h-100">
                <label>Giới thiệu:</label>
                <br />
                <textarea
                  style={{ resize: "none" }}
                  className="w-100 h-75"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="form-group col-lg-6">
              <label>Họ và tên:</label>
              <InputRequire />
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ErrorText errorText={error.name} />
            </div>
            <div className="form-group col-lg-4">
              <label>Công việc hiện tại:</label>
              <input
                type="text"
                className="form-control"
                value={currentJob}
                onChange={(e) => setCurrentJob(e.target.value)}
              />
            </div>
            <div className="form-group col-lg-2">
              <label>Kinh nghiệm:</label>
              <input
                type="number"
                className="form-control"
                min={0}
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-6">
              <label>Email:</label>
              <InputRequire />
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ErrorText errorText={error.email} />
            </div>
            <div className="form-group col-lg-6">
              <label>Số điện thoại:</label>
              <InputRequire />
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <ErrorText errorText={error.phone} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-6">
              <label>Ngày sinh:</label>
              {/* <input
                                type="text"
                                className="form-control"
                                value={dob}
                            /> */}
              <InputRequire />
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={dob}
                className="form-control w-full"
                onChange={(date) => setDob(date)}
              />
              <ErrorText errorText={error.dob} />
            </div>
            <div className="form-group col-lg-6">
              <label>Địa chỉ:</label>
              <InputRequire />
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <ErrorText errorText={error.address} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-6">
              <label>Tỉnh / Thành phố:</label>
              <InputRequire />
              <ProvinceNameSelect
                provinceName={province}
                setProvinceName={setProvince}
              />
              <ErrorText errorText={error.province} />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary font-weight-bold"
            style={{ display: "flex", float: "right" }}
          >
            Lưu thông tin
          </button>
        </form>
      </div>
      <EditTimeLine user={user?.data} />
    </>
  );
};
