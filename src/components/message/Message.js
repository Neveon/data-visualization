"use strict";

import "./Message.css";

const Message = () => {
    return (
        <div class="container-fluid">
            <div className="row">
                <p className="message">
                    <span id="messageTitle">Message: </span>
                    Any message would be outputted here.
                </p>
            </div>
            <hr />
        </div>
    );
};

export default Message;
