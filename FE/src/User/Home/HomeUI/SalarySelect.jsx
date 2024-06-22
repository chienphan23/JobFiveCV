import { useState } from "react";

//Ở component cha const [provinceName, setProvinceName] = useState("")
export const SalarySelect = ({
  minSalary,
  setMinSalary,
  maxSalary,
  setMaxSalary,
}) => {
  const handleChangeSelect = (e) => {
    console.log(e.target.value);
    if (e.target.value == 1) {
      console.log("123");
      setMinSalary(0);
      setMaxSalary(10);
    }
    if (e.target.value == -1 || e.target.value == 0) {
      setMinSalary(0);
      setMaxSalary(0);
    }
    if (e.target.value == 2) {
      setMinSalary(10);
      setMaxSalary(20);
    }
    if (e.target.value == -2) {
      setMinSalary(-1);
      setMaxSalary(-1);
    }
    if (e.target.value == 3) {
      setMinSalary(20);
      setMaxSalary(30);
    }
    if (e.target.value == 4) {
      setMinSalary(30);
      setMaxSalary(40);
    }
    if (e.target.value == 5) {
      setMinSalary(40);
      setMaxSalary(50);
    }
    if (e.target.value == 6) {
      setMinSalary(50);
      setMaxSalary(500);
    }
  };

  return (
    <>
      <select
        key="selectSalary"
        className="form-control padding-select outline-input border-select"
        id="exampleFormControlSelect1"
        onChange={(e) => handleChangeSelect(e)}
        name="selectSalary"
        value={
          minSalary == 0 && maxSalary == 10
            ? 1
            : minSalary == 0 && maxSalary == 0
            ? 0
            : minSalary == -1 && maxSalary == -1
            ? -2
            : minSalary == 10 && maxSalary == 20
            ? 2
            : minSalary == 20 && maxSalary == 30
            ? 3
            : minSalary == 30 && maxSalary == 40
            ? 4
            : minSalary == 40 && maxSalary == 50
            ? 5
            : minSalary == 50 && maxSalary == 500
            ? 6
            : 0
        }
      >
        <option key={-1} value={-1} disabled selected>
          Chọn mức lương
        </option>
        <option value={0}>Tất cả mức lương</option>
        <option value={-2}>Mức lương thoả thuận</option>
        <option value={1}>Dưới 10 triệu</option>
        <option value={2}>10 - 20 triệu</option>
        <option value={3}>20 - 30 triệu</option>
        <option value={4}>30 - 40 triệu</option>
        <option value={5}>40 - 50 triệu</option>
        <option value={6}>Trên 50 triệu</option>
      </select>
    </>
  );
};
