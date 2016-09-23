<?php

    $experiences = [
        /*
        [
    		'type'         => job  | formation | language | travel | volunteer | course
    		'orientation'  => 'reverse' | ''
        ]
        */
        [
        	'type'         => 'job',
        	'name'         => 'XWERX',
            'title'        => 'Web Developer',
            'date'         => 'February 2015',
            'location'     => 'Dublin',
            'link'         => 'http://www.xwerx.com',
            'linkName'     => 'www.xwerx.com',
            'orientation'  => '',
            'desc'         => 'Description  '
        ],
        [
        	'type'         => 'volunteer',
        	'name'         => 'Coder Dojo',
            'title'        => 'Mentor - Volunteer',
            'date'         => 'June 2015',
            'location'     => 'Dublin',
            'link'         => 'http://theclubhouse.ie/',
            'linkName'     => 'www.theclubhouse.ie',
            'orientation'  => 'reverse',
            'desc'         => 'I am a volunteer mentor and teacher at SWICN Computer Clubhouse Coder Dojo. I work with other mentors to teach code to a class of 15 - 20 kids aged 8 to 14 years old at the Clubhouse in Dublin 8. We teach HTML, CSS, Javascript and Processing. It is generally happy chaos with great kids and great fellow mentors.'
        ],
        [
            'type'         => 'course',
            'name'         => 'Udemy',
            'title'        => 'Angular',
            'date'         => 'June 2015',
            'location'     => 'Online',
            'link'         => 'http://theclubhouse.ie/',
            'linkName'     => 'www.theclubhouse.ie',
            'orientation'  => '',
            'desc'         => 'I am a volunteer mentor and teacher at SWICN Computer Clubhouse Coder Dojo. I work with other mentors to teach code to a class of 15 - 20 kids aged 8 to 14 years old at the Clubhouse in Dublin 8. We teach HTML, CSS, Javascript and Processing. It is generally happy chaos with great kids and great fellow mentors.'
        ],
        [
        	'type'         => 'language',
        	'name'         => 'MEC School',
            'title'        => 'General English course',
            'date'         => 'Jan 2014 – July 2014',
            'location'     => 'Dublin',
            'orientation'  => 'reverse',
            'desc'         => 'Description'
        ],
        [
        	'type'         => 'job',
        	'name'         => 'Open Traffic System',
            'title'        => 'Software Developer',
            'date'         => 'Nov 2011 – Apr 2013',
            'location'     => 'Barcelona',
            'link'         => 'http://www.opentraffic.net/',
            'linkName'     => 'www.opentraffic.net',
            'orientation'  => 'reverse',
            'desc'         => 'Description'
        ],
        [
        	'type'         => 'formation',
        	'name'         => 'UPC - University',
            'title'        => 'Technical Engineering in Telecommunications',
            'date'         => 'Jul 2010 – Jan 2014',
            'location'     => 'Barcelona',
            'link'         => 'http://www.upc.edu/?set_language=es',
            'linkName'     => 'www.upc.edu',
            'orientation'  => '',
            'desc'         => 'Description'
        ],
        [
        	'type'         => 'job',
        	'name'         => 'Accenture',
            'title'        => 'Support internship',
            'date'         => 'April 2011 – Oct 2011',
            'location'     => 'Barcelona',
            'link'         => 'https://www.accenture.com',
            'linkName'     => 'www.accenture.com',
            'orientation'  => '',
            'desc'         => 'Description'
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
    $type        = isset($args['type'])        ? $args['type']        : 'formation';		// job  | formation | language | travel
	$orientation = isset($args['orientation']) ? $args['orientation'] : '';

	$name        = isset($args['name'])         ? $args['name']       : '';
	$date        = isset($args['date'])         ? $args['date']       : '';
	$location    = isset($args['location'])     ? $args['location']   : null;
	$link        = isset($args['link'])         ? $args['link']       : null;
	$linkName    = isset($args['linkName'])     ? $args['linkName']   : $link;

	$title       = isset($args['title'])        ? $args['title']      : '';
	$desc        = isset($args['desc'])         ? $args['desc']       : false;

	if($name && $desc){
	?>
    <div class="c-bio <?php echo $type . ' ' . $orientation; ?>">
        <div class="details">
            <h4><?php echo $name; ?></h4>
            <ul>
                <?php if($location) : ?>
    			<li class="date"><?php echo $date; ?></li>
    			<?php endif; ?>

                <?php if($location) : ?>
    			<li class="loc"><?php echo $location; ?></li>
    			<?php endif; ?>

                <?php if($link) : ?>
                <li class="link"><a href="<?php echo $link; ?>" target="black"><?php echo $linkName ?></a></li>
                <?php endif;?>

            </ul>
        </div>

        <div class="icon"></div>

        <div class="content">
            <h4><?php echo $title; ?></h4>
            <p ><?php echo $desc;  ?></p>
        </div>
    </div>
	<?php
	}
}

?>
