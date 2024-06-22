import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../../Context/UseContext";
import { useDeleteAllNotification } from "./NotificationAPI/useDeleteAllNotification";
import { useUpdateAllNotificationByUser } from "./NotificationAPI/useUpdateAllNotificationByUser";
import { LoadingPage } from "../../UI/LoadingPage";
import { Link } from "react-router-dom";
import { ListNotifications } from "./ListNotifications";
import { useGetAllNotificationByUser } from "./NotificationAPI/useGetAllNotificationByUser";

export function ModalNotification() {
  const [width, setWidth] = useState(window.innerWidth);
  const { user, isLoadingUser } = useUser();
  const { listNotification, isLoading } = useGetAllNotificationByUser(
    "message" in user
      ? null
      : "employerId" in user.data
      ? user?.data?.employerId
      : user?.data?.candidateId
  );
  const countUnSeenNotification =
    listNotification &&
    listNotification?.data?.filter((item) => item.seen == 0).length;
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOutside = (e) => {
    setIsVisible(false);
  };

  const { deleteAllNotification } = useDeleteAllNotification();
  const { updateAllNotificationByUser } = useUpdateAllNotificationByUser();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (user && user.status === 706) return null;
  if (isLoading || isLoadingUser) return <LoadingPage />;
  if (user && user.data.role === "admin") {
    return null;
  }
  const handleRemoveAll = (user) => {
    if ("employerId" in user) deleteAllNotification({ id: user.employerId });
    else deleteAllNotification({ id: user.candidateId });
  };

  const handleClickNotification = (user) => {
    setIsVisible(!isVisible);
    if ("employerId" in user) {
      updateAllNotificationByUser({ id: user.employerId });
    } else updateAllNotificationByUser({ id: user.candidateId });
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {width < 992 ? (
          <Link
            to={`/${
              "candidateId" in user.data ? "candidate" : "employer"
            }-notification`}
            id="toggleButton"
            className=" btn btn-bell"
            style={{ position: "relative" }}
          >
            <i style={{ padding: "0 10px", flex: "1" }}>
              <FontAwesomeIcon
                icon={faBell}
                className="me-2 main-color-bold"
                style={{ fontSize: "24px" }}
              />
            </i>
            {countUnSeenNotification != 0 && (
              <span
                className="badge rounded-circle bg-danger"
                style={{ position: "absolute", top: "0", left: "50%" }}
              >
                {countUnSeenNotification}
              </span>
            )}
          </Link>
        ) : (
          <button
            id="toggleButton"
            onClick={() => handleClickNotification(user?.data)}
            className=" btn btn-bell"
            style={{ position: "relative" }}
          >
            <i style={{ padding: "0 10px", flex: "1" }}>
              <FontAwesomeIcon
                icon={faBell}
                className="me-2 main-color-bold"
                style={{ fontSize: "24px" }}
              />
            </i>
            {countUnSeenNotification != 0 && (
              <span
                className="badge rounded-circle bg-danger"
                style={{ position: "absolute", top: "0", left: "50%" }}
              >
                {countUnSeenNotification}
              </span>
            )}
          </button>
        )}
        {isVisible && (
          <div>
            <div
              className="overlay"
              onClick={(e) => handleClickOutside(e)}
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                zIndex: "999",
              }}
            ></div>
            <div
              className="shadow bg-white rounded"
              id="content"
              // ref={contentRef}
              style={{
                width: "350px",
                position: "absolute",
                top: "100%",
                right: "0",
                zIndex: "1000",
              }}
            >
              <div
                className="p-2 font-weight-bold "
                style={{
                  fontSize: "16px",
                  borderBottom: "1px solid #dee2e6",
                  borderTop: "0",
                  borderLeft: "0",
                  borderRight: "0",
                }}
              >
                Thông báo
              </div>
              <div
                style={{
                  maxHeight: "calc(93.67px * 3)",
                  overflow: "auto",
                  width: "100%",
                }}
              >
                <ListNotifications
                  user={user}
                  listNotification={listNotification}
                />
              </div>
              <div className="row row-gap px-3 py-2 text-center mt-2">
                <div
                  className="col-lg-6 border-right font-weight-bold"
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={() => handleRemoveAll(user?.data)}
                >
                  XÓA TẤT CẢ
                </div>
                <div
                  className="col-lg-6 font-weight-bold"
                  style={{ fontSize: "12px" }}
                >
                  <Link to={"/employer-notification"} className="text-dark">
                    XEM TẤT CẢ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
