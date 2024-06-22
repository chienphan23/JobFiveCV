import {
  faContactBook,
  faEarth,
  faHourglass,
  faLocation,
  faLocationDot,
  faMoneyBill,
  faPaperPlane,
  faStar,
  faUser,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Job/css/job.css";
import { SummaryDescJob } from "./JobUI/SummaryDescJob";
import { SummaryDescCompany } from "./JobUI/SummaryDescCompany";
import { IndexOfJob } from "./JobUI/IndexOfJob";
import { LineButtonSubmit } from "./JobUI/LineButtonSubmit";
import { CategoryListOfJob } from "./JobUI/CategoryListOfJob";
import { Link, NavLink, useParams } from "react-router-dom";
import { useGetJob } from "./JobAPI/useGetJob";
import { LoadingPage } from "../../UI/LoadingPage";
import { ContentDescJob } from "./JobUI/ContentDescJob";
import { CategoryTag } from "./JobUI/CategoryTag";
import { parseISO, format } from "date-fns";
import { formatDate, formatDateTime } from "../../Utils/formatDateTime";
import { useUser } from "../../Context/UseContext";
import ReportButton from "./JobUI/ReportButton";
import { ListJobHome } from "../Home/ListJobHome";
import { PageNotFound } from "../../UI/PageNotFound";

export const DetailJob = () => {
  let { idJob } = useParams();
  // console.log(idJob);
  const {
    job,
    arrayJobDescription,
    arrayJobRequirement,
    arrayJobBenefit,
    employerOfJob,
    arrayIndustriesOfJob,
    isLoadingJob,
    isLoadingDescription,
    isLoadingRequirement,
    isLoadingBenefit,
    isLoadingEmployer,
    isLoadingIndustriesOfJob,
  } = useGetJob(idJob);
  // console.log(employerOfJob);
  const { user, isLoadingUser } = useUser();

  if (
    isLoadingJob ||
    isLoadingDescription ||
    isLoadingRequirement ||
    isLoadingBenefit ||
    isLoadingEmployer ||
    isLoadingIndustriesOfJob ||
    isLoadingUser
  )
    return <LoadingPage />;
  if (
    !user ||
    !job ||
    !arrayIndustriesOfJob ||
    !arrayJobBenefit ||
    !arrayJobDescription ||
    !arrayJobRequirement ||
    !employerOfJob
  )
    return <PageNotFound />;
  if (job?.data?.removed)
    return (
      <div className="style-body">
        <h1 className="style-h1"></h1>
        <p className="zoom-area"></p>
        <section style={{ textAlign: "center" }} className="pt-5">
          <h1 style={{ color: "white", fontWeight: "700" }}>
            Bài viết bị chặn bởi quản trị viên. Do vi phạm điều khoản của JOB5
          </h1>
        </section>
        <div className="link-container">
          <Link to={"/manage-job"} className="more-link">
            Quay lại
          </Link>
        </div>
      </div>
    );
  return (
    <>
      <div className="default-background pb-5">
        <div className="container">
          <div className="row mb-4 default-background">
            <div className="col-lg-8 default-background" style={{ flex: "1" }}>
              <div
                className="border-main white-background d-flex flex-column"
                style={{ padding: "20px 24px", height: "100%" }}
              >
                <div>
                  <h5 className="line-clamp">{job?.data?.jobName}</h5>
                </div>

                <div className="row mt-4">
                  <SummaryDescJob
                    icon={faMoneyBill}
                    title={"Mức lương"}
                    detail={
                      job.data?.minSalary == 0 && job.data?.maxSalary == 0
                        ? "Lương thoả thuận"
                        : `${job?.data?.minSalary} - ${job?.data?.maxSalary} triệu`
                    }
                  />
                  <SummaryDescJob
                    icon={faLocation}
                    title={"Địa điểm"}
                    detail={job?.data?.location}
                  />
                  <SummaryDescJob
                    icon={faHourglass}
                    title={"Năm kinh nghiệm"}
                    detail={`${job?.data?.yearExperience} năm`}
                  />
                </div>

                <div className="row mt-auto">
                  <div className="col-lg-12">
                    <i
                      style={{
                        padding: "0 5px 0 0",
                        fontSize: "18px",
                      }}
                    >
                      <FontAwesomeIcon icon={faWalking} className="me-2" />
                    </i>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Hạn nộp hồ sơ:
                    </span>
                    {job?.data?.expirationDate && (
                      <p className="ml-2">
                        {format(
                          parseISO(job?.data?.expirationDate),
                          "dd/MM/yyyy"
                        )}
                      </p>
                    )}
                  </div>
                </div>
                {user && user.data && "candidateId" in user.data && (
                  <LineButtonSubmit user={user} job={job} />
                )}
                {user && user.status === 706 && (
                  <div className="row mt-4">
                    <div className={`col-lg-8`}>
                      <Link
                        to={"/login"}
                        className="btn btn-info"
                        style={{
                          width: "100%",
                          fontWeight: "650",
                        }}
                      >
                        <i style={{ padding: "0 5px 0 0", fontSize: "18px" }}>
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="me-2"
                          />
                        </i>
                        Ứng tuyển ngay
                      </Link>
                    </div>
                    <div className={`col-lg-4`}>
                      <Link
                        to={"/login"}
                        className="btn btn-outline-info"
                        style={{ width: "100%", fontWeight: "650" }}
                        onClick={() => {}}
                      >
                        Lưu tin
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 default-background">
              <div
                className="border-main white-background"
                style={{ padding: "20px 24px" }}
              >
                <div
                  className="row mb-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <img
                      src={`http://localhost:8080/api/v1/files/${employerOfJob?.data?.photo}`}
                      alt="logo"
                      height={"75.5px"}
                      width={"75.5px"}
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                    className="pl-2"
                  >
                    {employerOfJob?.data?.employerName}
                  </div>
                </div>
                <SummaryDescCompany
                  icon={faStar}
                  title={"Đánh giá"}
                  desc={employerOfJob?.data?.reviewScore}
                />
                <SummaryDescCompany
                  icon={faLocationDot}
                  title={"Địa chỉ"}
                  desc={employerOfJob?.data?.address}
                />
                <SummaryDescCompany
                  icon={faContactBook}
                  title={"Điện thoại"}
                  desc={employerOfJob?.data?.phone}
                />

                <div className=" text-center mt-3" style={{ width: "100%" }}>
                  <Link
                    to={`/employer-profile/${employerOfJob?.data?.employerId}`}
                    className="btn btn-info"
                    style={{ fontWeight: "650", lineHeight: "27px" }}
                  >
                    Xem trang công ty
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-8 default-background">
              <div className="border-main padding-card white-background">
                <h5
                  className="font-weight-bold"
                  style={{
                    borderLeft: "7px solid #17A2B8",
                    paddingLeft: "10px",
                  }}
                >
                  Chi tiết tuyển dụng
                </h5>
                <IndexOfJob
                  title={"Mô tả công việc"}
                  arrayContent={
                    arrayJobDescription?.data ? arrayJobDescription.data : null
                  }
                />

                <div className="row">
                  <h6
                    className="col-lg-12 font-weight-bold"
                    style={{ margin: "18px 0" }}
                  >
                    Vị trí tuyển dụng
                  </h6>
                  <ContentDescJob
                    key={"vttd"}
                    content={job.data?.jobPosition}
                  />
                </div>
                <div className="row">
                  <h6
                    className="col-lg-12"
                    style={{ fontWeight: "500", margin: "18px 0" }}
                  >
                    Số lượng tuyển dụng
                  </h6>
                  <ContentDescJob
                    key={"sltd"}
                    content={`Đang tuyển ${job.data?.numPosition} người`}
                  />
                </div>

                <IndexOfJob
                  title={"Yêu cầu ứng viên"}
                  arrayContent={
                    arrayJobRequirement ? arrayJobRequirement.data : null
                  }
                />
                <IndexOfJob
                  title={"Quyền lợi"}
                  arrayContent={arrayJobBenefit ? arrayJobBenefit.data : null}
                />
                <div className="row">
                  <h6
                    className="col-lg-12 font-weight-bold"
                    style={{
                      margin: "18px 0",
                    }}
                  >
                    Thời gian làm việc
                  </h6>
                  <ContentDescJob
                    content={
                      job?.data?.typeId == "1"
                        ? "Làm bán thời gian"
                        : "Làm việc toàn thời gian"
                    }
                  />
                </div>
                <div className="row">
                  <h6
                    className="col-lg-12 font-weight-bold"
                    style={{
                      margin: "18px 0",
                    }}
                  >
                    Địa điểm làm việc
                  </h6>

                  <ContentDescJob
                    content={job?.data?.address + " ," + job?.data?.location}
                  />
                </div>
                {user && user.status === 200 && "candidateId" in user.data && (
                  <div className="row">
                    <ReportButton job={job?.data} user={user?.data} />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4 default-background">
              <div className="border-main padding-card white-background">
                <CategoryListOfJob
                  title={"Ngành nghề"}
                  arrayIndustriesOfJob={arrayIndustriesOfJob}
                />
                <div className="row mb-3">
                  <h5
                    className="col-lg-12"
                    style={{
                      borderLeft: "7px solid #17A2B8",
                      paddingLeft: "10px",
                      fontWeight: "700",
                      marginBottom: "18px",
                    }}
                  >
                    Khu vực
                  </h5>
                  <div
                    className="bg-info mb-3"
                    style={{
                      padding: "3px 6px",
                      borderRadius: "8px",
                      margin: "0 8px",
                    }}
                  >
                    <Link
                      to={`/search-page?provinceParam=${job?.data?.location}&minSalaryParam=0&maxSalaryParam=0&industryParam=0&experienceParam=0&searchKeyParam=&typeParam=0`}
                    >
                      <p className="text-white">{job?.data?.location}</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <ListJobHome />
          </div>
        </div>
      </div>
    </>
  );
};
