// Login form
import { DataContext } from "../../../App";

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form action="login.php" method="post">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />

            <label htmlFor="password"></label>
            <input type="password" name="password" id="username" />

            <input type="submit" value="Submit" />
        </form>
    );
};

export default Login;
