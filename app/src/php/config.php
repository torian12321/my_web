<?php
/*
 * PHP configuration options.
 */


// Geting main info from manifest
$manifest      = file_get_contents("manifest.json");
$manifest_data = json_decode($manifest, true);

$GLOBALS['projectPath'] = $manifest_data['start_path'];
$GLOBALS['startUrl']    = str_replace("html", "php", $manifest_data['start_url']);
$GLOBALS['home']        = $GLOBALS['projectPath'] . $GLOBALS['startUrl'];

$GLOBALS['projectName'] = $manifest_data['name'];
$GLOBALS['projectDesc'] = $manifest_data['description'];

$GLOBALS['srcDir'] 		= $GLOBALS['projectPath'] . 'src/';
$GLOBALS['cssDir']      = $GLOBALS['srcDir'] . 'css/';
$GLOBALS['jsDir']       = $GLOBALS['srcDir'] . 'js/';
$GLOBALS['imgDir']      = $GLOBALS['srcDir'] . 'img/';
$GLOBALS['imgDef']      = $GLOBALS['imgDir'] . 'default/';
$GLOBALS['iconsDir']    = $GLOBALS['imgDir'] . 'icons/';

$GLOBALS['dateFormat']  = 'F jS - Y';
$GLOBALS['themeColor']  = $manifest_data['theme_color'];

//Contact
$GLOBALS['contact_email']    = 'aitorpalomares@gmail.com';
$GLOBALS['contact_linkedin'] = 'https://ie.linkedin.com/in/aitorpalomares';
$GLOBALS['contact_github']   = 'https://github.com/torian12321?tab=repositories';
$GLOBALS['contact_codepen']  = 'http://codepen.io/torian12321/';
?>
