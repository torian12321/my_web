<?php

    $quotes = [
        [
            'quote'  => 'People think of education as something they can finish',
            'author' => 'Isaac Asimov'
        ],
        [
        	'quote'  => 'Chance favors the prepared mind',
        	'author' => 'Louis Pasteur'
        ],
        [
            'quote'  => 'In ancient times cats were worshipped as gods. They have not forgotten this',
            'author' => 'Terry Pratchett'
        ],
        [
            'quote'  => 'The most exciting phrase to hear in science, the one that heralds the most discoveries, is not "Eureka!" (I found it!) but "That`s funny...',
            'author' => 'Isaac Asimov'
        ]
    ];

    $quote_index = 0;
    function showQuote(){
        global $quote_index, $quotes;
        ?>
        <section class="quote-wrap">
            <div class="quote">
                <?php echo $quotes[$quote_index]['quote']; ?>
                <span class="author">
                    <?php echo $quotes[$quote_index]['author']; ?>
                </span>
            </div>
        </section>
    <?php $quote_index++; }

?>
