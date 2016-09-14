<!--------------------------------->
<!--- To understand recursion, ---->
<!-- see the bottom of this code -->
<!--------------------------------->

<?php
    require_once __dir__ . '/views/_header.php';
    require_once __dir__ . '/views/_menu.php';
    require_once __dir__ . '/views/_quotes.php';

    require_once __dir__ . '/views/home.php';
    require_once __dir__ . '/views/profile.php';
    showQuote();
    require_once __dir__ . '/views/bio.php';
    showQuote();
    require_once __dir__ . '/views/skills.php';
    showQuote();
    require_once __dir__ . '/views/portfolio.php';
    showQuote();
    require_once __dir__ . '/views/contact.php';


    require_once __dir__ . '/views/_footer.php';
?>

<!--------------------------------->
<!--- To understand recursion, ---->
<!--  see the top of this code   -->
<!--------------------------------->
