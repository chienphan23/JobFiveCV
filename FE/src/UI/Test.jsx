import { Modal } from "./Modal"

export const Test = ({id,children}) => {
    return (
        <>
        <a
                            href="#!"
                            data-toggle="modal"
                            data-target={`#modal${id}`}
                          >
                            điều khoản
                          </a>
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
                Điều khoản
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              veritatis ut magni id labore, laborum dignissimos natus tempora,
              animi ullam eligendi error est accusantium. Quas cumque beatae
              odio ducimus distinctio!
            </div>
          </div>
        </div>
      </div>
        </>
    )
}