"use strict";

import "./Message.css";

const Message = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <p id="messageBox">
                    <span id="messageTitle">Message: </span>
                    <span id="message">
                        Any message would be outputted here.
                    </span>
                </p>
            </div>
            <hr />
        </div>
    );
};

export default Message;
