import { useUser } from "../../Context/UseContext";
import { LoadingPage } from "../../UI/LoadingPage";
import { Company } from "../Job/JobUI/Company";
import { useGetFollows } from "./CandidateAPI/useGetFollows";
import EmptyList from "./EmptyList";

export const CompanyFollow = () => {
  const { user, isLoadingUser } = useUser();
  const { follows, isLoading: isLoadingFollow } = useGetFollows(
    user?.data.candidateId
  );
  if (isLoadingUser || isLoadingFollow) return <LoadingPage />;
  return (
    <>
      <div className="bg-white p-3">
        <h5>Công ty đang theo dõi</h5>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded">
        {follows?.data.length > 0 ? (
          <div className="w-100 mt-3">
            {follows.data.map((follow) => (
              <Company follow={follow} key={follow.followId} />
            ))}
          </div>
        ) : (
          <EmptyList title={"Bạn chưa theo dõi công ty nào"} />
        )}
      </div>
    </>
  );
};
