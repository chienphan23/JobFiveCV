import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReportForm from "../ReportForm";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

function ReportButton({ job, user }) {
    return (
        <>
            <div className="d-flex w-100 mr-2">
                <button
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#myModal"
                    style={{ marginLeft: "auto", fontSize: "14px" }}
                >
                    <FontAwesomeIcon icon={faFlag} className="mr-2" />
                    Báo cáo
                </button>
            </div>
            <ReportForm job={job} user={user} />
        </>
    );
}

export default ReportButton;
