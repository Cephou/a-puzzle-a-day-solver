<?php

// Retrieve JSON data from POST request
$jsonData = $_POST['json'];

// Define the file path
$filePath = 'data.json';

// Write JSON data to file
$file = fopen($filePath, 'w');
if ($file) {
  fwrite($file, $jsonData);
  fclose($file);
  echo 'Data saved successfully.';
} else {
  echo 'Error saving data.';
}
?>