// Display Client Information in Help section
const helpClient = () => {
    let name = navigator.appName;
    let ver = navigator.userAgent;
    let type = navigator.platform;
    let cookies = navigator.cookieEnabled;

    return (
        <p>
            <b>Browser Information</b>
            <br />
            Name: {name}
            <br />
            Version: {ver}
            <br />
            Type: {type}
            <br />
            Cookies enabled: {String(cookies)}
            <br />
            JavaScript enabled: true
        </p>
    );
};

export default helpClient;
