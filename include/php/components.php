<?php


function bioItem($args){
	$type    = isset($args['type'])    ? $args['type']    : 'formation';		//formation || language || job
	$reverse = isset($args['reverse']) ? $args['reverse'] : false;

	$name    = isset($args['name'])    ? $args['name']    : '';
	$date    = isset($args['date'])    ? $args['date']    : '';
	$location= isset($args['location'])? $args['location']: null;
	$link    = isset($args['link'])    ? $args['link']    : null;
	$linkName= isset($args['linkName'])? $args['linkName']: $link;

	$title   = isset($args['title'])   ? $args['title']   : '';
	$desc    = isset($args['desc'])    ? $args['desc']    : false;

	$class_general = $reverse ? 'col-md-push-6 col-lg-push-7' : 'col-lg-push-3';
	$class_details = $reverse ? 'col-md-pull-6 col-lg-pull-7' : '';

	if($name && $desc){
	?>
	<div class="row bio-item <?php echo $type; ?>">
		<div class="col-xs-12 col-sm-3 col-md-6 col-lg-5 <?php echo $class_general; ?> general">
			<h1><?php echo $name; ?></h1>
			<span class="hidden-xs"><i class="fa fa-calendar-o"></i><?php echo $date ?></span>
			<?php if($location) : ?>
				<span class="hidden-xs"><i class="fa fa-map-marker"></i><?php echo $location; ?></span>
			<?php endif; ?>
			<?php if($link) : ?>
				<span class="hidden-xs"><a href="<?php echo $link; ?>" target="black"><i class="fa fa-link"></i><?php echo $linkName ?></a></span>
			<?php endif;?>

		</div>
		<div class="visible-lg col-lg-2">
			<div class="icon"></div>
		</div>
		<div class="col-xs-12 col-sm-9 col-md-6 col-lg-5 <?php echo $class_details; ?>">
			<div class="details">
				<h1><?php echo $title; ?></h1>
				<span><?php echo $desc; ?></span>
			</div>
		</div>
	</div>
	<?php
	}
}

function ability($name, $value){
	$totalRange = 5;
	$value = ($value>$totalRange) ? $totalRange : $value;
	$value = ($value<0)           ? 0           : $value;

	?>
	<div class="row col-xs-12 col-sm-6 ability">
		<div class="col-xs-6 col-sm-7">
			<?php echo $name; ?>
		</div>
		<div class="col-xs-5">
			<ul class="ability-level ability-level-<?php echo $value; ?>">
				<?php
				for($i=0; $i<$totalRange; $i++){
					if($i < $value){
						echo '<li class="filled"></li>';
					}else{
						echo '<li></li>';
					}
				}?>
			</ul>
		</div>
	</div>

<?php
}

function portfolio_item($args){
	$img  = isset($args['img'])   ? $args['img']   : null;
	$title= isset($args['title']) ? $args['title'] : null;
	$desc = isset($args['desc'])  ? $args['desc']  : null;
    $link = isset($args['link'])  ? $args['link']  : null;
    $tags = isset($args['tags'])  ? $args['tags']  : null;
    
    if($img){ ?>
    
    <div class="col-xs-12 col-sm-6 col-lg-4">
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


function quote($args){
	$quote = isset($args['quote'])  ? $args['quote']  : null;
	$author= isset($args['author']) ? $args['author'] : null;
	$class = isset($args['class'])  ? $args['class']  : '';

	if($quote){	?>
		<section class="quote <?php echo $class; ?>">
			<div class="container">
				<div class="row">
					<div class="col-xs-10 col-xs-push-1 col-sm-8 col-sm-push-2">
						<i class="fa fa-quote-left"></i>
							<?php echo $quote; ?>
						<i class="fa fa-quote-right"></i>
						<?php if($author) : ?>
							<span class="author"><?php echo $author; ?></span>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</section>
	<?php
	}
}


?>