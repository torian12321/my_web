<section id="skills">

    <div class="container">
    	<div class="row">

    		<div class="skills-list c_1">
    			<h1>Skills</h1>
    			<?php
    				$iconStyle = '';
    				html_skill($iconStyle, 5, 'HTML');
    				html_skill($iconStyle, 5, 'CSS');
    				html_skill($iconStyle, 3, 'Javascript');
    				html_skill($iconStyle, 4, 'Jquery');
    				html_skill($iconStyle, 4, 'Bootstrap');
    				html_skill($iconStyle, 2, 'Angular');
    				html_skill($iconStyle, 2, 'PHP');
    				html_skill($iconStyle, 5, 'LESS');
    				html_skill($iconStyle, 3, 'SASS');
    				html_skill($iconStyle, 4, 'WordPress');
    				html_skill($iconStyle, 3, 'Tortoise SVN');
    				html_skill($iconStyle, 3, 'MySQL');
    				html_skill($iconStyle, 4, 'AJAX');
    				html_skill($iconStyle, 4, 'JSON');
    			?>
    			<div class="clear"></div>
    		</div>


    		<div class="skills-list c_2">
    			<h1>Framewors</h1>
    			<?php
    				$iconStyle = 'circle';
    				html_skill($iconStyle, 3, 'Grails');
    				html_skill($iconStyle, 3, 'Netbeans');
    				html_skill($iconStyle, 3, 'Eclipse');
    				html_skill($iconStyle, 3, 'Tomcat');
    				html_skill($iconStyle, 1, 'Unity');
    			?>
    			<div class="clear"></div>
    		</div>


    		<div class="skills-list c_3">
    			<h1>Languages</h1>
    			<?php
    			$iconStyle = 'lang';
    			html_skill($iconStyle, 4, 'English');
    			html_skill($iconStyle, 5, 'Spanish');
    			html_skill($iconStyle, 5, 'Catalan');
    			?>
    			<div class="clear"></div>
    		</div>

      </div>
    </div>
    
</section>


<?php
  function html_skill($type, $val, $txt){ ?>
		<div class="xs-12 sm-6 skill">
			<?php echo $txt; ?>
			<div class="rating val_<?php echo $val . ' '. $type; ?>"></div>
		</div>
  <?php }
?>
