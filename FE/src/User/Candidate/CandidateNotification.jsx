import { Link } from "react-router-dom";
import { ListNotifications } from "../Notification/ListNotifications";
import { useUser } from "../../Context/UseContext";
import { useDeleteAllNotification } from "../Notification/NotificationAPI/useDeleteAllNotification";
import { LoadingPage } from "../../UI/LoadingPage";
import { useGetAllNotificationByUser } from "../Notification/NotificationAPI/useGetAllNotificationByUser";
export const CandidateNotification = () => {
  const { user, isLoading: isLoadingUser } = useUser();
  const { listNotification, isLoading } = useGetAllNotificationByUser(
    "candidateId" in user.data
      ? user?.data?.candidateId
      : user?.data?.employerId
  );
  const { deleteAllNotification } = useDeleteAllNotification();
  if (isLoading || isLoadingUser) return <LoadingPage />;
  const handleRemoveAll = (user) => {
    if ("candidateId" in user) deleteAllNotification({ id: user.candidateId });
    else deleteAllNotification({ id: user.employerId });
  };
  return (
    <>
      <div className="bg-white p-3 d-flex align-items-center justify-content-between">
        <h5>Thông báo việc làm</h5>
        <button
          className="btn btn-delete p-0"
          style={{ fontSize: "14px" }}
          onClick={() => handleRemoveAll(user?.data)}
        >
          Xóa tất cả
        </button>
      </div>
      <div className="border border-light mt-3 bg-white p-3 rounded">
        <div className="mt-3 mb-3">
          <div className="p-2 w-100 d-flex align-items-center justify-content-between rounded">
            <ListNotifications
              user={user}
              listNotification={listNotification}
            />
          </div>
        </div>
      </div>
    </>
  );
};
