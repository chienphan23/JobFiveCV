import {
  faChartLine,
  faCheck,
  faServer,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSystem, setOpenSystem] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const handleMenu = () => {
    console.log("alo")
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className="header-area header-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9  d-none d-lg-block">
              <div className="horizontal-menu">
                <nav>
                  <ul id="nav_menu">
                    <li>
                      <a>
                        <FontAwesomeIcon icon={faServer} />
                        <span> Quản lý hệ thống</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link to="/admin">Quản lý người dùng</Link>
                        </li>
                        <li>
                          <Link to="/admin/industry">Quản lý ngành nghề</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        <FontAwesomeIcon icon={faCheck} />
                        <span> Quản lý kiểm duyệt</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link to="/admin/approveEmployer">
                            Danh sách tuyển dụng chờ
                          </Link>
                        </li>
                        <li>
                          <Link to="/admin/reportJob">
                            Danh sách báo cáo tuyển dụng
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/admin/chart">
                        <FontAwesomeIcon icon={faChartLine} />
                        <span>Thống kê</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12 d-block d-lg-none">
              <div id="mobile_menu">
                <div className="slicknav_menu">
                  <a
                    aria-haspopup="true"
                    role="button"
                    className="slicknav_btn slicknav_collapsed"
                  >
                    <span className={`slicknav_menutxt ${openMenu && "slicknav_open"}`} >MENU</span>
                    <span className="slicknav_icon" onClick={handleMenu}>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul
                    className="slicknav_nav slicknav_hidden"
                    aria-hidden="true"
                    role="menu"
                    style={{display: openMenu ? "block" : "none"}}
                  >
                    <li className="slicknav_parent slicknav_collapsed">
                      <a
                        role="menuitem"
                        aria-haspopup="true"
                        className="slicknav_item slicknav_row"
                      >
                        <a>
                        <FontAwesomeIcon icon={faServer} />
                        <span> Quản lý hệ thống</span>
                      </a>
                        <span className="slicknav_arrow">►</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link to="/admin" onClick={() => setOpenMenu(!open)}>Quản lý người dùng</Link>
                        </li>
                        <li>
                          <Link to="/admin/industry"  onClick={() => setOpenMenu(!open)}>Quản lý ngành nghề</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <a
                        role="menuitem"
                        aria-haspopup="true"
                        className="slicknav_item slicknav_row"
                      >
                        <a>
                        <FontAwesomeIcon icon={faCheck} />
                        <span> Quản lý kiểm duyệt</span>
                      </a>
                        <span className="slicknav_arrow">►</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link to="/admin/approveEmployer"  onClick={() => setOpenMenu(!open)}>
                            Danh sách tuyển dụng chờ
                          </Link>
                        </li>
                        <li>
                          <Link to="/admin/reportJob"  onClick={() => setOpenMenu(!open)}>
                            Danh sách báo cáo tuyển dụng
                          </Link>
                        </li>
                     
                      </ul>
                    </li>
                    <li>
                      <Link to="/admin/chart">
                        <FontAwesomeIcon icon={faChartLine} />
                        <span>Thống kê</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
