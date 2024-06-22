import { useEffect, useState } from "react";
import { useGetTimeLine } from "./CandidateAPI/useGetTimeLine";
import { LoadingPage } from "../../UI/LoadingPage";
import { useCreateTimeLine } from "./CandidateAPI/useCreateTimeLine";
import toast from "react-hot-toast";
import { apiDeleteTimeLine } from "./CandidateAPI/apiDeleteTimeLine";
import { ErrorText } from "../../UI/ErrorText";
import { InputRequire } from "../../UI/InputRequire";

export const EditTimeLine = ({ user }) => {
  const [rows, setRows] = useState([{ id: Date.now(), time: "", job: "" }]);
  const { timeLines, isLoading } = useGetTimeLine(user.candidateId);
  const { createTimeLine, isLoading: loadingCreate } = useCreateTimeLine();
  const [error, setError] = useState("");
  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), time: "", job: "" }]);
  };
  console.log(timeLines);
  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    apiDeleteTimeLine(id);
  };

  const handleInputChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };
  async function handleSubmitTimeLine(e) {
    e.preventDefault();
    let newError = "";
    const paternYear = /^\d{4}-\d{4}$/;
    // Kiểm tra lỗi
    rows.forEach((row) => {
      if (
        row.time.replace(/\s+/g, " ").trim().length === 0 ||
        row.job.replace(/\s+/g, " ").trim().length === 0
      ) {
        newError = "Vui lòng nhập đầy đủ thông tin";
      }
      if (!paternYear.test(row.time)) {
        newError = "Vui lòng nhập thông tin đúng định dạng VD:2021-2024";
      }
    });

    // Nếu có lỗi, cập nhật error và return
    if (newError) {
      setError(newError);
      return;
    }

    setError("");
    // Xử lý API khi không có lỗi
    try {
      if (timeLines?.data.length > 0) {
        await apiDeleteTimeLine(user.candidateId);
      }

      for (const row of rows) {
        const formData = new FormData();
        formData.append("stage", row.time.replace(/\s+/g, " ").trim());
        formData.append("job", row.job.replace(/\s+/g, " ").trim());
        formData.append("candidateId", user.candidateId);
        await createTimeLine(formData);
      }

      toast.success("Bạn đã chỉnh sửa thông tin công việc thành công");
    } catch (error) {
      toast.error("Có lỗi xảy ra khi chỉnh sửa thông tin công việc");
    }
  }
  useEffect(() => {
    if (timeLines) {
      setRows([]);
      timeLines?.data.map((timeLine) =>
        setRows((r) => [
          ...r,
          {
            id: timeLine.timelineId,
            time: timeLine.stage,
            job: timeLine.job,
          },
        ])
      );
    }
  }, [timeLines]);
  if (isLoading || loadingCreate) return <LoadingPage />;
  return (
    <div>
      <div className="bg-white p-3 mt-3 d-flex justify-content-between mb-3">
        <h5>Quá trình làm việc</h5>
        <button
          className="btn p-0"
          onClick={handleAddRow}
          style={{ width: "30px" }}
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmitTimeLine}>
        <div className="bg-white p-3 rounded pb-5">
          {rows.map((row) => (
            <div key={row.id} className="form-row align-items-center">
              <div className="form-group col-lg-4">
                <label>Thời gian:</label>
                <InputRequire />

                <input
                  type="text"
                  className="form-control"
                  placeholder="VD: 2020-2024"
                  value={row.time}
                  onChange={(e) =>
                    handleInputChange(row.id, "time", e.target.value)
                  }
                />
              </div>
              <div className="form-group col-lg-7">
                <label>Công việc:</label>
                <InputRequire />

                <input
                  type="text"
                  className="form-control"
                  value={row.job}
                  onChange={(e) =>
                    handleInputChange(row.id, "job", e.target.value)
                  }
                />
              </div>
              <button
                type="button"
                className="btn ml-auto mt-2"
                style={{ height: "35px" }}
                onClick={() => handleRemoveRow(row.id)}
              >
                &times;
              </button>
            </div>
          ))}
          <ErrorText errorText={error} />

          <button
            className="btn btn-primary font-weight-bold"
            style={{ display: "flex", float: "right" }}
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};
