import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const EmployerCard = ({ employer }) => {
    return (
        <>
            <div className="col-lg-3 col-md-4">
                <div className="rounded shadow p-3 position-relative employer-card border border-light">
                    <Link to={`/employer-profile/${employer.employerId}`}>
                        <div className="mx-auto text-center">
                            <img
                                src={`http://localhost:8080/api/v1/files/${employer?.photo}`}
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "50%",
                                }}
                            />
                            <div className="mt-2 line-clamp text-dark">
                                {employer.employerName}
                            </div>
                            <div
                                className="text-dark font-weight-bold"
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                }}
                            >
                                {employer.reviewScore}
                                <i className="ml-1 text-warning">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                    ></FontAwesomeIcon>
                                </i>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};
