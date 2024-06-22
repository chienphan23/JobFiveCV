import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const SingleCV = ({ cv }) => {
    return (
        <>
            <div className="mt-3 bg-white p-4 rounded">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="mr-1">
                            <img
                                src="./doccument.jpg"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
                            {cv.cvFile}
                        </h3>
                    </div>
                    <div>
                        <Link
                            to={`/update-cv/${cv.cvId}`}
                            className="btn border rounded"
                            style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                            <i className="mr-2">
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                ></FontAwesomeIcon>
                            </i>
                            Cập nhật hồ sơ
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
