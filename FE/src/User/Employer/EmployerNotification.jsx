import { Link } from "react-router-dom";
import { ListNotifications } from "../Notification/ListNotifications";
import { useUser } from "../../Context/UseContext";
import { useDeleteAllNotification } from "../Notification/NotificationAPI/useDeleteAllNotification";
import { LoadingPage } from "../../UI/LoadingPage";
import { useGetAllNotificationByUser } from "../Notification/NotificationAPI/useGetAllNotificationByUser";
export const EmployerNotification = () => {
  const { user, isLoading: isLoadingUser } = useUser();
  const { listNotification, isLoading } = useGetAllNotificationByUser(
    "employerId" in user.data ? user?.data?.employerId : user?.data?.candidateId
  );
  const { deleteAllNotification } = useDeleteAllNotification();
  if (isLoading || isLoadingUser) return <LoadingPage />;

  const handleRemoveAll = (user) => {
    if ("employerId" in user) deleteAllNotification({ id: user.employerId });
    else deleteAllNotification({ id: user.candidateId });
  };
  return (
    <>
      <div
        className=" bg-white p-3 rounded pb-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="border-bottom pb-2 d-flex align-items-center justify-content-between">
          <h5>Thông báo việc làm</h5>
          <button
            className="btn btn-delete"
            style={{ fontSize: "14px" }}
            onClick={() => handleRemoveAll(user?.data)}
          >
            Xóa tất cả
          </button>
        </div>
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
