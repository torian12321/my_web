<section id="bio-list">
<div class="container">
	<h1>Bio</h1>
	<?php
/*
		$args ['type']     = job  || formation || language || travel;
		$args ['reverse']  = true || false;

*/
		$args = [];
        $args ['type']     = 'job';
		$args ['name']     = 'XWERX';
		$args ['title']    = 'Web Developer';
		$args ['date']     = 'February 2015';
		$args ['location'] = 'Dublin';
		$args ['link']     = 'www.xwerx.com';
		$args ['linkName'] = 'www.xwerx.com';
        $args ['reverse']  = true;
        $args ['desc']     = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur delectus, itaque temporibus minima cum, voluptatum aspernatur ipsa atque obcaecati iusto possimus, velit corrupti? Labore, odit minus laboriosam accusantium deserunt quibusdam saepe dolor ullam molestiae qui numquam excepturi dolore officiis culpa, fugiat quidem quae libero voluptas dicta, fuga, pariatur debitis.';
		bioItem($args);


        $args = [];
        $args ['type']     = 'travel';
		$args ['name']     = 'Penn University';
		$args ['title']    = 'Course - Gamification (course)';
		$args ['date']     = '12 may 2015';
		$args ['location'] = 'Dublin';
		$args ['link']     = 'www.link.com';
		$args ['linkName'] = 'webName';
        $args ['reverse']  = false;
        $args ['desc']     = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur delectus, itaque temporibus minima cum, voluptatum aspernatur ipsa atque obcaecati iusto possimus, velit corrupti? Labore, odit minus laboriosam accusantium deserunt quibusdam saepe dolor ullam molestiae qui numquam excepturi dolore officiis culpa, fugiat quidem quae libero voluptas dicta, fuga, pariatur debitis.';
		bioItem($args);


		$args = [];
        $args ['type']     = 'language';
		$args ['name']     = 'MEC School';
		$args ['title']    = 'General English course';
		$args ['date']     = 'Jan 2014 – July 2014';
		$args ['location'] = 'Dublin';
        $args ['reverse']  = true;
        $args ['desc']     = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur delectus, itaque temporibus minima cum, voluptatum aspernatur ipsa atque obcaecati iusto possimus, velit corrupti? Labore, odit minus laboriosam accusantium deserunt quibusdam saepe dolor ullam molestiae qui numquam excepturi dolore officiis culpa, fugiat quidem quae libero voluptas dicta, fuga, pariatur debitis.';
		bioItem($args);


		$args = [];
        $args ['type']     = 'job';
		$args ['name']     = 'Open Traffic System';
		$args ['title']    = 'Software Developer';
		$args ['date']     = 'Nov 2011 – Apr 2013';
		$args ['location'] = 'Barcelona';
		$args ['link']     = 'http://www.opentraffic.net/';
		$args ['linkName'] = 'www.opentraffic.net';
        $args ['reverse']  = false;
        $args ['desc']     = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur delectus, itaque temporibus minima cum, voluptatum aspernatur ipsa atque obcaecati iusto possimus, velit corrupti? Labore, odit minus laboriosam accusantium deserunt quibusdam saepe dolor ullam molestiae qui numquam excepturi dolore officiis culpa, fugiat quidem quae libero voluptas dicta, fuga, pariatur debitis.';
		bioItem($args);


		$args = [];
        $args ['type']     = 'formation';
		$args ['name']     = 'UPC - University';
		$args ['title']    = 'Technical Engineering in Telecommunications';
		$args ['date']     = 'Jul 2010 – Jan 2014';
		$args ['location'] = 'Barcelona';
		$args ['link']     = 'http://www.upc.edu/?set_language=es';
		$args ['linkName'] = 'www.upc.edu';
        $args ['reverse']  = false;
        $args ['desc']     = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consectetur delectus, itaque temporibus minima cum, voluptatum aspernatur ipsa atque obcaecati iusto possimus, velit corrupti? Labore, odit minus laboriosam accusantium deserunt quibusdam saepe dolor ullam molestiae qui numquam excepturi dolore officiis culpa, fugiat quidem quae libero voluptas dicta, fuga, pariatur debitis.';
		bioItem($args);


		$args = [];
        $args ['type']     = 'job';
		$args ['name']     = 'Accenture';
		$args ['title']    = 'Support internship';
		$args ['date']     = 'April 2011 – Oct 2011';
		$args ['location'] = 'Barcelona';
		$args ['link']     = 'https://www.accenture.com';
		$args ['linkName'] = 'www.accenture.com';
        $args ['reverse']  = false;
        $args ['desc']     = 'Collaborated in support incidents of different projects, mainly with SAP systems, solving software and connectivity issues. Additionally supported voicemail and telephone';
		bioItem($args);


	?>
</div>
</section>