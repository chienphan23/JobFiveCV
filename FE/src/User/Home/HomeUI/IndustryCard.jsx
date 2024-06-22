import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useGetQuantityJobOfIndustry } from "../HomeAPI/useGetQuantityJobOfIndustry";
import { Link } from "react-router-dom";

export const IndustryCard = ({ industry, imageRandom }) => {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-3 d-flex">
        <div
          className="industry-card p-3 bg-white flex-grow-1 d-flex align-items-stretch border border-light"
          style={{ borderRadius: "12px" }}
        >
          <Link
            to={`/search-page?provinceParam=''&minSalaryParam=0&maxSalaryParam=0&industryParam=${industry.industryid}&experienceParam=0&searchKeyParam=&typeParam=0`}
            className="d-flex flex-column justify-content-between w-100 text-center"
          >
            <div>
              <img
                src={`/cat-img-${imageRandom}.png`}
                alt="Industry"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
              <div className="text-dark font-weight-bold mt-2">
                {industry.industryname}
              </div>
            </div>
            <div className="mt-2">
              <span className="font-weight-bold">{industry.quantity}</span>{" "}
              <span className="text-muted">việc</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
