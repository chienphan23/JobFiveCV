import { useEffect, useState } from "react";
import "./Rating.css";
import { useCreateReviewScoreEmployer } from "../EmployerAPI/useCreateReviewScoreEmployer";
import { useUser } from "../../../Context/UseContext";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../Utils/formatDateTime";
import { useGetReviewScoreByCandidate } from "../EmployerAPI/useGetReviewScoreByCandidate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Rating = ({ reviewScore, user, employerCurrentId }) => {
  const [rateStar, setRateStar] = useState(0);
  const { user: candidate, isLoading } = useUser();
  const [isClickRating, setIsClickRating] = useState(false);

  const { id } = useParams();

  const { reviewScoreByCandidate, isLoadingGetScore } =
    useGetReviewScoreByCandidate(
      candidate?.data?.candidateId,
      employerCurrentId
    );
  const { createReviewScoreEmployer } = useCreateReviewScoreEmployer();

  if (isLoading || isLoadingGetScore) return <LoadingPage />;

  const handleChangeRateStar = (e) => {
    setRateStar(e.target.value);
  };

  const handleSubmitForm = async (e, rateStar) => {
    e.preventDefault();
    //Call api to review employer
    const formData = new FormData();
    formData.append("candidateId", candidate?.data?.candidateId);
    formData.append("employerId", id);
    formData.append("reviewDate", formatDate(new Date()));
    formData.append("score", rateStar);

    await createReviewScoreEmployer(formData);
    setIsClickRating(false);
  };

  return (
    //Chưa có trong bảng employer review theo candidateId thì hiện nút ĐÁNH GIÁ
    //Có rồi thì hiện điểm với *
    //"candidateId" in user
    <>
      {typeof reviewScoreByCandidate?.data === "undefined" ? (
        <>
          {!isClickRating ? (
            <>
              {reviewScore == 0 ? (
                <p className="font-weight-bold text-light ">
                  Chưa có đánh giá nào{" "}
                  <i>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    ></FontAwesomeIcon>
                  </i>
                </p>
              ) : (
                <p className="font-weight-bold">
                  {reviewScore}
                  <i>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    ></FontAwesomeIcon>
                  </i>
                </p>
              )}
              {user && "candidateId" in user && (
                <button
                  className="btn main-color-bold bg-white ml-3"
                  onClick={() => setIsClickRating(!isClickRating)}
                >
                  Đánh giá
                </button>
              )}
            </>
          ) : (
            <div className="stars d-inline-block border rounded bg-white w-100 h-100">
              <form action="" onSubmit={(e) => handleSubmitForm(e, rateStar)}>
                <div className="row align-items-center justify-content-center mt-1">
                  <div className="col-lg-8">
                    {[...Array(5)].map((_, index) => (
                      <>
                        <input
                          className={`star star-${5 - index} d-none`}
                          id={`star-${5 - index}`}
                          type="radio"
                          name="star"
                          value={5 - index}
                          onChange={handleChangeRateStar}
                        />
                        <label
                          className={`star star-${5 - index}`}
                          htmlFor={`star-${5 - index}`}
                        ></label>
                      </>
                    ))}
                  </div>
                  <div className="col-lg-4">
                    <button
                      className="btn btn-outline-info border ml-3"
                      style={{ fontSize: "12px" }}
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </>
      ) : (
        <p className="font-weight-bold">
          {reviewScore}
          <i>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "yellow" }}
            ></FontAwesomeIcon>
          </i>
        </p>
      )}
    </>
  );
};
