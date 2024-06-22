import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";
import { useGetApplication } from "./CandidateAPI/useGetApplication";
import { JobAppliedItem } from "./JobAppliedItem";
import EmptyList from "./EmptyList";

export const JobApplied = () => {
  const { user, isLoadingUser } = useUser();
  const { application, isLoading } = useGetApplication(user?.data.candidateId);
  let check = application?.data.length;
  if (isLoading || isLoadingUser) return <LoadingPage />;

  return (
    <>
      <div className="bg-white p-3">
        <h5>Việc làm đã ứng tuyển</h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded">
        {check ? (
          <div className="w-100 mt-3">
            {application?.data.map((i) => {
              return <JobAppliedItem idJob={i.jobId} key={i.applicationId} />;
            })}
          </div>
        ) : (
          <EmptyList title={"Bạn chưa ứng tuyển việc làm"} />
        )}
      </div>
    </>
  );
};
