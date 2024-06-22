import { Link } from "react-router-dom";
import { useGetIndustry } from "../API/useGetIndustry";
import { ErrorText } from "./ErrorText";
import { LoadingPage } from "./LoadingPage";

// Ở component cha const [arrayIndustryId, setArrayIndustryId] = useState([])
// const [arrayIndustrys, setArrayIndustrys] = useState([])
export const IndustrySelect = ({
  arrayIndustryId,
  setArrayIndustryId,
  arrayIndustrys,
  setArrayIndustrys,
  errorIndustry,
}) => {
  const { listIndustry, isLoading } = useGetIndustry();

  const handleAddArrayIndustrys = (e) => {
    const check = arrayIndustrys.filter(
      (i) => i === e.target.options[e.target.value].textContent
    );
    if (check.length === 0) {
      setArrayIndustrys((i) => [
        ...i,
        e.target.options[e.target.value].textContent,
      ]);
      setArrayIndustryId((i) => [...i, e.target.value]);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <div className="d-flex">
        <select
          key={"selectIndustry"}
          className="form-control text-center w-50 mr-5"
          id="exampleFormControlSelect1"
          onChange={(e) => handleAddArrayIndustrys(e)}
        >
          <option key={"-1"}>-- Chọn Ngành nghề liên quan --</option>
          {listIndustry.data.map((i) => (
            <option key={i.industryId} value={i.industryId}>
              {i.industryName}
            </option>
          ))}
        </select>
        <div className="row row-gap w-50">
          {arrayIndustrys.map((i, index) => (
            <Link
              key={index}
              to={`/${arrayIndustryId[index]}`}
              className="background-card border-main p-2 main-color-bold mr-2"
            >
              {i}
            </Link>
          ))}
        </div>
        <ErrorText errorText={errorIndustry} />
      </div>
    </>
  );
};
