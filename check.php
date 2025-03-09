<?php
$url = "http://localhost:8000/auth/login";
$data = [
    "email" => "waqar@example.com",
    "password" => "yourpassword"
];

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); // Convert array to JSON
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json", // Tell the API that we're sending JSON
    "Accept: application/json" // Expect JSON response
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    $data = json_decode($response, true);
    print_r($data); // Print API response
}

curl_close($ch);
?>
