import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalApply } from "../ModalApply";
import { useEffect, useState } from "react";
import { useGetCvApplication } from "../../Candidate/CandidateAPI/useGetCvApplication";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useSavedJob } from "../JobAPI/useSavedJob";
import { useGetListSavedByCandidate } from "../JobAPI/useGetListSavedByCandidate";
import { useDeleteJobInterested } from "../../Candidate/CandidateAPI/useDeleteJobInterested";
import { formatDate } from "../../../Utils/formatDateTime";
import { useQueryClient } from "@tanstack/react-query";

export const LineButtonSubmit = ({ col1, col2, user, job }) => {
  const { applicationCv, isLoading: isLoadingApply } = useGetCvApplication(
    user?.data.candidateId,
    job?.data.jobId
  );

  const queryClient = useQueryClient();
  const [hadApplied, setHadApplied] = useState(false);
  const [hadSaved, setHadSaved] = useState(false);
  const [hadExpired, setHadExpired] = useState(false);
  const { listSaved, isLoading: isLoadingListSaved } =
    useGetListSavedByCandidate(user?.data.candidateId, job?.data.jobId);
  const { savedJob, isLoading: isLoadingSave } = useSavedJob(job?.data.jobId);
  const { deleteJobInterested, isLoading: isLoadingDeleteJobInterested } =
    useDeleteJobInterested(job?.data.jobId);
    useEffect(() => {
        setHadApplied(applicationCv?.message !== "Not found");
        setHadSaved(listSaved?.data.length > 0);
        setHadExpired(
          Math.ceil(
            (new Date(job?.data.expirationDate) - new Date()) / (1000 * 3600 * 24)
          ) <= 0
        );

        
      }, [applicationCv, listSaved, job]);
  if (
    isLoadingApply ||
    isLoadingSave ||
    isLoadingListSaved ||
    isLoadingDeleteJobInterested
  )
    return <LoadingPage />;

  
  // let hadApplied = applicationCv?.message !== "Not found";
  // let hadSaved = listSaved?.data.length > 0;
  // let hadExpired = Math.ceil((new Date(job?.data.expirationDate) - new Date())/ (1000 * 3600 * 24)) < 0
  function handleClickSave() {
    if (hadSaved) {
      deleteJobInterested(listSaved?.data[0].jobInterestId);
    } else {
      const formData = new FormData();

      formData.append("jobId", job?.data.jobId);
      formData.append("candidateId", user?.data.candidateId);

      savedJob(formData);
    }
  }

  return (
    <>
      <div className="row mt-auto">
        <div className={`col-lg-${col1 ? col1 : "8"}`}>
          <button
            className="btn btn-info"
            style={{
              width: "100%",
              fontWeight: "650",
              cursor: hadApplied ? "default" : "pointer",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            disabled={hadApplied || hadExpired}
          >
            <i style={{ padding: "0 5px 0 0", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
            </i>
            {hadExpired
              ? "Hết hạn tuyển dụng"
              : hadApplied
              ? "Đã ứng tuyển"
              : "Ứng tuyển ngay"}
          </button>
        </div>
        <div className={`col-lg-${col2 ? col2 : "4"}`}>
          <button
            className="btn btn-outline-info"
            style={{ width: "100%", fontWeight: "650", lineHeight: "27px" }}
            onClick={handleClickSave}
          >
            {hadSaved ? "Hủy lưu tin" : "Lưu tin"}
          </button>
        </div>
      </div>
      <ModalApply user={user} job={job} />
    </>
  );
};
