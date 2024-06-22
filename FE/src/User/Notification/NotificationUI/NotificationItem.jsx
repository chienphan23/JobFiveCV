import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";
import { useDeleteNotification } from "../NotificationAPI/useDeleteNotification";
export const NotificationItem = ({ item, user }) => {
  const { deleteNotification } = useDeleteNotification();

  const handleRemoveButton = (notificationId) => {
    console.log(notificationId);
    deleteNotification({ id: notificationId });
  };

  return (
    <>
      <div
        className="card flex-row align-items-center px-3 py-2 border-bottom notification cursor-pointer w-100"
        style={{ borderRadius: "0" }}
      >
        {/* <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> */}
        {"employerId" in user.data ? (
          <Link to={item?.message == "Tài khoản của bạn đã được duyệt." ? "#" : "/manage-job"} className="card-body pt-0 pb-0">
            <div
              className="card-title text-dark font-weight-bold m-0 line-clamp"
              style={{ fontSize: "13px" }}
            >
              {item?.message}
            </div>
            <p className="card-text" style={{ fontSize: "12px" }}>
              {format(parseISO(item.postDate), "dd/MM/yyyy")}
            </p>
          </Link>
        ) : (
          <Link to={"/job-applied"} className="card-body pt-0 pb-0">
            <div
              className="card-title text-dark font-weight-bold m-0 line-clamp"
              style={{ fontSize: "13px" }}
            >
              {item?.message}
            </div>
            <p className="card-text" style={{ fontSize: "12px" }}>
              {format(parseISO(item.postDate), "dd/MM/yyyy")}
            </p>
          </Link>
        )}
        <button
          className="btn"
          onClick={() => handleRemoveButton(item.notificationId)}
        >
          <i>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </i>
        </button>
      </div>
    </>
  );
};
