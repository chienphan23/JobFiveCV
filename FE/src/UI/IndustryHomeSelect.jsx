import { Link, useLocation } from "react-router-dom";
import { useGetIndustry } from "../API/useGetIndustry";
import { ErrorText } from "./ErrorText";
import { LoadingPage } from "./LoadingPage";
import { useEffect, useState } from "react";

// Ở component cha const [arrayIndustryId, setArrayIndustryId] = useState([])
// const [arrayIndustrys, setArrayIndustrys] = useState([])
export const IndustryHomeSelect = ({ listIndustry, industry, setIndustry }) => {
  const location = useLocation();
  const [path, setPath] = useState("");

  const handleAddArrayIndustrys = (e) => {
    setIndustry(e.target.value);
  };

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname, path]);

  return (
    <>
      <select
        key={"selectIndustry"}
        className="form-control padding-select outline-input border-select"
        id="exampleFormControlSelect1"
        onChange={(e) => handleAddArrayIndustrys(e)}
        value={industry ? industry : "-1"}
      >
        <option key={"-1"} value={"-1"} disabled selected>
          Chọn Ngành nghề liên quan
        </option>
        {path === "/home" || path === "/search-page" ? (
          <option value={"0"}>Tất cả ngành nghề</option>
        ) : null}
        {listIndustry?.data?.map((i) => (
          <option key={i.industryId} value={i.industryId}>
            {i.industryName}
          </option>
        ))}
      </select>
    </>
  );
};
