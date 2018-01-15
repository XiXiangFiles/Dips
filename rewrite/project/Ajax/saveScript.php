<?php 
	mb_internal_encoding('utf-8');
	$fileName=@$_POST['fileName'].".txt";
	$content=@$_POST['content'];
	$user=@$_POST['user'];
	$user=explode("_", $user);
    $dir = '../../../dips/'.$user[0]."/".$fileName;
    $file = fopen($dir,"w");
	fwrite($file,$content);
	fclose($file);
	echo "$dir=\t".$dir."\nfileName=".$fileName."\n$content=\t".$content;
 ?>