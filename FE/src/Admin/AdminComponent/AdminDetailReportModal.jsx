import { format, parseISO } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteReportJob } from "../AdminAPI/use/useDeleteReportJob";
import { useHideJob } from "../AdminAPI/use/useHideJob";

const AdminDetailReportModal = ({
  showModal,
  numberButton,
  toggleModal,
  data,
}) => {
  const { deleteReportJob, isLoading } = useDeleteReportJob();
  const { hideJob, isLoading: isLoadingHideJob } = useHideJob();
  const navigate = useNavigate();

  const handleConfirmDelete = async () => {
    console.log(numberButton);
    await deleteReportJob(numberButton);
    // toggleModal(); // Đóng modal sau khi xóa
  };

  const handleConfirmHide = async () => {
    await hideJob({
      jobId: data.jobId,
      reportId: numberButton,
      employerId: data.employerId,
    });
    toggleModal(); // Đóng modal sau khi ẩn
  };

  const openNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  console.log(data);
  return (
    <div
      className="modal fade"
      id="AdminDetailReportModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">
              Chi tiết report bài viết
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="timeline-task">
                <div className="icon bg2">
                  <i className="fa fa-exclamation-triangle"></i>
                </div>
                <div className="tm-title">
                  <span style={{ fontWeight: "bold" }}>Người báo cáo: </span>
                  {data.fullname}
                  <div>
                    <span className="time">
                      <i className="ti-time"></i>
                      {data.reportDate
                        ? format(parseISO(data.reportDate), "dd-MM-yyyy")
                        : ""}
                    </span>
                  </div>
                </div>
                <div>
                  <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    Nhà tuyển dụng bị báo cáo:
                  </span>
                  {data.employername}
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Nội dung báo cáo: </span>

                  <textarea
                    className="form-control mt-2"
                    value={data.description}
                    rows="5"
                  />
                </div>

                <div className=" mt-2">
                  <span>Chi tiết bài viết báo cáo: </span>
                  <a
                    target="_blank"
                    style={{ color: "#0b57d0", cursor: "pointer" }}
                    onClick={() => openNewTab(`/job/${data?.jobId}`)}
                    data-dismiss="modal"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
              <div
                className="clearfix"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  data-dismiss="modal"
                  style={{ padding: "6px 24px", marginRight: "32px" }}
                  className="btn btn-outline-secondary"
                  onClick={handleConfirmDelete}
                >
                  Xóa report
                </button>
                <button
                  data-dismiss="modal"
                  onClick={handleConfirmHide}
                  style={{ padding: "6px 24px", marginLeft: "32px" }}
                  className="btn btn-outline-danger"
                >
                  Ẩn bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailReportModal;
