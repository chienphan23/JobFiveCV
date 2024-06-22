import { useGetEmployer } from "./EmployerAPI/useGetEmployer";
import { JobOfCompany } from "../Job/JobUI/JobOfCompany";
import { EmployerInformation } from "./EmployerUI/EmployerInformation";
import { EmployerMap } from "./EmployerUI/EmployerMap";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../Context/UseContext";
import { useGetJobByEmployer } from "../Job/JobAPI/useGetJobByEmployer";
import { LoadingPage } from "../../UI/LoadingPage";
import { PageNotFound } from "../../UI/PageNotFound";

export const EmployerProfile = () => {
    const { id } = useParams();
    const { user, isLoadingUser } = useUser();
    const { employerCurrent, isLoading } = useGetEmployer(id);
    const { jobs, isLoadingJob } = useGetJobByEmployer(id);
    if (isLoading || isLoadingJob || isLoadingUser) {
        return <LoadingPage />;
    }
    if (!user || !employerCurrent) {
        return <PageNotFound />;
    }
    console.log(jobs);

    return (
        <>
            <div className="default-background">
                <div className="container pt-4 pb-4 default-background">
                    <EmployerInformation
                        employerCurrent={employerCurrent?.data}
                        user={user?.data}
                    />

                    <div className="row row-gap mt-5">
                        <div className="col-lg-8">
                            <div
                                className="linear-background text-white"
                                style={{
                                    borderTopLeftRadius: "16px",
                                    borderTopRightRadius: "16px",
                                    padding: "16px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                }}
                            >
                                Giới thiệu công ty
                            </div>
                            <div
                                style={{
                                    padding: "20px 24px",
                                    borderBottomLeftRadius: "16px",
                                    borderBottomRightRadius: "16px",
                                }}
                                className="white-background"
                            >
                                <div className="row">
                                    <h6
                                        className="col-lg-12"
                                        style={{
                                            fontWeight: "500",
                                            margin: "18px 0",
                                        }}
                                    >
                                        Mô tả
                                    </h6>
                                    <div className="col-lg-12 mb-2">
                                        {employerCurrent?.data?.description ??
                                            "Chưa có mô tả công ty"}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div
                                        className="d-flex justify-content-between linear-background"
                                        style={{
                                            borderTopLeftRadius: "16px",
                                            borderTopRightRadius: "16px",
                                            padding: "16px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <p className="text-white">
                                            Danh sách tuyển dụng
                                        </p>

                                        {user?.data?.employerId == id && (
                                            <Link
                                                to="/manage-job"
                                                style={{ color: "white" }}
                                            >
                                                Quản lý tin
                                            </Link>
                                        )}
                                    </div>
                                    <div
                                        style={{
                                            padding: "20px 24px",
                                            borderBottomLeftRadius: "16px",
                                            borderBottomRightRadius: "16px",
                                        }}
                                        className="white-background"
                                    >
                                        {jobs?.data.length !== 0 ? (
                                            jobs?.data?.map((index, limit) => (
                                                
                                                    limit < 5 &&

                                                    <JobOfCompany
                                                    key={index.jobId}
                                                    employer={
                                                        employerCurrent?.data
                                                    }
                                                    job={index}
                                                    />
                                                
                                            ))
                                        ) : (
                                            <div className="text-center">
                                                <p>
                                                    Chưa có tin tuyển dụng nào
                                                    được đăng.
                                                </p>
                                                <br />
                                                {user &&
                                                    user?.data?.userId ===
                                                        id && (
                                                        <Link
                                                            to=""
                                                            className="btn btn-primary my-3"
                                                        >
                                                            Đăng tin ngay
                                                        </Link>
                                                    )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="linear-background text-white "
                                style={{
                                    borderTopLeftRadius: "16px",
                                    borderTopRightRadius: "16px",
                                    padding: "16px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                }}
                            >
                                Thông tin liên hệ
                            </div>
                            <div
                                className="white-background"
                                style={{
                                    padding: "20px 24px",
                                    borderBottomLeftRadius: "16px",
                                    borderBottomRightRadius: "16px",
                                }}
                            >
                                <div className="row">
                                    <h6
                                        className="col-lg-12"
                                        style={{
                                            fontWeight: "500",
                                            margin: "18px 0",
                                        }}
                                    >
                                        Số điện thoại
                                    </h6>
                                    <div className="col-lg-12 mb-2">
                                        {employerCurrent.data.phone}
                                    </div>
                                </div>

                                <div className="row">
                                    <h6
                                        className="col-lg-12"
                                        style={{
                                            fontWeight: "500",
                                            margin: "18px 0",
                                        }}
                                    >
                                        Email
                                    </h6>
                                    <div className="col-lg-12 mb-2">
                                        {employerCurrent.data.email}
                                    </div>
                                </div>

                                <EmployerMap
                                    employerCurrent={employerCurrent}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
