<?php
include_once('root.inc.php');

$obj_name="security_group_permission";
include_once($ROOT.'libs/basketapp_header.inc.php');
include($ROOT.'libs/basketapp_controller.inc.php');

//----------------many to many definitions--------------
$handler_name="pager_handler";
$handler_path="objects/";

$general_batch_size=50;

$show_search=false;
$show_search_query=false;


if (isset($_REQUEST[$primary_object["id_column_name"]."_selected"]))
{
	$_SESSION["security_group_id_selected_session"]=$_REQUEST[$primary_object["id_column_name"]."_selected"];
	$primary_object_selected_id=$_REQUEST[$primary_object["id_column_name"]."_selected"];
}
else
{
	if (isset($_SESSION["security_group_id_selected_session"]))
	{
		$primary_object_selected_id=$_SESSION["security_group_id_selected_session"];
	}
}

$actions_arr=array();
$actions_arr[]=array("type"=>"M","action"=>"update_all","heading"=>$sUpdRelations,"onclick"=>"update_relations()","row_end"=>false);
$actions_arr[]=array("type"=>"M","action"=>"delete_all","heading"=>$sDelRelations,"onclick"=>"delete_all_relations('".ARE_YOU_SURE_TO_DELETE_ALL_RELATIONS."')","row_end"=>false);
$actions_arr[]=array("type"=>"D","action"=>"navback","heading"=>$sNavBack,"onclick"=>"location.href='".$_SESSION["main_list_page"]."'","row_end"=>true);



include($APLICATION_ROOT."templates/common_tpl/many_to_many_relation.php");
//----------------definitions end--------------
include_once($ROOT.'libs/basketapp_footer.inc.php');

?>