import { Link } from "react-router-dom";
import { SingleCV } from "./SingleCV";
import { useUser } from "../../Context/UseContext";
import { useGetCV } from "./CandidateAPI/useGetCV";
import { LoadingPage } from "../../UI/LoadingPage";
export const ManageCv = () => {
  const { user, isLoadingUser } = useUser();
  const { cvs, isLoading } = useGetCV(user?.data.candidateId);
  let check = cvs?.data.length < 2;
  if (isLoading || isLoadingUser) return <LoadingPage />;
  return (
    <>
      <div className="bg-white p-3">
        <h5>Hồ sơ của bạn</h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
        <div>
          {check ? (
            <div className="d-block bg-white mb-3 p-3 border border-primary">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="ml-2 mr-2 d-flex align-items-center justify-content-between">
                    <img src="../img-hsdk.png" />
                  </div>
                  <div className="ml-3">
                    <h3
                      className="text-body mt-2 font-weight-bold mb-1"
                      style={{ fontSize: "18px" }}
                    >
                      Hồ sơ đính kèm
                    </h3>
                    <span
                      className="text-secondary font-weight-normal"
                      style={{ fontSize: "14px" }}
                    >
                      Ứng tuyển nhanh chóng hơn với hồ sơ sẵn có
                    </span>
                  </div>
                </div>
                <div
                  className="p-2 mt-2 d-flex bg-light align-items-center justify-content-center rounded"
                  style={{ maxHeight: "40px" }}
                >
                  <Link
                    to="/update-cv"
                    className="d-flex align-items-center justify-content-between text-info"
                  >
                    <i className="fa fa-paperclip"></i>
                    <span
                      className="ml-1 text-info"
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      Tạo hồ sơ
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {cvs?.data.map((cv, index) => (
            <SingleCV cv={cv} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
