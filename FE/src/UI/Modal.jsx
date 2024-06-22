export const Modal = ({ id, title, children, buttonText, displayButton }) => {
  return (
      <>
          <button
              className={displayButton ? "d-block" : "d-none"}
              data-toggle="modal"
              data-target={`#modal${id}`}
          >
              {buttonText}
          </button>
          <div
              className="modal fade"
              id={`modal${id}`}
              tabIndex="-1"
              role="dialog"
              aria-labelledby="registerModalLabel"
              aria-hidden="true"
          >
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="registerModalLabel">
                              {title}
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
                      <div className="modal-body">{children}</div>
                  </div>
              </div>
          </div>
      </>
  );
};
