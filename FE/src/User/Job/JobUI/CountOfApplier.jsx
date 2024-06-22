import { Link } from "react-router-dom";
import { LoadingPage } from "../../../UI/LoadingPage";
import { useGetApplicationByJob } from "../../Application/ApplicationAPI/useGetApplicationByJob";

export const CountOfApplier = ({ jobId }) => {
    const { applications, isLoading } = useGetApplicationByJob(jobId);
    if (isLoading) <LoadingPage />;

    const count = applications?.data.length;
    return (
        <>
            <Link
                to={`/list-applier/${jobId}`}
                style={
                    count <= 0 ? { pointerEvents: "none", color: "#ccc" } : {}
                }
            >
                {applications?.data.length} CV ứng tuyển
            </Link>
        </>
    );
};
