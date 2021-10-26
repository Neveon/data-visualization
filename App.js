// This is where we bring each component together into a single app
"use strict";

import Navbar from "./src/components/navbar/Navbar";
import Message from "./src/components/message/Message";

export default () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Message />
        </div>
    );
};
