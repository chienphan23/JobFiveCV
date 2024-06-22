import React from "react";

const DeleteUserModal = ({
  showModal,
  numberButton,
  handleDelete,
  toggleModal,
}) => {
  const handleConfirmDelete = () => {
    console.log(numberButton);
    handleDelete(numberButton);
    toggleModal(); // Đóng modal sau khi xóa
  };

  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">
              Xóa tài khoản
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i
                  className="ti-trash"
                  style={{
                    fontSize: "40px",
                    paddingBottom: "10px 0",
                    fontWeight: "bold",
                  }}
                ></i>
                <p>Bạn có chắc chắn xóa tài khoản này không?</p>
              </div>
              <div
                className="clearfix"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  data-dismiss="modal"
                  style={{ padding: "6px 24px", marginRight: "32px" }}
                  className="btn btn-outline-secondary"
                  onClick={toggleModal}
                >
                  Hủy
                </button>
                <button
                  data-dismiss="modal"
                  onClick={handleConfirmDelete}
                  style={{ padding: "6px 24px", marginLeft: "32px" }}
                  className="btn btn-outline-danger"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
