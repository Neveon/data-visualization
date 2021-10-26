// This is where we bring each component together into a single app
"use strict";

import Navbar from "./components/navbar/Navbar";
import Message from "./components/message/Message";
import DataSelection from "./components/visualization/DataSelection";
import GraphDisplay from "./components/visualization/GraphDisplay";
import Table from "./components/visualization/Table";

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
