import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const JobOfCompany = ({ employer, job }) => {
  const location = useLocation();
  const [path, setPath] = useState("");
  const [amountDaysLeft, setAmountDaysLeft] = useState(new Date());

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  let expiredDate = new Date(job?.expirationDate);
  useEffect(() => {
    const getAmountDaysLeft = () => {
      const dayLeft = Math.ceil(
        (expiredDate - new Date()) / (1000 * 3600 * 24)
      );
      setAmountDaysLeft(dayLeft);
    };

    getAmountDaysLeft();

    // Cập nhật số ngày còn lại mỗi giây
    const timer = setInterval(getAmountDaysLeft, 1000);

    return () => clearInterval(timer);
  }, [expiredDate]);


  return <div className="card flex-row border-main background-card align-items-center mb-2">
  <img
      className="card-img-top mx-4"
      src={
          `http://localhost:8080/api/v1/files/${employer?.photo}` ??
          "/logo.png"
      }
      alt={employer?.employerName}
      style={{ width: "112px", height: "112px", borderRadius: "50%" }}
  />
  <div className="card-body p-3">
      <h6 className="card-title line-clamp">{job?.jobName}</h6>
      <p className="d-block card-text m-0">
          {employer?.employerName ?? "Tên công ty"}
      </p>
      <p className="card-text">
          <b>{job.minSalary == 0 && job.maxSalary == 0 ? "Lương thoả thuận" : `${job?.minSalary} - ${job?.maxSalary} triệu`}</b>
      </p>
      <div className="row body-info align-items-center">
          <div className="col-lg-8 label-info mt-1 mb-1">
              <span className="d-inline-block white-background border-main main-color-bold p-1 mr-2 mb-1 ">
                  {job?.location ?? "Tỉnh thành"}
              </span>
              <span className="d-inline-block white-background border-main main-color-bold p-1">
                  {amountDaysLeft < 0
                      ? "Đã hết hạn tuyển dụng"
                      : `Còn ${amountDaysLeft} ngày để tuyển dụng `}
              </span>
          </div>
          <div className="col-lg-4 mt-1">
              <div className="row justify-content-around align-items-center row-gap">
                  <Link
                      to={`/job/${ job.jobId}`}
                      className="btn btn-info col-lg-8 col-sm-7"
                      style={{ fontSize: "14px" }}
                  >
                      Xem chi tiết
                  </Link>
                  
              </div>
          </div>
      </div>
  </div>
</div>
};
