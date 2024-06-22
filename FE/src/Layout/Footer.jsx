import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);
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
  return (
    <>
      <footer className="font-weight-bold">
        <div className={`linear-background ${width < 992 && "text-center"} `}>
          <div className="container text-white py-5">
            <div className="row row-gap">
              <div className="col-lg-4 ">
                <h5 className="font-weight-bold">Job5 team</h5>
                <h6 className="mt-3">Thông tin liên hệ:</h6>
                <div className="mt-2">
                  <i className="mr-2">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </i>
                  Tel: 0123456789
                </div>
                <div>
                  <i className="mr-2">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </i>
                  Email: Support@job5.com
                </div>
              </div>
              <div className="col-lg-4 ">
                <div>
                  <Link to={""} className="text-white">
                    Giới thiệu chung
                  </Link>
                </div>
                <div className="mt-3">
                  <Link to={""} className="text-white">
                    Liên hệ
                  </Link>
                </div>
                <div className="mt-3">
                  <Link to={""} className="text-white">
                    Điều khoản sử dụng
                  </Link>
                </div>
                <div className="mt-3">
                  <Link to={""} className="text-white">
                    Quy định bảo mật
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="font-weight-bold" style={{ fontSize: "16px" }}>
                  Kết nối với chúng tôi
                </div>
                <div
                  className={`d-flex mt-3 ${
                    width < 992 && "justify-content-center"
                  }`}
                  style={{ gap: "10px" }}
                >
                  <div>
                    <Link to={""}>
                      <i className="social-icon">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                      </i>
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <i className="social-icon">
                        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                      </i>
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <i className="social-icon">
                        <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                      </i>
                    </Link>
                  </div>
                </div>
                <div className="mt-3">
                  <img src="/ic-bo-cong-thuong.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <Link to={"#"} className="text-white">
              Copyright © 2024 Job5 Team. All rights reserved.
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
