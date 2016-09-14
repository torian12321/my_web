<?php

    $experiences = [
        /*
        [
    		'type'     => job  | formation | language | travel
    		'reverse'  => true | false
        ]
        */
        [
        	'type'     => 'job',
        	'name'     => 'XWERX',
            'title'    => 'Web Developer',
            'date'     => 'February 2015',
            'location' => 'Dublin',
            'link'     => 'http://www.xwerx.com',
            'linkName' => 'www.xwerx.com',
            'reverse'  => true,
            'desc'     => 'Description  '
        ],
        [
        	'type'     => 'language',
        	'name'     => 'MEC School',
            'title'    => 'General English course',
            'date'     => 'Jan 2014 – July 2014',
            'location' => 'Dublin',
            'reverse'  => true,
            'desc'     => 'Description'
        ],
        [
        	'type'     => 'job',
        	'name'     => 'Open Traffic System',
            'title'    => 'Software Developer',
            'date'     => 'Nov 2011 – Apr 2013',
            'location' => 'Barcelona',
            'link'     => 'http://www.opentraffic.net/',
            'linkName' => 'www.opentraffic.net',
            'reverse'  => false,
            'desc'     => 'Description'
        ],
        [
        	'type'     => 'formation',
        	'name'     => 'UPC - University',
            'title'    => 'Technical Engineering in Telecommunications',
            'date'     => 'Jul 2010 – Jan 2014',
            'location' => 'Barcelona',
            'link'     => 'http://www.upc.edu/?set_language=es',
            'linkName' => 'www.upc.edu',
            'reverse'  => false,
            'desc'     => 'Description'
        ],
        [
        	'type'     => 'job',
        	'name'     => 'Accenture',
            'title'    => 'Support internship',
            'date'     => 'April 2011 – Oct 2011',
            'location' => 'Barcelona',
            'link'     => 'https://www.accenture.com',
            'linkName' => 'www.accenture.com',
            'reverse'  => true,
            'desc'     => 'Description'
        ]
    ];
?>

<section id="bio">
    <h1>Bio</h1>
    <div class="container">
        <?php foreach($experiences as $ex){ experience_html($ex); } ?>
    </div>
</section>


<?php function experience_html($args){
    $type    = isset($args['type'])    ? $args['type']    : 'formation';		// job  | formation | language | travel
	$reverse = isset($args['reverse']) ? $args['reverse'] : false;

	$name    = isset($args['name'])    ? $args['name']    : '';
	$date    = isset($args['date'])    ? $args['date']    : '';
	$location= isset($args['location'])? $args['location']: null;
	$link    = isset($args['link'])    ? $args['link']    : null;
	$linkName= isset($args['linkName'])? $args['linkName']: $link;

	$title   = isset($args['title'])   ? $args['title']   : '';
	$desc    = isset($args['desc'])    ? $args['desc']    : false;

	$class_general = $reverse ? 'md-push-6 lg-push-7' : 'lg-push-3';
	$class_details = $reverse ? 'md-pull-6 lg-pull-7' : '';

	if($name && $desc){
	?>
	<div class="row bio-item <?php echo $type; ?>">
		<div class="xs-12 sm-3 md-6 lg-5 <?php echo $class_general; ?> general">
			<h1><?php echo $name; ?></h1>
			<span class="hidden-xs"><i class="fa fa-calendar-o"></i><?php echo $date ?></span>
			<?php if($location) : ?>
				<span class="hidden-xs"><i class="fa fa-map-marker"></i><?php echo $location; ?></span>
			<?php endif; ?>
			<?php if($link) : ?>
				<span class="hidden-xs"><a href="<?php echo $link; ?>" target="black"><i class="fa fa-link"></i><?php echo $linkName ?></a></span>
			<?php endif;?>

		</div>
		<div class="visible-lg lg-2">
			<div class="icon"></div>
		</div>
		<div class="xs-12 sm-9 md-6 lg-5 <?php echo $class_details; ?>">
			<div class="details">
				<h1><?php echo $title; ?></h1>
				<span><?php echo $desc; ?></span>
			</div>
		</div>
	</div>
	<?php
	}
}

?>
