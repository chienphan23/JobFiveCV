import { Link, useLocation } from "react-router-dom";
import { useGetIndustry } from "../API/useGetIndustry";
import { ErrorText } from "./ErrorText";
import { LoadingPage } from "./LoadingPage";
import { useEffect, useState } from "react";

export const JobTypeSelect = ({ type, setType }) => {
  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <select
        key={"selectIndustry"}
        className="form-control padding-select outline-input border-select"
        id="exampleFormControlSelect1"
        onChange={(e) => handleChange(e)}
        value={type ? type : -1}
      >
        <option value={-1} disabled selected>
          Chọn Hình thức làm việc
        </option>

        <option key={0} value={0}>
          Tất cả hình thức
        </option>
        <option key={"1"} value={1}>
          Việc làm bán thời gian
        </option>
        <option key={"2"} value={2}>
          Việc làm toàn thời gian
        </option>
      </select>
    </>
  );
};
