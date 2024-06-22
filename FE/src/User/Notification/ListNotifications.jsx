import { useGetAllNotificationByUser } from "./NotificationAPI/useGetAllNotificationByUser";
import { NotificationItem } from "./NotificationUI/NotificationItem";
import { LoadingPage } from "../../UI/LoadingPage";
import { useUser } from "../../Context/UseContext";

export const ListNotifications = ({ user, listNotification }) => {
  // console.log(countUnSeenNotification);
  return (
    <>
      <div className="w-100">
        {listNotification?.data?.length > 0 ? (
          listNotification?.data?.map((item, index) => {
            return <NotificationItem key={index} item={item} user={user} />;
          })
        ) : (
          <div className="text-center">
            <img
              src="/emptylist.jpg"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="pb-3" style={{ fontSize: "14px" }}>
              Chưa có thông báo gì
            </div>
          </div>
        )}
      </div>
    </>
  );
};
