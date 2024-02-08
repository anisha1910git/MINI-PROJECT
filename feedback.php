<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "feedback_form";

    // Check Connection
    $conn = mysqli_connect($servername, $username, $password, $database);

    if(!$conn)
    {
    die("Connection failed: " . mysqli_connect_error());
    }

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
    $user_name = $_POST["name"];
    $user_email = $_POST["email"];
    $user_feedback = $_POST["feedbackType"];
    $user_rating = $_POST["rating"];
    $user_comments = $_POST["comments"];
    $user_experience = $_POST["userExperience"];
    $improvement = $_POST["suggestions"];
    $favorite_features = $_POST["favoriteFeatures"];
    $least_favorite_features = $_POST["leastFavoriteFeatures"];
    $recommend = $_POST["recommend"];
    $questions = $_POST["additionalComments"];

    $sql = "INSERT INTO feedback (name, email, feedback_type, rating, comments, user_experience, improvement, favorite_features, least_favorite_features, recommend, questions) VALUES ('$user_name', '$user_email', '$user_feedback', '$user_rating', '$user_comments', '$user_experience', '$improvement', '$favorite_features', '$least_favorite_features', '$recommend', '$questions')";
    $result = mysqli_query($conn, $sql);

    // Close the Connection
    mysqli_close($conn);
    }
?>