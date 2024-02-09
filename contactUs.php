<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "contact_us";

    // Check Connection
    $conn = mysqli_connect($servername, $username, $password, $database);

    if(!$conn)
    {
    die("Connection failed: " . mysqli_connect_error());
    }

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
    $user_name = $_POST["uname"];
    $user_email = $_POST["uemail"];
    $user_number = $_POST["uphone"];
    $user_message = $_POST["umessage"];

    $sql = "INSERT INTO contact (name, email, mobile_number, message) VALUES ('$user_name', '$user_email', '$user_number', '$user_message')";
    $result = mysqli_query($conn, $sql);

    // Close the Connection
    mysqli_close($conn);
    }
?>