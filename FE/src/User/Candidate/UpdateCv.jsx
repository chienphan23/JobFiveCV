import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateCv } from "./CandidateAPI/useCreateCv";
import { LoadingPage } from "../../UI/LoadingPage";
import { useUser } from "../../Context/UseContext";
import { useGetOneCv } from "./CandidateAPI/useGetOneCv";
import { useUpdateCv } from "./CandidateAPI/useUpdateCv";
import { useDeleteCv } from "./CandidateAPI/useDeleteCv";
import { Modal } from "../../UI/Modal";
import { ErrorText } from "../../UI/ErrorText";
import toast from "react-hot-toast";

export default function UpdateCv() {
  // const check = false;
  const navigate = useNavigate();
  const { id } = useParams();
  const [cvFile, setCvFile] = useState({});
  const { user, isLoadingUser } = useUser();
  const { cv, isLoading: isLoadingCv } = useGetOneCv(id);
  let hadId = cv?.data.cvId;
  const { createCv, isLoading } = useCreateCv();
  const { updateCv, isLoading: isLoadingUpdate } = useUpdateCv();
  const { deleteCv, isLoading: isLoadingDelete } = useDeleteCv();
  // const [error, setError] = useState({
  //   cvFile: "",
  // });

  async function handleSubmit(e) {
    e.preventDefault();

    // const newError = {};
    // if (!("name" in cvFile)) {
    //   newError.cvFile = "Vui lòng chọn hồ sơ";
    // }
    // if (Object.keys(newError).length > 0) {
    //   setError(newError);
    //   toast.error("Dữ liệu bạn nhập chưa hợp lệ vui lòng kiểm tra lại");
    //   return;
    // }

    const formData = new FormData();
    formData.append("candidateId", user?.data.candidateId);
    formData.append("file", cvFile);
    formData.append("mainCV", 0);
    if (id) {
      updateCv({ id, formData });
    } else {
      createCv(formData);
      // if (result.status === 200) {
      //     setError({});
      // }
    }
  }
  async function handleDeleteFile(id) {
    await deleteCv(id);
    return;
  }
  if (
    isLoading ||
    isLoadingUser ||
    isLoadingCv ||
    isLoadingUpdate ||
    isLoadingDelete
  )
    return <LoadingPage />;
  return (
    <>
      <div className="bg-white p-3">
        <h5
          className="ml-2 text-dark"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-angle-left mr-2"></i>
          Tạo hồ sơ đính kèm
        </h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
        <div className="d-flex align-items-center justify-content-between py-2 border-bottom border-light px-3">
          <div
            className="d-flex align-items-center text-dark w-100"
            style={{ fontWeight: "600" }}
          >
            <span className="font-weight-bold" style={{ fontSize: "18px" }}>
              Tải CV đính kèm
            </span>
          </div>
        </div>

        <div className="d-block py-2 px-3">
          {hadId ? (
            <div
              className="d-flex align-items-center justify-content-between p-2 border rounded w-100"
              style={{ height: "3rem" }}
            >
              <div className="d-flex align-items-center w-75" style={{}}>
                <div className="mr-2">
                  <i className="fa fa-file"></i>
                </div>
                <Link target="_blank">
                  <div
                    style={{
                      color: "#414045",
                      fontSize: "14px",
                    }}
                  >
                    {cv?.data.cvFile}
                  </div>
                </Link>
              </div>
              <button
                className="text-danger rounded-circle d-flex align-items-center justify-content-center border-0"
                data-toggle="modal"
                data-target="#modalDeleteCv"
                style={{
                  backgroundColor: "#f8f6fb",
                  fontSize: "12px",
                  width: "40px",
                  height: "40px",
                }}
              >
                <i className="fa fa-lg fa-trash"></i>
              </button>
            </div>
          ) : (
            ""
          )}
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="d-block mt-3 d-flex align-items-center mb-2">
              <label
                className="d-block border border-light text-info d-flex align-items-center justify-content-center bg-light rounded-lg m-0"
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  gap: "8px",
                  width: "110px",
                  height: "36px",
                }}
                htmlFor="cv_file"
              >
                <i className="fa fa-lg fa-upload mx-2"></i>
                <input
                  type="file"
                  name="cv_file"
                  id="cv_file"
                  onChange={(e) => setCvFile(e.target.files[0])}
                  accept=".pdf"
                  encType="multipart/form-data"
                  hidden
                />
                <span>Tải File</span>
              </label>
              <p className="p-1 w-100">{cvFile.name}</p>

              <button
                type="submit"
                className="btn btn-outline-primary border ml-auto"
                disabled={!("name" in cvFile) ? true : false}
              >
                Lưu
              </button>
            </div>

            {/* <ErrorText errorText={error.cvFile} /> */}
          </form>
          <p className="d-block text-secondary" style={{ fontSize: "12px" }}>
            Định dạng file .doc, .docx, .pdf dung lượng nhỏ hơn 5 MB
          </p>
        </div>
      </div>
      <Modal id={"DeleteCv"}>
        <h5 style={{ textAlign: "center" }} className=" mb-5">
          Bạn có muốn xoá hồ sơ này không ?
        </h5>
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDeleteFile(cv?.data.cvId)}
            data-dismiss="modal"
          >
            Xoá
          </button>
          <button className="btn btn-outline-secondary" data-dismiss="modal">
            Hủy
          </button>
        </div>
      </Modal>
    </>
  );
}
