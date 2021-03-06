<?php
include_once('root.inc.php');
include_once('cronjob_header.inc.php');

//-------------------------run class method and security check------------------
$conn = ADONewConnection(DB_DRIVER);
$conn->debug = $db_debug;
$conn->Connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
//-------------------------run class method and security check------------------

include( $APLICATION_ROOT.'common/db2xls/psxlsgen.php' );
include( $APLICATION_ROOT.'common/db2xls/db_sxlsgen.php' );


$sql = 'SELECT club_id, shortname from club';
$rs2 = $conn->Execute($sql);


while (!$rs2->EOF){

//	$exp_dir = DDIR_CLUBS.'/'.$rs2->fields["shortname"];

	$exp_dir = DDIR_CLUBS;
	$exp_file = 'V_'. $rs2->fields["shortname"] .'_Schiriplan';

	if ( !is_dir($exp_dir)){
					umask(0);
		mkdir($exp_dir,0777);
	}

	$myxls = new Db_SXlsGen();
	$myxls->filename = $exp_file;
	$myxls->get_type = 1;
	$myxls->default_dir = $exp_dir;
	$myxls->col_aliases = array("game_id"=>"ID", "shortname"=>"Runde","game_no"=>"Spielnr.","game_team_home"=>"Heim","game_team_guest"=>"Gast","game_date"=>"Tag","game_time"=>"Beginn","game_gym"=>"Halle"); 
	$myxls->headerline[0]="HBV Bezirk Darmstadt - Saison ".sSeason;
	$myxls->headerline[1]="Schiedsrichtereinsätze für ".$rs2->fields["shortname"];
	$sql2 = "SELECT l.shortname, g.game_no, g.game_team_home, g.game_team_guest, g.game_date, g.game_time, g.game_gym FROM game g, league l where (game_team_ref1='".$rs2->fields["shortname"]."' OR game_team_ref2='".$rs2->fields["shortname"]."' OR ( game_team_ref1='****' AND SUBSTRING(game_team_home,1,4)='".$rs2->fields["shortname"]."'  ) ) AND g.league_id=l.league_id ORDER BY g.game_date, g.game_time";
	$myxls->GetXlsFromQuery($sql2);
 
    $rs2->MoveNext();
}


?>