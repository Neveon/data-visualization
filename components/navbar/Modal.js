// For general Modal layout
"use strict";

const Modal = (props) => {
    return (
        <div>
            {/* <!-- Modal --> */}
            <div
                className="modal fade"
                id={props.target}
                tabIndex="-1"
                role="dialog"
                aria-labelledby={props.label}
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.label}>
                                {props.title}
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
                        <div className="modal-body">{props.func()}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
