"use strict";
// For Modal popup
import Modal from "./Modal";

// Functions
import helpClient from "./functions/HelpClient";

// For sending JSON to other components
import { DataContext } from "../../App";
import Login from "./functions/Login";

const Navbar = () => {
    // To update context with the csv file uploaded
    const { setJson } = React.useContext(DataContext);

    // Converting CSV to JSON format
    const strToJson = (csv) => {
        let lines = csv.split("\n");

        let res = [];

        // split on commas
        let headers = lines[0].split(",");
        for (let i = 0; i < headers[i].length; i++) {
            // replace carriage returns
            headers[i] = headers[i].replace("\r", "");
        }

        for (let i = 1; i < lines.length; i++) {
            lines[i] = lines[i].replace("\r", "");
            let obj = {}; // what will be our json obj
            let values = lines[i].split(",");

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = values[j];
            }
            res.push(obj); // appending values
        }
        // Converts array of objects to JSON string
        return JSON.stringify(res);
    };

    const numOfRecords = (csv) => {
        // Number of rows minus the header row
        let records = csv.split("\n").length - 1;
        return records;
    };

    // For onChange of the input tag
    const uploadCSV = () => {
        let message = document.getElementById("message");
        const input = document.getElementById("myInput");
        if (input.files[0] === undefined) {
            message.innerText =
                "The file undefined. Please choose a valid file.";
            return;
        }
        let filename = input.files[0].name;
        if (filename.split(".")[filename.split(".").length - 1] != "csv") {
            message.innerText = "The selected file is not formatted to '.csv'";
            return;
        } else {
            //else is csv
            let csv = input.files[0];
            const reader = new FileReader();
            reader.onload = function () {
                const lines = reader.result;
                message.innerHTML =
                    "<br>Your file <b>" +
                    filename +
                    "</b><br> Contains " +
                    numOfRecords(lines) +
                    " number of records.";
                // console.log("stringToJSON: \n" + strToJson(lines));
                setJson(strToJson(lines));
            };
            reader.readAsText(csv);
        }
    };

    // After the Navbar component renders, we can add effects to occur
    React.useEffect(() => {
        const uploadButton = document.getElementById("uploadButton");
        const myInput = document.getElementById("myInput");

        uploadButton.addEventListener("click", () => {
            myInput.click();
        });
    }, []);

    return (
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    {/* File Drop down */}
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            File <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#" id="uploadButton">
                                    Load CSV File
                                </a>
                                {/* To handle file */}
                                <input
                                    id="myInput"
                                    onChange={uploadCSV}
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a
                                    href="#login"
                                    data-toggle="modal"
                                    data-target="#login"
                                >
                                    Login to DB
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#logoutdb"
                                    data-toggle="modal"
                                    data-target="#logoutdb"
                                >
                                    Logout DB
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a>Exit</a>
                            </li>
                        </ul>
                    </li>
                    {/* View Dropdown */}
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            View <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">Line</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#">Pie</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#">Bar</a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a href="#">Map</a>
                            </li>
                        </ul>
                    </li>
                    {/* Settings Dropdown */}
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Settings <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    href="#userinfo"
                                    data-toggle="modal"
                                    data-target="#userinfo"
                                >
                                    User Info
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* Help Dropdown */}
                    <li className="dropdown">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Help <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    href="#info"
                                    data-toggle="modal"
                                    data-target="#info"
                                >
                                    Info
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a
                                    href="#client"
                                    data-toggle="modal"
                                    data-target="#client"
                                >
                                    Client
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <Login />
                <Modal
                    target="client"
                    title="Client"
                    label="client-label"
                    func={helpClient}
                />
                <Modal
                    target="info"
                    title="Info"
                    label="info-label"
                    text={
                        <p>
                            <b>Name</b>: Neil Tellez
                            <br />
                            <b>Course</b>: 4745 - Data Visualization
                            <br />
                            <b>Project Due Date</b>: 11/01/2021
                        </p>
                    }
                />
            </div>
        </div>
    );
};

export default Navbar;
