import { useGetTopJobForHome } from "./HomeAPI/useGetTopJobForHome";
import { LoadingPage } from "../../UI/LoadingPage";
import { JobCard } from "./HomeUI/JobCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const ListJobHome = () => {
  const { listJobs, isLoading } = useGetTopJobForHome(8);
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPath(location.pathname);
  }, [location.pathname]);
  if (isLoading) return <LoadingPage />;
  return (
    <div className=" py-5">
      <div className="">
        <div className="d-flex justify-content-between mb-3 align-items-center">
          <div className="d-flex align-items-center">
            <img src="/logo.png" style={{ width: "40px", height: "40px" }} />
            <span
              className="font-weight-bold ml-2"
              style={{ fontSize: "24px" }}
            >
              {path === "/home" ? "Việc làm nổi bật" : "Việc làm gợi ý"}
            </span>
          </div>
          <div>
            <Link
              to={`/search-page?provinceParam=&minSalaryParam=0&maxSalaryParam=0&industryParam=&experienceParam=0&searchKeyParam=&typeParam=0`}
              className="font-weight-bold main-color-bold"
            >
              Xem thêm
            </Link>
          </div>
        </div>
        <div className="row row-gap">
          {listJobs?.data?.map((i, index) => (
            <JobCard job={i} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
