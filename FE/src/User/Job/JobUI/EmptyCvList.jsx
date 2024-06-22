import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmptyCvList({ setSelected, setFile }) {
    function handleSelectFile(e) {
        setSelected(e.target.files[0].name);
        setFile(e.target.files[0]);
    }
    return (
        <div>
            <img
                src="/emptylist.jpg"
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                }}
            />
            <br />
            <span
                style={{
                    fontSize: "12px",
                    fontWeight: "500",
                }}
            >
                Bạn chưa có hồ sơ nào
            </span>
            <br />
            <div className="d-flex mt-2 justify-content-between align-items-center">
                <button
                    className="btn btn-upload rounded text-center w-50 py-1"
                    style={{
                        backgroundColor: "rgb(248, 246, 251)",
                    }}
                    type="button"
                >
                    <label
                        className="mb-0"
                        style={{
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        <i>
                            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                        </i>
                        &nbsp;&nbsp;&nbsp;Tải lên hồ sơ từ thiết bị
                        <input
                            type="file"
                            onChange={(e) => handleSelectFile(e)}
                            accept=".pdf"
                            encType="multipart/form-data"
                            className="d-none"
                        />
                    </label>
                </button>
                <span className="text-muted" style={{ fontSize: "12px" }}>
                    File .doc, .docx, .pdf dung lượng &lt;= 5 MB
                </span>
            </div>
        </div>
    );
}

export default EmptyCvList;
