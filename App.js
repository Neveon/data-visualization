// This is where we bring each component together into a single app
"use strict";

import Navbar from "./components/navbar/Navbar";
import Message from "./components/message/Message";
import DataSelection from "./components/visualization/DataSelection";
import GraphDisplay from "./components/visualization/GraphDisplay";
import Table from "./components/visualization/Table";

import "./App.css";

// createContext to provide csv data for various components
export const DataContext = React.createContext();

export default () => {
    // Single source where context is defined which starts out as an empty JSON string
    const [json, setJson] = React.useState(JSON.stringify({}));
    // const value = { json, setJson };

    // For User Info under settings
    // (uid, login, name, gender).
    const [login, setLogin] = React.useState({
        uid: null,
        login: null,
        name: null,
        gender: null,
    });

    // For managing View button (Line, Pie, Bar, Map?)
    const [view, setView] = React.useState("");
    const value = { json, setJson, login, setLogin, view, setView };

    // Encapsulate the components with the DataContext to pass the context
    return (
        <DataContext.Provider value={value}>
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
        </DataContext.Provider>
    );
};
