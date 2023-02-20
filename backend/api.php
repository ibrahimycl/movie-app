<?php

// İstek gövdesinden verileri alın
$email = $input['email'];
$password = $input['password'];

// Veritabanı sorgusu oluşturma
$query = "SELECT * FROM users WHERE email='$email' AND password='$password'";

// Veritabanı bağlantısı kurma
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "mydatabase";

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (mysqli_connect_errno()) {
  die("Veritabanı bağlantısı başarısız: " . mysqli_connect_error());
}

// Veritabanı sorgusunu yürütme
$result = mysqli_query($conn, $query);

// Kullanıcı doğrulaması kontrolü
if (mysqli_num_rows($result) == 1) {
  // Kullanıcı doğru ise JWT oluşturma
  $token = array(
    "email" => $email
  );
  $jwt = JWT::encode($token, "mysecretkey");

  // JWT'yi yanıt olarak gönderme
  http_response_code(200);
  echo json_encode(array("token" => $jwt));
} else {
  // Kullanıcı yanlış ise hata yanıtı gönderme
  http_response_code(401);
  echo json_encode(array("message" => "Hatalı kimlik bilgileri"));
}

// Veritabanı bağlantısını kapatma
mysqli_close($conn);
?>
