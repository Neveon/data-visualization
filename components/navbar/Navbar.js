"use strict";

const Navbar = () => {
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
                                <a href="#" id="uploadButton">
                                    Load CSV File
                                </a>
                                {/* To handle file */}
                                <form
                                    action="csv_upload.php"
                                    style="display:none"
                                >
                                    <input id="myInput" type="file" />
                                </form>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a
                                    href="#logindb"
                                    data-toggle="modal"
                                    data-target="#logindb"
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
                                <a
                                    href="#bannerformmodal"
                                    data-toggle="modal"
                                    data-target="#bannerformmodal"
                                >
                                    User Info
                                </a>
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
                                <a
                                    href="#bannerformmodal"
                                    data-toggle="modal"
                                    data-target="#bannerformmodal"
                                >
                                    Info
                                </a>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li>
                                <a
                                    href="#bannerformmodal"
                                    data-toggle="modal"
                                    data-target="#bannerformmodal"
                                >
                                    Client
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
