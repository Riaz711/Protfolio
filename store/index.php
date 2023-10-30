<?php 
//  $con = mysqli_connect('localhost','root','databasname');
// if (isset($_POST['submit'])){
//    $name = $_POST['name'];
//    $name = $_POST['email'];
//    $name = $_POST['message'];

// }

extract($_REQUEST);

$file=fopen("dataSave.text",'a');
fwrite($file,"$name"."\n");
fwrite($file,"$email"."\n");
fwrite($file,"$message"."\n");
fclose($file);
return header('Location: ../index.html#Contact');

?>