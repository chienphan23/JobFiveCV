import { Link, useParams } from "react-router-dom";
import { useGetCandidate } from "./CandidateAPI/useGetCandidate";
import { useGetTimeLine } from "./CandidateAPI/useGetTimeLine";
import { LoadingPage } from "../../UI/LoadingPage";
import { parseISO, format } from "date-fns";
import TimeLine from "./TimeLine";
import { useGetCvApplication } from "./CandidateAPI/useGetCvApplication";
export const DetailApplier = () => {
    const { candidateId, jobId } = useParams();
    const { candidate, isLoading: isLoadingCandidate } =
        useGetCandidate(candidateId);
    const { timeLines, isLoading: isLoadingTimeLine } =
        useGetTimeLine(candidateId);
    const { applicationCv, isLoading: isLoadingCv } = useGetCvApplication(
        candidateId,
        jobId
    );
    if (isLoadingCandidate || isLoadingTimeLine || isLoadingCv)
        return <LoadingPage />;
    let linkCv = "";
    if (applicationCv?.data.cv.endsWith(".pdf")) {
        linkCv = `http://localhost:8080/api/v1/files/${applicationCv?.data.cv}`;
    } else if (
        applicationCv?.data.cv.endsWith(".doc") ||
        applicationCv?.data.cv.endsWith(".docx")
    ) {
        linkCv = `http://localhost:8080/api/v1/downloadWord/${applicationCv?.data.cv}`;
    }
    return (
        <>
            <div className="bg-white p-3">
                <h5>Chi tiết ứng viên</h5>
            </div>
            <div className="p-3 bg-white mt-3">
                <div className="  rounded">
                    <div className="border-bottom">
                        <div className="d-flex align-items-end justify-content-between pb-3 my-2">
                            <div className="d-flex align-items-start">
                                <div>
                                    <img
                                        className="rounded-circle bg-transparent"
                                        style={{
                                            width: "104px",
                                            height: "104px",
                                        }}
                                        src={
                                            `
                                            http://localhost:8080/api/v1/files/${candidate?.data.photo}` ??
                                            "./b2.png"
                                        }
                                    />
                                </div>
                                <div className="ml-4">
                                    <div
                                        className="d-flex"
                                        style={{
                                            fontSize: "24px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <span>{candidate?.data.fullName}</span>
                                    </div>
                                    <div
                                        className="mt-1 text-black-50"
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {candidate?.data.currentJob}
                                    </div>
                                    <div className="mb-2">
                                        <span
                                            className="mt-1 text-black-50"
                                            style={{
                                                fontSize: "12px",
                                            }}
                                        >
                                            Lời giới thiệu:
                                        </span>
                                        <span
                                            className="text-black-50"
                                            style={{ fontSize: "12px" }}
                                        >
                                            {" " + candidate?.data.bio}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2">
                                <div className="d-flex justify-content-between">
                                    <div
                                        className="my-3"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        CV đính kèm
                                    </div>
                                    <div className="my-3 d-flex align-items-center text-black-50">
                                        <i
                                            className="fa fa-duotone fa-download"
                                            style={{
                                                width: "14px",
                                                height: "14px",
                                            }}
                                        ></i>
                                        Tải CV
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between rounded bg-light px-3 py-2">
                                    <div
                                        className="d-flex"
                                        style={{ width: "300px" }}
                                    >
                                        <i className="fa fa-lg fa-file"></i>
                                        <span
                                            className="ml-2"
                                            style={{ fontSize: "13px" }}
                                        >
                                            {applicationCv?.data.cv}
                                        </span>
                                    </div>

                                    <Link
                                        to={linkCv}
                                        target="_blank"
                                        className="ml-4 text-black-50"
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Xem
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <h6 className="font-weight-bold">Thông tin chung</h6>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="font-weight-bold">Email</div>
                        <div>{candidate?.data.email}</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="font-weight-bold">Số điện thoại</div>
                        <div>{candidate?.data.phone}</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="font-weight-bold">Tỉnh / Thành phố</div>
                        <div>{candidate?.data.provinceName}</div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="font-weight-bold">Ngày sinh</div>

                        <div>
                            {format(
                                parseISO(candidate?.data.birthDate),
                                "dd-MM-yyyy"
                            )}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="font-weight-bold">Năm kinh nghiệm</div>
                        <div>{candidate?.data.yearExperience} năm</div>
                    </div>
                    <div className="col-lg-4">
                        <div className="font-weight-bold">Địa chỉ</div>
                        <div>{candidate?.data.address}</div>
                    </div>
                </div>

                <div className="mt-3">
                    <h6 className="font-weight-bold border-top pt-3">
                        Quá trình làm việc
                    </h6>
                </div>
                <TimeLine timeLines={timeLines} />
            </div>
        </>
    );
};
