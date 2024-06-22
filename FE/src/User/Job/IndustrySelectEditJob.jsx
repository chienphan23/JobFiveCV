import { Link } from "react-router-dom";
import { useGetIndustry } from "../../API/useGetIndustry";
import { ErrorText } from "../../UI/ErrorText";
import { LoadingPage } from "../../UI/LoadingPage";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRemove } from "@fortawesome/free-solid-svg-icons";

// Ở component cha const [arrayIndustryId, setArrayIndustryId] = useState([])
// const [arrayIndustrys, setArrayIndustrys] = useState([])
export const IndustrySelectEditJob = ({
  arrayIndustryId,
  setArrayIndustryId,
  arrayIndustrys,
  setArrayIndustrys,
  errorIndustry,
  isLoadingIndustriesOfJob,
}) => {
  const { listIndustry, isLoading } = useGetIndustry();

  const handleAddArrayIndustrys = (e) => {
    // console.log(e.nativeEvent.target[e.target.selectedIndex].text)
    const check = arrayIndustrys.filter(
      (i) => i === e.nativeEvent.target[e.target.selectedIndex].text
    );
    if (check.length === 0) {
      setArrayIndustrys((i) => [
        ...i,
        e.nativeEvent.target[e.target.selectedIndex].text,
      ]);
      setArrayIndustryId((i) => [...i, Number(e.target.value)]);
    }
  };
  useEffect(() => {
    if (
      arrayIndustryId &&
      arrayIndustrys &&
      arrayIndustrys.length === 0 &&
      !isLoadingIndustriesOfJob
    ) {
      arrayIndustryId.forEach((i) => {
        listIndustry.data.forEach((iList) => {
          if (iList.industryId == i) {
            setArrayIndustrys((e) => [...e, iList.industryName]);
          }
        });
      });
    } else {
      if (arrayIndustryId.length !== arrayIndustrys.length) {
        let arrayNew = [];
        arrayIndustryId.forEach((i) => {
          listIndustry.data.forEach((iList) => {
            if (iList.industryId == i) {
              arrayNew = [...arrayNew, iList.industryName];
              setArrayIndustrys(arrayNew);
            }
          });
        });
      }
      if (arrayIndustryId.length === 0) {
        setArrayIndustrys([]);
      }
    }
  }, [
    isLoadingIndustriesOfJob,
    arrayIndustryId,
    listIndustry,
    setArrayIndustrys,
    arrayIndustrys,
  ]);
  if (isLoading || isLoadingIndustriesOfJob) {
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
          style={{height: "calc(2.4rem + 2px)"}}
        >
          <option key={"-1"} disabled selected>
            --Chọn Ngành nghề liên quan--
          </option>
          {listIndustry?.data?.map((i) => (
            <option key={Number(i.industryId)} value={Number(i.industryId)}>
              {i.industryName}
            </option>
          ))}
        </select>

        <div className="row row-gap w-50">
          {arrayIndustrys.map((i, index) => {
            return (
              <Link
                key={index}
                className="background-card border-main p-2 main-color-bold mr-2"
              >
                {i}
                <i
                  style={{ flex: "1" }}
                  className="ml-2 "
                  onClick={() => {
                    let IdNeedRemove = listIndustry.data.find(
                      (iList) => iList.industryName === i
                    ).industryId;
                    setArrayIndustryId((e) =>
                      e.filter((i) => i !== IdNeedRemove)
                    );
                  }}
                >
                  <FontAwesomeIcon
                    icon={faRemove}
                    style={{ fontSize: "12px", padding: "0 2px" }}
                    className="hover-remove"
                  />
                </i>
              </Link>
            );
          })}
        </div>
        <ErrorText errorText={errorIndustry} />
      </div>
    </>
  );
};
