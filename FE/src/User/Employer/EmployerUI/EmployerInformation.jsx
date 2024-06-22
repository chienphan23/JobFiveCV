import { Rating } from "../EmployerUI/Rating";
import { useFollowEmployer } from "../EmployerAPI/useFollowEmployer";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useGetFollowCompany } from "../EmployerAPI/useGetFollowCompany";
import { useDeleteFollow } from "../../Candidate/CandidateAPI/useDeleteFollow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useGetListFollowByEmployer } from "../EmployerAPI/useGetListFollowByEmployer";

export const EmployerInformation = ({ employerCurrent, user }) => {
  const { followEmployer, isLoading: isLoadingFollow } = useFollowEmployer(
    employerCurrent?.employerId
  );
  // console.log(employerCurrent?.employerId)
  let isCandidate = user && "candidateId" in user;

  const { followCompany, isLoading: isLoadingCompany } = useGetFollowCompany(
    user?.candidateId,

    employerCurrent?.employerId
  );

  const { deleteFollow, isLoading: isLoadingDelete } = useDeleteFollow(
    employerCurrent?.employerId
  );

  let hadFollowed = followCompany?.data?.length > 0;

  const { getListFollowEmployer, isLoading: isLoadingFollower } =
    useGetListFollowByEmployer(employerCurrent?.employerId);

  function handleClickFollow() {
    if (hadFollowed) {
      deleteFollow(followCompany?.data[0].followId);
    } else {
      const formData = new FormData();

      formData.append("employerId", employerCurrent?.employerId);

      formData.append("candidateId", user?.candidateId);

      followEmployer(formData);
    }
  }

  if (
    isLoadingFollow ||
    isLoadingCompany ||
    isLoadingDelete ||
    isLoadingFollower
  )
    return <LoadingPage />;
  return (
    <>
      <div className="row">
        <div className=" col-lg-12">
          <div
            className="col-lg-12 background-setup"
            style={{
              backgroundImage: `url(http://localhost:8080/api/v1/files/${employerCurrent?.background})`,
              borderRadius: "16px",
              backgroundColor: "rgb(112, 208, 255)",
            }}
          >
            <div className="row">
              <div style={{ height: "244px" }}></div>
            </div>

            <div
              className="row row-gap linear-background align-items-center p-3"
              style={{
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                // boxSizing: "border-box",
              }}
            >
              <div className="col-lg-8">
                <div className="row">
                  <div
                  // style={{
                  //   overflow: "hidden",
                  // }}
                  >
                    <img
                      src={`http://localhost:8080/api/v1/files/${employerCurrent?.photo}`}
                      style={{
                        width: "150px",
                        borderRadius: "50%",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="d-flex flex-column justify-content-between py-4 px-5 text-white"
                    style={{ flex: "1" }}
                  >
                    <h4>{employerCurrent?.employerName}</h4>
                    <div>
                      <span className="mr-3">
                        <i className="mr-2">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                          ></FontAwesomeIcon>
                        </i>
                        {employerCurrent?.provinceName}
                      </span>
                      <span>
                        <i className="mr-2">
                          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        </i>
                        {getListFollowEmployer?.data} Người theo dõi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <Rating
                    reviewScore={employerCurrent?.reviewScore}
                    employerCurrentId={employerCurrent?.employerId}
                    user={user}
                  />
                </div>
                {isCandidate && (
                  <div>
                    <button
                      className="btn main-color-bold w-100 bg-white"
                      onClick={handleClickFollow}
                    >
                      {" "}
                      {hadFollowed ? "Đang theo dõi" : "+ Theo dõi công ty"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
