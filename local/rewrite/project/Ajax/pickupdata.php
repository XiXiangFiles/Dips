<?php 
	mb_internal_encoding('utf-8');
	$dir=@$_GET['path'];
    $dir = '../../../dips/'.$dir;
    $files= scandir($dir);
    $file_name=$files[0];
    // echo "dir=".$dir."\n";
    for ($i=1; $i <count($files); $i++) { 
    	$file_name=$file_name.",".$files[$i];
    }
    echo $file_name;
 ?>