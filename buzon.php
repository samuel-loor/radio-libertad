<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "u440517304_leever";
    $password = "Buzon@*2024";
    $dbname = "u440517304_buzon_ciu";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO buzon_ciu (nombre, apellido, email, mensaje, ip_usuario, user_agent) VALUES (?, ?, ?, ?, ?, ?)");
    
    $ip_usuario = $_SERVER['REMOTE_ADDR'];
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    
    $stmt->bind_param("ssssss", $_POST['nombre'], $_POST['apellido'], $_POST['email'], $_POST['mensaje'], $ip_usuario, $user_agent);

    if ($stmt->execute()) {
        echo "Nuevo registro creado exitosamente";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>