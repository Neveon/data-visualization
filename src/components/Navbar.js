"use strict";

import "./Navbar.css"

const Navbar = () => {
    return (
        <div class="menu">
            <ul>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        File
                    </a>
                    <div class="dropdown-content">
                        <label for="files" class="dropbtn">
                            Load .CSV File
                        </label>
                        <input
                            type="file"
                            id="files"
                            style={{ display: "none", backgroundColor: "gray" }}
                            // onchange="parseFile()"
                        ></input>
                        <a
                            href="javascript:void(0)"
                            // onclick="loginDB()"
                            class="dropbtn"
                        >
                            Login to DB
                        </a>
                        <a
                            href="javascript:void(0)"
                            // onclick="logoutDB()"
                            class="dropbtn"
                        >
                            Log out of DB
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        View
                    </a>
                    <div class="dropdown-content">
                        <a
                            href="javascript:void(0)"
                            // onclick="changeView('Line')"
                            class="dropbtn"
                        >
                            Line
                        </a>
                        <a
                            href="javascript:void(0)"
                            // onclick="changeView('Pie')"
                            class="dropbtn"
                        >
                            Pie
                        </a>
                        <a
                            href="javascript:void(0)"
                            // onclick="changeView('Bar')"
                            class="dropbtn"
                        >
                            Bar
                        </a>
                        <a
                            href="javascript:void(0)"
                            // onclick="changeView('Map')"
                            class="dropbtn"
                        >
                            Map
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        Settings
                    </a>
                    <div class="dropdown-content">
                        <a
                            href="javascript:void(0)"
                            // onclick="userInfo()"
                            class="dropbtn"
                        >
                            User Info
                        </a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        Help
                    </a>
                    <div class="dropdown-content">
                        <a
                            href="javascript:void(0)"
                            // onclick="helpInfo()"
                            class="dropbtn"
                        >
                            Info
                        </a>
                        <a
                            href="javascript:void(0)"
                            // onclick="helpClient()"
                            class="dropbtn"
                        >
                            Client
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
