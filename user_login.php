<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "signup";

  $conn = mysqli_connect($servername, $username, $password,$database);
  if (!$conn) 
  {  
    die("Connection failed: " . mysqli_connect_error());
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") 
  {
    $username = $_POST["uname"];
    $password = $_POST["psw"];
    $sql = "Select * from users where username='$username' AND password='$password'";

    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num == 1)
    {
      header("location: index.html");
    }
    else
    {
      echo '<script> 
      alert("Invalid Username or Password"); 
      window.location.href = "user_login.html";
      </script>';
    } 
  }
?>