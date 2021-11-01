<?php
// Handle POST form with DV_User table from datamining database
include "dbconfig.php";

$password=$_POST['password'];
$username=$_POST['username'];

// Connect or die
$con = mysqli_connect($dbhostname, $dbusername, $dbpassword, $dbname);

if(!$con) {
    // $protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0');
    // $code = 500;
    // $text = mysqli_connect_error();

    // header($protocol . ' ' . $code . ' ' . $text);
    http_response_code(500);
    exit;
}

$sql = "SELECT * FROM datamining.DV_User WHERE login='$username' AND password='$password' LIMIT 1";

$result = mysqli_query($con, $sql);
$num = mysqli_num_rows($result);

// if ($num == 0) {
//     $protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0');
//     $code = 500;
//     $text = "No user with that login."

//     header($protocol . ' ' . $code . ' ' . $text);
//     mysqli_close($con);
//     exit;
// } else {
    $row = mysqli_fetch_array($result);
    if ($row['password'] == $password) {
        echo "SUCCESS";
        http_response_code(200);
    } else {
        // header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        http_response_code(500);
    }

    // mysqli_close($con);
    // $protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0');
    // $code = 500;
    // $text = "Correct user wrong password."

    // header($protocol . ' ' . $code . ' ' . $text);
// }
exit;
?>