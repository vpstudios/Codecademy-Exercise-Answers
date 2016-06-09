// 1. Functions, Part I: $(document).ready
// Functions are the basic unit of action in jQuery.
$(document).ready(function() {
    $('div').hide();   
});

// 2. Functions, Part II: Functions Explained
// A function is made up of three parts: the function keyword, any inputs
// that function takes (they go between the ()s and are separated by commas
// if there are more than one), and whatever actions the function should
// perform (these go between the {}s).
$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});

// 3. Variables
//Variables are a place for us to store information for use at a later time.
//Variables can hold any type of information you work with, so just think of
//them as containers.
// Write your jQuery code on line 3!
$(document).ready(function() {
    var $target=$('li:last-child');
    $target.fadeOut('fast');
});

// 4. $p vs $('p')
// Write your jQuery code below!
var $div = $('div');

// 5. Using Functions to Select HTML Elements
// Give .ready() a function(){} as an input. Inside your function's {}s, call
// fadeIn('slow') on the (currently invisible) div to bring it into view. That's
// right, there's a fade in, as well!
$(document).ready(function() {
    $('div').fadeIn('slow');
});

// 6. Selecting by Class
// We don't have to limit ourselves to selecting HTML elements like <p> and <div>;
// essentially, we can put any CSS selector in quotes and pass it into $(). This
// means we can select classes, too!
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
});

// 7. Selecting by ID
// If we can select by class, it follows that we can also select by ID. We do
// this by putting the ID name (in quotes) inside $().
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});

// 8. Flexible Selections
// Anything you can target with CSS, you can modify with jQuery.
$(document).ready(function() {
    $('.pink, .red').fadeTo('slow',0);    
});

// 9. 'this' is important!
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});

// 10. Ready?
// All right! Time to use our new jQuery knowledge to add another interactive
// component to our website: a sliding panel that moves up and down when clicked.
$(document).ready(function() {
    $(this).click();    
});

// 11. Click and Pull
// Good! Now we want to trigger an event when the "Slide Up/Down" tab is
// clicked (that tab's class is .pull-me).
$(document).ready(function() {
    $('.pull-me').click();    
});

// 12. Toggling Our Panel
// Perfect! Just one more step: we need to tell .click() what to do. In this case,
// when our pull tab is clicked, we want our sliding panel (with the class .panel)
// to open or close.
$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');    
    });    
});

// 13. Well Done!
// Great work! See how easy this is? With a little jQuery magic, you can make
// your websites do all kinds of amazing things.
$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');    
    });    
});