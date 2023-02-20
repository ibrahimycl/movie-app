<?php
  header("Access-Control-Allow-Origin: *");
  Header("Access-Control-Allow-Credentials", "true");
  Header("Access-Control-Max-Age", "1800");
  Header("Access-Control-Allow-Headers", "content-type");
  Header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
  Header("Content-Type", "application/json;charset=utf-8");
  header("Access-Control-Allow-Headers: *");
 

// Veritabanına bağlan
$servername = "localhost";
$username = "root";
$passw = "";
$dbname = "movie";

$conn = new mysqli($servername, $username, $passw, $dbname);

// Hata kontrolü
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;
/*$response = array("message" => "Veri gonderimi basarili.", "data" => $data);
echo json_encode($response);*/

// POST isteği al
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Kullanıcı adı ve şifreyi al
  

  // Veritabanında kullanıcıyı ara
  $sql = "SELECT user_id FROM users WHERE email = '$email' AND password = '$password'";
  $result = $conn->query($sql);

  // Eşleşme bulunduysa oturum açma belirteci oluştur ve geri gönder
  if ($result->num_rows > 0) {
    $token = generate_token(); // burada gerçek bir belirteç oluşturma işlemi yapılmalıdır
    echo json_encode(array("message" => "Eslesiyor.","token" => $token));
  } else {
    // Eşleşme bulunamadıysa hata mesajı gönder
    header('HTTP/1.1 401 Unauthorized');
    echo "Invalid email or password";
  }
}

function generate_token($length = 32) {
    // Generate a cryptographically secure random string
    $bytes = random_bytes($length);
    // Convert the random bytes to a hexadecimal string
    $token = bin2hex($bytes);
    return $token;
  }

$conn->close();
