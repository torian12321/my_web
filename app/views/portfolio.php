<?php
$portfolio_imgs = $GLOBALS['imgDir'] . 'portfolio/';
$portfolio = [
    [
        'img'   => $portfolio_imgs . 'aviva_mtg.jpg',
        'title' => 'Aviva - MTG',
        'desc'  => 'Quick and easy way to calculate your pension gap',
        'link'  => 'http://mindthepensiongap.ie/',
        'tags'  => 'responsive, mobileFirst, gulp, angular, htmlMailing'
    ],
    [
        'img'   => $portfolio_imgs . 'xwerx.jpg',
        'title' => 'Xwerx',
        'desc'  => 'Xwerx company website',
        'link'  => 'http://xwerx.com/',
        'tags'  => 'Developments, wordpress, bootstrap'
    ],
    [
        'img'   => $portfolio_imgs . 'uxdesign.jpg',
        'title' => 'UX design',
        'desc'  => 'Xwerx events website',
        'link'  => 'http://uxdesign.ie/',
        'tags'  => 'Developments, wordpress, bootstrap'
    ],
    [
        'img'   => $portfolio_imgs . 'aviva_bd.jpg',
        'title' => 'Aviva - Best doctors',
        'desc'  => 'Aviva experts mdical advice',
        'link'  => 'http://www.avivaincomeprotection.ie/bestdoctors/',
        'tags'  => 'scroll effects, responsibe, bootstrap'
    ],
    [
        'img'   => $portfolio_imgs . 'top.jpg',
        'title' => 'Top Oil',
        'desc'  => 'Built the website for an irish fuel company',
        'link'  => 'http://top.ie/',
        'tags'  => 'Developments, wordpress, bootstrap, gulp'
    ],
    [
        'img'   => $portfolio_imgs . 'thortons.jpg',
        'title' => 'Thorntons',
        'desc'  => 'Built the website for an irish recycling company',
        'link'  => 'http://thorntons-recycling.ie/',
        'tags'  => 'Development, wordpress'
    ],
    [
        'img'   => $portfolio_imgs . 'integra.jpg',
        'title' => 'Integra',
        'desc'  => 'Dashboard to control and analize parkimetters remotely',
        'tags'  => 'Development, Grails, dashboard'
    ],
    [
        'img'   => $portfolio_imgs . 'raccoon.jpg',
        'title' => 'Raccoon runner',
        'desc'  => 'Personal Android proyect developed to test Unity3D',
        'link'  => 'https://play.google.com/store/apps/details?id=com.aitorpalomares.games.raccoonrunner',
        'tags'  => 'Android, Unity 3D, design, development, game'
    ],
    [
        'img'   => $portfolio_imgs . 'hoja.jpg',
        'title' => 'Hoja liquidacion',
        'desc'  => 'Internal proyect to manage paymenst and stock in a private business',
        'link'  => 'https://play.google.com/store/apps/details?id=campo.liquidacion',
        'tags'  => 'Android, design, development, app, management'
    ]
];
?>

<section id="portfolio">
    <h1>Portfolio</h1>
    <div class="container">
    	<div class="row-spacing">
            <?php foreach($portfolio as $project){ portfolio_project($project); } ?>
    	</div>
    </div>
</section>



<?php
function portfolio_project($args){
	$img       = isset($args['img'])   ? $args['img']   : null;
	$title     = isset($args['title']) ? $args['title'] : null;
	$desc      = isset($args['desc'])  ? $args['desc']  : null;
    $link      = isset($args['link'])  ? $args['link']  : null;
    $tags      = isset($args['tags'])  ? $args['tags']  : null;
    $container = isset($link)          ? 'a'            : 'div';

    if($img){ ?>


    <<?php echo $container; ?> class="xs-12 sm-6 lg-4" href="<?php echo $link; ?>" target="_blank">
        <div class="c-product" style="background-image:url(<?php echo $img; ?>)">

            <?php if($link) : ?>
            <div class="link"></div>
            <?php endif; ?>

            <?php if($title) : ?>
            <h1><?php echo $title; ?></h1>
            <?php endif; ?>

            <?php if($desc) : ?>
            <span class="desc"><?php echo $desc; ?></span>
            <?php endif; ?>

        </div>
    </<?php echo $container; ?>>

    <?php }
}
?>
