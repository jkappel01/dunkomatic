<?php
$loc = $ROOT."../../basketapp/pages/index.php?conf_path=hbvks";
session_start();
unset($_SESSION["conf_path"]);
header("Location: ".$loc);
exit;
?>