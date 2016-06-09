// Functions, Part I: $(document).ready
$(document).ready(function() {
    $('div').hide();   
});


//  2. The Document Object Model

$(document).ready(function() {
    $('div').fadeOut(1000);
});

// 3. Changing Targets

$(document).ready(function() {
    $("#green").fadeOut(1000);
});
// 4. What is jQuery?

$(document).ready(function() {
    $("#notready").fadeOut(1000);
});

// 5. Linking Your HTML and JavaScript Files see index.html

// 6. Getting Started

$(document).ready(function(){
});

// 7. The Functional Approach

$(document).ready(function(){
});

// 8. Electr(on)ic Slide

$(document).ready(function(){
    $('div').slideDown('slow');
});

// 9. Mid-Lesson Breather

//No Code Necessary

// 10. At the Ready see index.html!

$(document).ready();

// 11. Get Yourself In...

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1.00);
    });
});

// 12. ...and Get Yourself Out!

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1.00);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast',0.5);
    });
});

// 13. Eureka!

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('slow',1.00);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('slow',0.5);
    });
});