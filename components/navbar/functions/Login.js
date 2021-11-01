// Login form
import { DataContext } from "../../../App";
import $ from "../../../node_modules/jquery";

const Login = () => {
    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className="modal fade"
            id="login"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="login-label"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="login-label">
                            Login Form
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username: </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            <br />
                            <label htmlFor="password">Password: </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <br />
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
