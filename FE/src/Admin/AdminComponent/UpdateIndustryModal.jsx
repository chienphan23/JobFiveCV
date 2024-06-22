import React, { useEffect, useState } from "react";
import { useUpdateIndustry } from "../AdminAPI/use/useUpdateIndustry";
import { useGetIndustryById } from "../AdminAPI/use/useGetIndustryById";
import { LoadingPage } from "../../UI/LoadingPage";
import { InputRequire } from "../../UI/InputRequire";

const UpdateIndustryModal = ({
  showModal,
  numberButton,
  onUpdateSuccess,
  toggleModal,
  errorUpdateIndustry,
}) => {
  const { UpdateIndustry } = useUpdateIndustry();
  const { industry, isLoading } = useGetIndustryById(numberButton);
  const [industryName, setIndustryName] = useState("");

  const [error, setError] = useState({
    industryName: "",
  });

  const handleUpdate = async () => {
    const newError = {};
    if (industryName.replace(/\s+/g, ' ').trim().length == 0) {
      newError.industryName = "Vui lòng nhập tên ngành";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    const formData = new FormData();
    formData.append("industryName", industryName.replace(/\s+/g, ' ').trim());
    await UpdateIndustry({ industryId: numberButton, formData });
  
    setIndustryName(industryName);
    setError({});
    toggleModal();
  };

  useEffect(() => {
    if (errorUpdateIndustry) {
      const newError = {};
      if (errorUpdateIndustry?.message === "Industry name is required") {
        errorUpdateIndustry.message = "Vui lòng nhập tên ngành";
      }
      newError.password = errorUpdateIndustry.message;
      setError({ ...newError });
    }
    if (industry) {
      setIndustryName(industry.data.industryName);
    }
  }, [isLoading, industry, errorUpdateIndustry]);

  return (
    <div
      className="modal fade"
      id="UpdateIndustryModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createIndustryModalLabel"
      aria-hidden="true"
    >
      {console.log(numberButton)}
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createIndustryModalLabel">
              Cập nhật ngành nghề
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
                onChange={(e) => setIndustryName(e.target.value)}
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
              data-dismiss={industryName ? "modal" : undefined}
              type="button"
              className="btn btn-outline-info"
              onClick={handleUpdate}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateIndustryModal;
