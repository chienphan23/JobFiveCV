import { useGetInfor } from "../useGetInfor";

function InforModal({ userId, userRole, isClick }) {
  const { infor } = useGetInfor(userId, userRole);
  console.log(isClick);
  console.log(infor);
  return (
    <>
      <div
        className="modal fade"
        id="EmployerinfoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">
                Chi tiết thông tin nhà tuyển dụng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="clearfix">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Tên nhà tuyển dụng: </label>
                      </div>
                      <div className="col-md-6">
                        <span>CTY Nguyễn Nhật Sơn</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email: </label>
                      </div>
                      <div className="col-md-6">
                        <span>Son@gmail.com</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Địa chỉ: </label>
                      </div>
                      <div className="col-md-6">
                        <span>123123</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Tỉnh: </label>
                      </div>
                      <div className="col-md-6">
                        <span>Huế</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone: </label>
                      </div>
                      <div className="col-md-6">
                        <span>000123123123</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Ảnh Đại diện </label>
                      </div>
                      <div className="col-md-6">
                        <span>12312313</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hạng: </label>
                      </div>
                      <div className="col-md-6">
                        <span>GOLD</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Đánh giá: </label>
                      </div>
                      <div className="col-md-6">
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InforModal;
