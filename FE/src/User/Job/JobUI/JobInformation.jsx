export const JobInformation = ({
  label,
  inputValue,
  onChangeFns,
  placeHolder,
}) => {
  return (
    <>
      <div className="col-lg-12 form-group">
        <div className="row mb-3">
          <div className="col-lg-12">
            <label>{label}</label>
            <span className="text-danger"> *</span>
            <br />
            <div className="mb-3 text-muted" style={{ fontSize: "12px" }}>
              Mỗi chi tiết công việc ghi trên một dòng
            </div>
          </div>
          <div className="col-lg-12">
            <textarea
              style={{ resize: "none" }}
              className="form-control"
              value={inputValue}
              onChange={onChangeFns}
              rows="7"
              placeholder={placeHolder}
            />
          </div>
        </div>
      </div>
    </>
  );
};
