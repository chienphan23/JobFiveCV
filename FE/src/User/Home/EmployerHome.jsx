import { EmployerCard } from "./HomeUI/EmployerCard";
import { useGetTopEmployers } from "../Employer/EmployerAPI/useGetTopEmployers";
import { Link } from "react-router-dom";

const supColor = "#f6f6f6";
export const EmployerHome = () => {
    const { listTopEmployers, isLoading } = useGetTopEmployers();

    if (isLoading) return <div>Loading</div>;

    return (
        <>
          <section
            className="section-main"
            style={{ backgroundColor: { supColor } }}
          >
            <div className="container">
              <div className="row row-gap">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between mb-3 align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src="/logo.png"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <span
                        className="font-weight-bold ml-2"
                        style={{ fontSize: "24px" }}
                      >
                        Nhà tuyển dụng nổi bật
                      </span>
                    </div>
                    <div>
                      <Link
                        to={`/list-employer?employerName=`}
                        className="font-weight-bold main-color-bold"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row mt-5 row-gap">
                {listTopEmployers?.data?.map((employer) => {
                  return (
                    <EmployerCard key={employer.employerId} employer={employer} />
                  );
                })}
              </div>
            </div>
          </section>
        </>
      );
};
