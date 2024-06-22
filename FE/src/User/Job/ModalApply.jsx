import { Link, useParams } from "react-router-dom";
import { useGetCV } from "../Candidate/CandidateAPI/useGetCV";
import EmptyCvList from "./JobUI/EmptyCvList";
import ListCvOfCandidate from "./JobUI/ListCvOfCandidate";
import { LoadingPage } from "../../UI/LoadingPage";
import { useEffect, useState } from "react";
import { useApplyJob } from "./JobAPI/useApplyJob";
import { Modal } from "react-bootstrap";
import { useCreateCv } from "../Candidate/CandidateAPI/useCreateCv";
import { parseISO, format } from "date-fns";
import { apiCreateNotification } from "../Notification/NotificationAPI/apiCreateNotification";
import { formatDate } from "../../Utils/formatDateTime";
import { faL } from "@fortawesome/free-solid-svg-icons";
export const ModalApply = ({ user, job }) => {
  const { cvs, isLoading: isLoadingCvList } = useGetCV(user?.data.candidateId);
  const { idJob } = useParams();
  const [cvSelected, setCvSelected] = useState("");
  const [newCv, setNewCv] = useState("");
  const { createCv, isLoading: isLoadingCreat } = useCreateCv();
  const { applyCv, isLoading: isLoadingApply } = useApplyJob(idJob);
  async function handleApplyJob(e) {
    e.preventDefault();
    let result = cvSelected;
    const formData2 = new FormData();
    if (cvs?.data.length == 0) {
      const formData1 = new FormData();
 
      formData1.append("candidateId", user?.data.candidateId);
      formData1.append("file", newCv);
 
      result = await createCv(formData1);
      formData2.append("cv", result?.data.cvFile);
    } else {
      formData2.append("cv", result);
    }
 
    formData2.append("jobId", idJob);
    formData2.append("candidateId", user?.data.candidateId);
    formData2.append("status", 1);
 
    await applyCv(formData2);
 
    const formData3 = new FormData();
 
    formData3.append("postDate", formatDate(new Date()));
    formData3.append("userId", job?.data.employerId);
    formData3.append(
      "message",
      `Ứng viên ${user?.data.fullName} đã ứng tuyển vào công việc ${job?.data.jobName} của bạn`
    );
    await apiCreateNotification(formData3);
  }
 
  if (isLoadingCvList || isLoadingApply || isLoadingCreat)
    return <LoadingPage />;
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ minWidth: "50%", margin: "auto" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title" id="exampleModalLabel">
                <p style={{ fontSize: "12px" }}>Ứng tuyển vào vị trí</p>
                <br />
                <h6
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Thợ thi công quảng cáo
                </h6>
                <p style={{ fontSize: "12px" }}>Công ty</p>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div
                className="modal-body d-flex flex-column text-center"
                style={{ overflowY: "scroll", height: "350px" }}
              >
                {cvs?.data.length < 1 && typeof newCv == "string" ? (
                  <EmptyCvList setSelected={setCvSelected} setFile={setNewCv} />
                ) : (
                  <ListCvOfCandidate
                    listCv={cvs}
                    selected={cvSelected}
                    setSelected={setCvSelected}
                  />
                )}
 
                <div className="text-left mt-3">
                  <div className="form-group">
                    <label>
                      Họ và tên
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ và tên"
                      value={user?.data.fullName}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Nhập email"
                      value={user?.data.email}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Số điện thoại
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập số điện thoại"
                      value={user?.data.phone}
                      disabled
                    />
                  </div>
                </div>
              </div>
 
              <div className="modal-footer d-flex flex-column">
                <div className="d-flex">
                  <input
                    type="checkbox"
                    required
                    className="mr-2"
                    style={{
                      flexShrink: "0",
                      height: "1rem",
                      width: "1rem",
                    }}
                    title="Please check this box before submitting"
                  />
                  <div>
                    Bằng việc nhấn nút nộp hồ sơ tôi đồng ý chia sẻ thông tin cá
                    nhân của mình với nhà tuyển dụng theo các
                    <Link to={""}> Điều khoản sử dụng</Link>,{" "}
                    <Link to={""}> Chính sách bảo mật</Link> và{" "}
                    <Link to={""}> Chính sách dữ liệu </Link>
                    cá nhân của JobFive
                  </div>
                </div>
                <button
                  // type="submit"
                  className="btn btn-outline-info ml-auto w-25"
                  style={{ fontSize: "14px" }}
                  onClick={handleApplyJob}
                  // onClick={() => setIsModalVisible(false)}
                  data-dismiss="modal"
                  disabled={newCv == "" && cvSelected == "" ? true : false}
                >
                  {newCv == "" && cvSelected == ""
                    ? "Vui lòng chọn hồ sơ"
                    : "Nộp hồ sơ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};