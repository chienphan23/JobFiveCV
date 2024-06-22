import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faCheck, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useGetEmployer } from "../../Employer/EmployerAPI/useGetEmployer";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useDeleteFollow } from "../../Candidate/CandidateAPI/useDeleteFollow";

export const Company = ({ follow }) => {
    const { employerCurrent, isLoading: isLoadingEmployer } = useGetEmployer(
        follow.employerId
    );

    const { deleteFollow, isLoading: isLoadingFollow } = useDeleteFollow();

    async function handleDeleteFollow(id) {
        await deleteFollow(id);
    }

    if (isLoadingEmployer || isLoadingFollow) return <LoadingPage />;
    return (
        <>
            <div className="card flex-row border-main background-card align-items-center mb-3">
                <img
                    className="card-img-top ml-4 mr-3"
                    src={`http://localhost:8080/api/v1/files/${employerCurrent?.data.photo}` ??
                    "/logo.png"}
                    alt="Card image"
                    style={{ width: "112px", height: "112px", borderRadius: "50%" }}
                />
                <div className="card-body p-3">
                    <h6 className="card-title">
                        {employerCurrent?.data.employerName}
                    </h6>
                    <p className="d-block card-text m-0">
                        {employerCurrent?.data.address ?? "Địa chỉ"}
                    </p>
                    <div className="row body-info align-items-center">
                        <div className="col-lg-8 label-info">
                            <span className="d-inline-block white-background border-main main-color-bold p-1 mr-2">
                                {employerCurrent?.data.provinceName ??
                                    "Tỉnh thành"}
                            </span>
                        </div>
                        <div className="col-lg-4">
                            <div className="row justify-content-around align-items-center row-gap">
                                <Link
                                    to={`/employer-profile/${follow.employerId}`}
                                    className="btn btn-info col-lg-8 col-sm-7"
                                    style={{ fontSize: "14px" }}
                                >
                                    Đi đến trang
                                </Link>
                                <button
                                    className="btn border-main col-lg-3 col-sm-3"
                                    onClick={() =>
                                        handleDeleteFollow(follow.followId)
                                    }
                                >
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="me-2  main-color-bold"
                                            style={{ fontSize: "15px" }}
                                        />
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
