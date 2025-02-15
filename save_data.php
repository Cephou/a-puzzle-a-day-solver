<?php
// Check if JSON data is posted
if(isset($_POST['json'])) {
  // Read the existing JSON file
  $jsonFile = 'data.json';
  $jsonData = file_get_contents($jsonFile);

  // Decode JSON data into PHP array
  $dataArray = json_decode($jsonData, true);

  // Add $_POST['json'] to a new array cell
  $dataArray[$_POST['date']] = $_POST['json'];

  // Encode the updated array back to JSON
  $newJsonData = json_encode($dataArray);

  // Save the updated JSON data back to the file
  file_put_contents($jsonFile, $newJsonData);

  echo 'Data has been added successfully.';
} else {
  echo 'No JSON data posted.';
}
?>
