import { useEffect, useState } from "react";
import { LoadingPage } from "../../UI/LoadingPage";
import { useCreateJobReport } from "./JobAPI/useCreateJobReport";
import { apiCreateNotification } from "../Notification/NotificationAPI/apiCreateNotification";
import { formatDate } from "../../Utils/formatDateTime";
import { useGetReport } from "./JobAPI/useGetReport";
import { ErrorText } from "../../UI/ErrorText";

function ReportJob({ job, user }) {
  const { createJobReport, isLoading } = useCreateJobReport(job.jobId);
  const { report, isLoading: isLoadingReport } = useGetReport(
    user.candidateId,
    job.jobId
  );
  const [hadReported, setHadReported] = useState(false);
  const [reason, setReason] = useState("");
  const [error, setError] = useState({
    reason: "",
  });
  useEffect(() => {
    setHadReported(report?.data);
  }, [report]);

  function handleCliclReport() {
    const newError = {};
    if (reason.length === 0) {
      newError.reason = "Vui lòng nhập lý do báo xấu";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    const formData = new FormData();

    formData.append("jobId", job.jobId);
    formData.append("candidateId", user.candidateId);
    formData.append("description", reason);

    createJobReport(formData);

    const formData2 = new FormData();

    formData2.append("postDate", formatDate(new Date()));
    formData2.append("userId", 1);
    formData2.append(
      "message",
      `Ứng viên ${user?.fullName} đã báo cáo công việc ${job?.jobName}`
    );
    apiCreateNotification(formData2);
    setReason("");
    setError({})
  }

  if (isLoading || isLoadingReport) return <LoadingPage />;

  return (
    <>
      <div id="myModal" className="modal fade" role="dialog">
        <div
          className="modal-dialog"
          style={{
            minWidth: "60%",
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body d-flex flex-column">
              <div className="text-center">
                <img
                  src="/public/warning-report.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <br />
                <p
                  className="font-weight-bold"
                  style={{
                    fontSize: "20px",
                    color: "rgb(44 149 255)",
                  }}
                >
                  Báo cáo tin đăng
                </p>
              </div>
              <div style={{ fontSize: "14px", wordSpacing: "1" }}>
                <div style={{ fontWeight: "600" }}>
                  Xin chào {user?.fullName},
                </div>
                <div className="mt-1 mb-1">
                  Đây là tính năng nhằm báo cáo cho BQT website biết về nhà
                  tuyển dụng này đang lừa đảo ứng viên: thu phí, chiếm đoạt sức
                  lao động, sắp xếp công việc không đúng theo nội dung tin
                  đăng,...
                </div>
                <div>
                  Nếu bạn chắc chắn Nhà tuyển dụng với tin đăng [{job?.jobName}]
                  là lừa đảo vui lòng mô tả chi tiết.
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-3">
                  Lý do báo xấu
                  <span className="text-danger"> *</span>
                </div>
                <div className="col-lg-9">
                  <textarea
                    className="w-100 p-3"
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Vui lòng mô tả lý do tại đây"
                  />
                  <ErrorText errorText={error?.reason} />

                </div>
              </div>
            </div>
            <div className="modal-footer d-flex flex-column">
              <button
                className="btn btn-outline-danger font-weight-bold"
                style={{
                  width: "30%",
                  cursor: hadReported ? "default" : "pointer",
                }}

                onClick={handleCliclReport}
                disabled={hadReported}
                data-dismiss={reason ? "modal" : undefined}

              >
                {hadReported ? "Bạn đã báo cáo công việc này" : "Báo cáo"}
              </button>
              <button
                type="button"
                style={{ width: "30%" }}
                className="btn btn-light font-weight-bold"
                data-dismiss="modal"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportJob;
