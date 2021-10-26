// This is where we bring each component together into a single app
"use strict";

import Navbar from "./src/components/navbar/Navbar";
import Message from "./src/components/message/Message";
import DataSelection from "./src/components/visualization/DataSelection";
import GraphDisplay from "./src/components/visualization/GraphDisplay";
import Table from "./src/components/visualization/Table";

import "./App.css";

export default () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                <Message />
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-4">
                    <DataSelection />
                </div>

                <div className="col-xs-8">
                    <GraphDisplay />
                </div>
            </div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-xs-12">
                    <Table />
                </div>
            </div>
        </div>
    );
};
