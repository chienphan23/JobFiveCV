import { Link } from "react-router-dom";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useGetEmployerByJob } from "../../Employer/EmployerAPI/useGetEmployerByJob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDeleteJobInterested } from "../../Candidate/CandidateAPI/useDeleteJobInterested";

export const JobResult = ({ job }) => {
  const { employerCurrent, isLoading } = useGetEmployerByJob(
    job?.employerId,
    job?.jobId
  );
  let ngayHetHan = new Date(job?.expirationDate);
  const [soNgayConLai, setSoNgayConLai] = useState(0);
  const { deleteJobInterested } = useDeleteJobInterested();
  useEffect(() => {
    const tinhSoNgayConLai = () => {
      const ngayHienTai = new Date();
      const soNgay = Math.ceil((ngayHetHan - ngayHienTai) / (1000 * 3600 * 24));
      setSoNgayConLai(soNgay);
    };

    tinhSoNgayConLai();

    // Cập nhật số ngày còn lại mỗi giây
    const timer = setInterval(tinhSoNgayConLai, 1000);

    return () => clearInterval(timer);
  }, [ngayHetHan]);
  if (isLoading) return <LoadingPage />;
  return (
    <>
      {/* <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="rounded p-3 position-relative employer-card border border-info bg-white">
          <Link to={`/job/${job.jobId}`}>
            <p
              className="font-weight-bold line-clamp"
              style={{ fontSize: "13px" }}
            >
              {job.jobName}
            </p>
            <div className="d-flex">
              <div className="d-flex flex-row mt-1">
                <img
                  src={`http://localhost:8080/api/v1/files/${employerCurrent?.data?.photo}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div className="ml-4">
                  <div
                    className="font-weight-bold text-muted line-clamp"
                    style={{ fontSize: "12px" }}
                  >
                    {employerCurrent.data.employerName}
                  </div>
                  <div>
                    <i className="mr-2 text-muted">
                      <FontAwesomeIcon icon={faMoneyBill1}></FontAwesomeIcon>
                    </i>

                    {job.minSalary == 0 && job.maxSalary == 0 ? (
                      <span className="text-dark">Lương thoả thuận</span>
                    ) : (
                      <span className="text-dark" style={{ fontWeight: "600" }}>
                        {job.minSalary} - {job.maxSalary} {"triệu"}
                      </span>
                    )}
                  </div>
                  <div>
                    <i className="mr-2 text-muted">
                      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    </i>
                    <span className="text-dark">{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto ml-auto text-muted font-weight-bold">
                {soNgayConLai > 0
                  ? ` Còn ${soNgayConLai} ngày để ứng tuyển`
                  : "Hết hạn tuyển dụng"}
              </div>
            </div>
          </Link>
        </div>
      </div> */}
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="d-flex flex-column h-100">
          <div className="rounded p-3 position-relative employer-card border border-info bg-white d-flex flex-column h-100">
            <Link to={`/job/${job.jobId}`} className="d-flex flex-column h-100">
              <p
                className="font-weight-bold line-clamp"
                style={{ fontSize: "13px" }}
              >
                {job.jobName}
              </p>
              <div className="d-flex flex-column flex-grow-1">
                <div className="d-flex flex-row mt-1 flex-grow-1">
                  <img
                    src={`http://localhost:8080/api/v1/files/${employerCurrent?.data?.photo}`}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="ml-4">
                    <div
                      className="font-weight-bold text-muted line-clamp"
                      style={{ fontSize: "12px" }}
                    >
                      {employerCurrent.data.employerName}
                    </div>
                    <div>
                      <i className="mr-2 text-muted">
                        <FontAwesomeIcon icon={faMoneyBill1} />
                      </i>
                      {job.minSalary == 0 && job.maxSalary == 0 ? (
                        <span className="text-dark">Lương thoả thuận</span>
                      ) : (
                        <span
                          className="text-dark"
                          style={{ fontWeight: "600" }}
                        >
                          {job.minSalary} - {job.maxSalary} {"triệu"}
                        </span>
                      )}
                    </div>
                    <div>
                      <i className="mr-2 text-muted">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </i>
                      <span className="text-dark">{job.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto ml-auto text-muted font-weight-bold">
                  {soNgayConLai > 0
                    ? ` Còn ${soNgayConLai} ngày để ứng tuyển`
                    : "Hết hạn tuyển dụng"}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
