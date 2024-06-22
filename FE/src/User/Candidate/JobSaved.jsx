import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";
import { useGetInterested } from "./CandidateAPI/useGetInterested";
import { JobOfCandidate } from "./JobOfCandidate";
import EmptyList from "./EmptyList";

export const JobSaved = () => {
  const { user, isLoadingUser } = useUser();
  console.log(user);
  const { jobInterested, isLoading } = useGetInterested(user?.data.candidateId);
  console.log(jobInterested);
  let check = jobInterested?.data.length;
  if (isLoading || isLoadingUser) return <LoadingPage />;
  return (
    <>
      <div className="bg-white p-3">
        <h5>Việc làm đã lưu</h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded">
        {check ? (
          <div className="w-100 mt-3">
            {jobInterested?.data.map((j, index) => {
              return (
                <JobOfCandidate
                  idJob={j.jobId}
                  idInterested={j.jobInterestId}
                  key={index}
                />
              );
            })}
          </div>
        ) : (
          <EmptyList title={"Bạn chưa có việc làm đã lưu"} />
        )}
      </div>
    </>
  );
};
