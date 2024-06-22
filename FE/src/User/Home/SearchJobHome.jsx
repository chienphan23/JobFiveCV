import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { useEffect, useState } from "react";
import { ExperienceSelect } from "./HomeUI/ExperienceSelect";
import { SalarySelect } from "./HomeUI/SalarySelect";
import { useGetIndustry } from "../../API/useGetIndustry";
import { IndustryHomeSelect } from "../../UI/IndustryHomeSelect";
import { JobTypeSelect } from "../../UI/JobTypeSelect";
import { LoadingPage } from "../../UI/LoadingPage";

export const SearchJobHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [provinceName, setProvinceName] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [experience, setExperience] = useState(0);
  const [searchKey, setSearchKey] = useState("");
  const { listIndustry, isLoading } = useGetIndustry();
  const [industry, setIndustry] = useState(0);
  const [type, setType] = useState(0);

  const location = useLocation();
  const [path, setPath] = useState("");

  const handleOnclickSearch = () => {
    setSearchParams({
      provinceParam: provinceName,
      experienceParam: experience,
      minSalaryParam: minSalary,
      maxSalaryParam: maxSalary,
      searchKeyParam: searchKey,
      industryParam: industry,
      typeParam: type,
    });
  };

  useEffect(() => {
    setPath(location.pathname);
    if (path === "/search-page") {
      setProvinceName(
        searchParams.get("provinceParam")
          ? searchParams.get("provinceParam")
          : "0"
      );
      setExperience(searchParams.get("experienceParam"));
      setMinSalary(searchParams.get("minSalaryParam"));
      setMaxSalary(searchParams.get("maxSalaryParam"));
      setSearchKey(searchParams.get("searchKeyParam"));
      setIndustry(searchParams.get("industryParam"));
      setType(searchParams.get("typeParam"));
    }
  }, [location.pathname, path, searchParams]);

  if (isLoading) return <LoadingPage />;
  return (
    <div>
      <section
        className="section-main"
        style={{
          backgroundColor:
            location.pathname.match(/\/job\//) ||
            location.pathname.match(/\/home\//)
              ? "#f6f6f6"
              : "white",
        }}
      >
        <div
          className="container border shadow"
          style={{
            borderRadius: "12px",
            backgroundColor: "rgb(126, 217, 231)",
          }}
        >
          <div className="row row-gap pt-4">
            <div className="col-lg-4">
              <div className="input-group">
                <input
                  style={{ height: "38px" }}
                  type="text"
                  className="form-control outline-input border-select"
                  placeholder="Nhập công việc muốn ứng tuyển"
                  onChange={(e) => setSearchKey(e.target.value)}
                  value={searchKey}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <IndustryHomeSelect
                listIndustry={listIndustry}
                industry={industry}
                setIndustry={setIndustry}
              />
            </div>
            <div className="col-lg-3">
              <ProvinceNameSelect
                provinceName={provinceName}
                setProvinceName={setProvinceName}
              />
            </div>
            <div className="col-lg-2">
              {path !== "/search-page" ? (
                <Link
                  to={`/search-page?provinceParam=${provinceName}&minSalaryParam=${minSalary}&maxSalaryParam=${maxSalary}&industryParam=${industry}&experienceParam=${experience}&searchKeyParam=${searchKey}&typeParam=${type}`}
                >
                  <button className="btn btn-info w-100" type="button">
                    <i style={{ fontSize: "14px" }}>
                      <FontAwesomeIcon icon={faSearch} />
                    </i>
                    Tìm việc
                  </button>
                </Link>
              ) : (
                <button
                  className="btn btn-info w-100"
                  type="button"
                  onClick={handleOnclickSearch}
                >
                  <i style={{ fontSize: "14px" }}>
                    <FontAwesomeIcon icon={faSearch} /> Tìm việc
                  </i>
                </button>
              )}
              {/* nếu path khác => làm thẻ link, nếu path giống thì dùng useSearchParam đưa lên url */}
            </div>
          </div>
          <div
            className="mt-3 row row-gap bg-white p-3 align-items-center"
            style={{ borderRadius: "12px" }}
          >
            <div className="col-lg-2 text-muted">Lọc nâng cao:</div>
            <div className="col-lg-10">
              <div className="row row-gap">
                <div className="col-lg-4">
                  <ExperienceSelect
                    experience={experience}
                    setExperience={setExperience}
                  />
                </div>
                <div className="col-lg-4">
                  <JobTypeSelect type={type} setType={setType} />
                </div>
                <div className="col-lg-4">
                  <SalarySelect
                    minSalary={minSalary}
                    setMinSalary={setMinSalary}
                    maxSalary={maxSalary}
                    setMaxSalary={setMaxSalary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
