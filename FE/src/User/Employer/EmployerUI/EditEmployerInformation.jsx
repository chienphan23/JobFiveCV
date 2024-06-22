import { faCamera, faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const EditEmployerInformation = ({
  employerCurrent,
  filePhoto,
  setFilePhoto,
  fileBackground,
  setFileBackground,
}) => {
  const [backgroundURL, setBackgroundURL] = useState(null);
  useEffect(() => {
    if (fileBackground) {
      setBackgroundURL(
        typeof fileBackground === "object"
          ? URL.createObjectURL(fileBackground)
          : "http://localhost:8080/api/v1/files/" + employerCurrent?.background
      );
    }
  }, [fileBackground]);

  return (
    <>
      <div className="row">
        <div className=" col-lg-12">
          <div
            className="col-lg-12 background-setup"
            style={{
              backgroundImage: `url(${backgroundURL})`,
              borderRadius: "16px",
              backgroundColor: "rgb(112, 208, 255)",
            }}
          >
            <div className="row">
              <div style={{ height: "244px", position: "relative" }}>
                <label
                  htmlFor="fileBackground"
                  className="btn btn-secondary ml-2"
                  style={{
                    borderRadius: "8px",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <i>
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                  </i>
                  <span className="font-14 font-weight-bold ml-2">
                    Đổi ảnh bìa
                  </span>
                </label>

                <input
                  id="fileBackground"
                  type="file"
                  onChange={(e) => setFileBackground(...e.target.files)}
                  accept="image/*"
                  encType="multipart/form-data"
                  className="d-none"
                />
              </div>
            </div>

            <div
              className="row row-gap linear-background p-3 align-items-center text-white text-center"
              style={{
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                // boxSizing: "border-box",
              }}
            >
              <div className="col-lg-3 position-relative">
                <div>
                  {typeof filePhoto === "object" ? (
                    <img
                      src={URL?.createObjectURL(filePhoto)}
                      style={{
                        width: "150px",
                        borderRadius: "50%",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={`http://localhost:8080/api/v1/files/${employerCurrent?.photo}`}
                      style={{
                        width: "150px",
                        borderRadius: "50%",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <label
                  htmlFor="filePhoto"
                  className="btn main-color-bold col-lg-3 m-0"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i>
                    <FontAwesomeIcon icon={faCameraRotate} />
                  </i>
                </label>

                <input
                  id="filePhoto"
                  type="file"
                  onChange={(e) => setFilePhoto(...e.target.files)}
                  accept="image/*"
                  encType="multipart/form-data"
                  className="d-none"
                />
              </div>
              <div className="col-lg-9">
                <h4>{employerCurrent?.employerName}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
