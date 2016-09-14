<?php
$portfolio_imgs = $GLOBALS['imgDir'] . 'portfolio/';
$portfolio = [
    [
        'img'   => $portfolio_imgs . 'proyect_05.jpg',
        'title' => 'Aviva - MTG',
        'desc'  => 'Pension gap calculator',
        'link'  => 'http://mindthepensiongap.ie/',
        'tags'  => 'responsive, mobileFirst, gulp, angular, htmlMailing'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_05.jpg',
        'title' => 'Xwerx',
        'desc'  => 'Xwerx company website',
        'link'  => 'http://xwerx.ie/',
        'tags'  => 'Developments, wordpress, bootstrap'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_05.jpg',
        'title' => 'UX design',
        'desc'  => 'Xwerx events website',
        'link'  => 'http://uxdesign.ie/',
        'tags'  => 'Developments, wordpress, bootstrap'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_05.jpg',
        'title' => 'Aviva - Best doctors',
        'desc'  => '',
        'link'  => 'http://top.ie/',
        'tags'  => 'scroll effects, responsibe, bootstrap'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_05.jpg',
        'title' => 'Top Oil',
        'desc'  => 'Built the website for an irish fuel company',
        'link'  => 'http://top.ie/',
        'tags'  => 'Developments, wordpress, bootstrap, gulp'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_04.jpg',
        'title' => 'Thorntons',
        'desc'  => 'Built the website for an irish recycling company',
        'link'  => 'http://thorntons-recycling.ie/',
        'tags'  => 'Development, wordpress'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_03.jpg',
        'title' => 'Integra',
        'desc'  => 'Dashboard to control and analize parkimetters remotely',
        'tags'  => 'Development, Grails, dashboard'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_02.jpg',
        'title' => 'Raccoon runner',
        'desc'  => 'Personal Android proyect developed to test Unity3D',
        'link'  => 'https://play.google.com/store/apps/details?id=com.aitorpalomares.games.raccoonrunner',
        'tags'  => 'Android, Unity 3D, design, development, game'
    ],
    [
        'img'   => $portfolio_imgs . 'proyect_01.jpg',
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
	$img  = isset($args['img'])   ? $args['img']   : null;
	$title= isset($args['title']) ? $args['title'] : null;
	$desc = isset($args['desc'])  ? $args['desc']  : null;
    $link = isset($args['link'])  ? $args['link']  : null;
    $tags = isset($args['tags'])  ? $args['tags']  : null;

    if($img){ ?>

    <div class="xs-12 sm-6 lg-4">
        <div class="portfolio_item" style="background-image:url(<?php echo $img; ?>)">


            <?php if($link) : ?>
            <a class="link" href="<?php echo $link; ?>" target="_blank">
                <i class="fa fa-external-link"></i>
            </a>
            <?php endif; ?>

            <?php if($title || $desc || $tags) : ?>

            <div class="text">
                <h1><?php echo $title; ?></h1>
                <span class="desc"><?php echo $desc; ?></span>

                <?php if($tags) : ?>
                <span class="strong">Tags:</span>
                <span><?php echo $tags; ?></span>
                <?php endif; ?>
            </div>
            <?php endif; ?>

        </div>
    </div>

    <?php }
}
?>
