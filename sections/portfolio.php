<section id="portfolio">
<div class="container">

	<h1>Portfolio</h1>
	<div class="row">
		<?php
            
        $args = [];
        $args ['img']   = 'include/img/portfolio/proyect_01.jpg';
		$args ['title'] = 'Top Oil';
		$args ['desc']  = 'Built the website for an irish fuel company';
		$args ['link']  = 'http://top.ie/';
        $args ['tags']  = 'Developments, wordpress, bootstrap';
        portfolio_item($args);

        $args = [];
        $args ['img']   = 'include/img/portfolio/proyect_02.jpg';
		$args ['title'] = 'Thorntons';
		$args ['desc']  = 'Built the website for an irish recycling company';
		$args ['link']  = 'http://thorntons-recycling.ie/';
        $args ['tags']  = 'Development, wordpress';
        portfolio_item($args);

        $args = [];
        $args ['img']   = 'include/img/portfolio/proyect_03.jpg';
		$args ['title'] = 'Integra';
		$args ['desc']  = 'Internal web app for manage parkimetters';
        $args ['tags']  = 'Development, Grails, dashboard';
        portfolio_item($args);

        $args = [];
        $args ['img']   = 'include/img/portfolio/proyect_04.jpg';
		$args ['title'] = 'Raccoon runner';
		$args ['desc']  = 'Personal Android proyect developed to test Unity3D';
		$args ['link']  = 'https://play.google.com/store/apps/details?id=com.aitorpalomares.games.raccoonrunner';
        $args ['tags']  = 'Android, Unity 3D, design, development, game';
        portfolio_item($args);

        $args = [];
        $args ['img']   = 'include/img/portfolio/proyect_05.jpg';
		$args ['title'] = 'Hoja liquidacion';
		$args ['desc']  = 'Internal proyect to manage paymenst and stock in a private business';
		$args ['link']  = 'https://play.google.com/store/apps/details?id=campo.liquidacion';
        $args ['tags']  = 'Android, design, development, app, management';
        portfolio_item($args);
        
        ?>
	</div>

</div>
</section>