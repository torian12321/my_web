<section id="contact" class="parallax">
    <h1>Contact</h1>
    <div class="container">
    	<div class="row-spacing">


            <form
                class        = "xs-12 md-6 md-push-6"
                onsubmit     = "return validateForm()"
                autocomplete = "off"
                name         = "mailForm">

                <div class="form-input">
                    <input id ="name" name="name" type="text" required maxlength="50">
                    <label for="name">Name</label>
                </div>

                <div class="form-input">
                    <input id ="email" name="email" type="text" required maxlength="50">
                    <label for="email">Email</label>
                </div>

                <div class="form-input textArea">
                    <textarea id ="content" name="content" required maxlength="500"></textarea>
                    <label    for="content">Content</label>
                </div>

                <input type="submit" value="Send email" class="btn xs-12">

            </form>


            <div class="contact-chanels xs-12 md-6 md-pull-6">
                <a
                    target= "_blank"
                    href  = "<?php echo $GLOBALS['contact_linkedin']; ?>"
                    class = "xs-4 sm-6 md-12 c-contact linkedin">
                    Linkedin
                </a>
                <a
                    target= "_blank"
                    href  = "<?php echo $GLOBALS['incDir']; ?>files/CV_Aitor_Palomares.pdf"
                    class = "xs-4 sm-6 md-12 c-contact doc">
                    Document
                </a>
                <label
                    for   = "name"
                    class = "xs-4 sm-6 md-12 c-contact mail">
                    <?php echo $GLOBALS['contact_email']; ?>
                </label>
                <a
                    target= "_blank"
                    href  = "<?php echo $GLOBALS['contact_github']; ?>"
                    class = "xs-4 sm-6 md-12 c-contact git">
                    Git Hub
                </a>
                <a
                    target= "_blank"
                    href  = "<?php echo $GLOBALS['contact_codepen']; ?>"
                    class = "xs-4 sm-6 md-12 c-contact codepen">
                    Codepen
                </a>
            </div>



    	</div>
    </div>
</section>
