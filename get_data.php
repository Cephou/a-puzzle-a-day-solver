<?php
// Check if JSON data is posted
if(isset($_POST['date'])) {
  // Read the existing JSON file
  $jsonFile = 'data.json';
  $jsonData = file_get_contents($jsonFile);
  $dataArray = json_decode($jsonData, true);

  if(!empty($dataArray[$_POST['date']])) {
  	echo json_encode($dataArray[$_POST['date']]);
	} else {
		echo 'ko';
	}

} else {
  echo 'ko';
}
?>
