import React, { useEffect, useRef, useState } from "react";
import { InputRequire } from "../../UI/InputRequire";

const CreateIndustryModal = ({
  showModal,
  handleCreate,
  toggleModal,
  errorCreateIndustry,
}) => {
  const [industryName, setIndustryName] = useState("");
  const [error, setError] = useState({
    industryName: "",
  });

  const CreateIndustry = async () => {
    const newError = {};
    if (industryName.replace(/\s+/g, ' ').trim().length === 0) {
      newError.industryName = "Vui lòng nhập tên ngành";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    handleCreate(industryName.replace(/\s+/g, ' ').trim());
    setIndustryName("");
    toggleModal();
    setError({ industryName: "" });
  };
  useEffect(() => {
    if (errorCreateIndustry) {
      const newError = {};
      if (errorCreateIndustry?.message === "Industry name is required") {
        errorCreateIndustry.message = "Vui lòng nhập tên ngành";
      }
      setError({ ...newError });
    }
  }, [errorCreateIndustry]);

  return (
    <>
      <div
        className="modal fade"
        id="CreateIndustryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createIndustryModalLabel">
                Tạo mới ngành nghề
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="industryName">Tên ngành nghề:</label>
                <InputRequire/>
                <input
                  type="text"
                  className="form-control"
                  id="industryName"
                  value={industryName}
                  onChange={(e) => {
                    setIndustryName(e.target.value);
                    setError("");
                  }}
                />
                <div
                  className="text-danger mt-2"
                  style={{ marginBottom: "10px" }}
                >
                  {error && error?.industryName}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={CreateIndustry}
                data-dismiss={industryName ? "modal" : undefined}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIndustryModal;
