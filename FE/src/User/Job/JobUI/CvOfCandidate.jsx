import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CvOfCandidate({ cv, selected, setSelected }) {
    return (
        <div
            className="p-3 mb-2"
            style={{
                border: "2px solid #eee",
                borderRadius: "8px",
            }}
        >
            <div className="form-check d-flex align-items-center">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value={selected}
                    id={cv?.cvId ?? 1}
                />
                <label
                    className="form-check-label ml-2"
                    htmlFor={cv?.cvId ?? 1}
                    onClick={() => setSelected(cv?.cvFile ?? selected)}
                >
                    <div
                        style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        <i className="mr-2">
                            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        </i>
                        {cv?.cvFile ?? selected}
                    </div>
                </label>
            </div>
        </div>
    );
}

export default CvOfCandidate;
