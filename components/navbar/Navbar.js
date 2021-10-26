"use strict";

const Navbar = () => {
    return (
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <ul class="nav navbar-nav">
                    {/* File Drop down */}
                    <li class="dropdown">
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            File <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Load CSV File</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="#">Login to DB</a>
                            </li>
                            <li>
                                <a href="#">Logout DB</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="#">Exit</a>
                            </li>
                        </ul>
                    </li>
                    {/* View Dropdown */}
                    <li class="dropdown">
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            View <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Line</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="#">Pie</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="#">Bar</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="#">Map</a>
                            </li>
                        </ul>
                    </li>
                    {/* Settings Dropdown */}
                    <li class="dropdown">
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Settings <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">User Info</a>
                            </li>
                        </ul>
                    </li>
                    {/* Help Dropdown */}
                    <li class="dropdown">
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Help <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Info</a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a href="#">Client</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
