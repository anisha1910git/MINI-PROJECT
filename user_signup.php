<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "signup";

  // Check connection
  $conn = mysqli_connect($servername, $username, $password, $database);
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  
  $username = $_POST["uname"];
  $password = $_POST["psw"];
  $repeat_password = $_POST["psw1"];
  $email = $_POST["email"];

  $passwordLength = strlen($password);
  $repeatPasswordLength = strlen($repeat_password);

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    function checkGmail($email) {
        if (strpos($email, "@ves.ac.in") !== false) {
            return true;
        } else {
            return false;
        }
    }

    if (checkGmail($username)) {
        if (strlen($password) >= 8) {
            if (strlen($repeat_password) >= 8) {
                if ($password == $repeat_password) {
                    // Passwords match, insert user into database
                    $sql = "INSERT INTO `users` (`username`, `email`, `password`, `date_time`) VALUES ('$username', '$email', '$password', current_timestamp())";
                    $result = mysqli_query($conn, $sql);
                    if ($result) {
                        echo '<script type="text/JavaScript">  
                        alert("Account Created Successfully");
                        window.location.href = "user_login.html";
                        </script>';
                    }
                } else {
                    // Passwords do not match, show error message
                    echo '<script type="text/JavaScript">  
                    alert("Passwords do not match"); 
                    window.location.href = "user_signup.html";
                    </script>';
                }
            }
        }
    } else {
        // Username is not a ves email, show error message
        echo '<script> alert("Please enter ves email only");
        window.location.href="user_signup.html";
        </script>';
    }
}
?>