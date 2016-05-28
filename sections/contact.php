<section id="contact">
<div class="overlay"></div>
<div class="container">

	<h1>Contact</h1>
	<div class="row">
		<div class="col-xs-12 col-md-6 contact-chanels">

			<div class="contact-chanel">
				<a href="http://codepen.io/torian12321/" target="_blank">
					<i class="fa fa-codepen"></i>
					<span>Codepen</span>
				</a>
			</div>

			<div class="contact-chanel">
				<a href="https://ie.linkedin.com/in/aitorpalomares" target="_blank">
					<i class="fa fa-linkedin"></i>
					<span>LinkedIn</span>
				</a>
			</div>

			<div class="contact-chanel" id="contact_mail">
				<i class="fa fa-at"></i>
				<span>aitorpalomares@gmail.com</span>
			</div>

			<div class="contact-chanel">
				<a href="/<?php echo $path; ?>\include\files\CV_Aitor_Palomares.pdf" target="_blank">
					<i class="fa fa-file-pdf-o"></i>
					<span>Donwload CV</span>
				</a>
			</div>


		</div>
		<div class="col-xs-12 col-md-6 contact-form">
			<form id="contact_form">

				<div class="field">
					<input type="text" id="contact_name" class="to-validate">
					<label for="contact_name">Name</label>
				</div>
				<div class="field">
					<input type="text" id="contact_email" class="to-validate to-validate-email">
					<label for="contact_email">E-mail</label>
				</div>
				<div class="field">
					<textarea id="contact_content" rows="10" class="to-validate"></textarea>
					<label for="contact_content">Content</label>
				</div>

				<button>Send</button>

			</form>
			
			<div class="form-valid_message">
				Thanks for your message
			</div>
		</div>
	</div>

</div>
</section>