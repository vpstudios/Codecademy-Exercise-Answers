// 1. Review of jQuery Events
// You know a lot about jQuery events already, but it never hurts to review the basics.
$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});

// 2. Cutting to the Chase
// Let's quickly review how to trigger an effect without a special event handler
// like .click()—we just want our effect to happen as soon as our document is .ready().
$(document).ready(function() {
    $('div').fadeOut('fast');    
});

// 3. Adding an Event Handler
// Great! Now let's review how to make something happen with an event handler.
// In this case, we'll use .click().
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });    
});
// 4. Combining .click() and .hover()
// Well done! Let's add one more jQuery event to our "destruction of Krypton"
// simulation. Krypton didn't just vanish, it exploded! Let's make it turn red.
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });
    $('div').hover(function() {
        $(this).addClass('red');    
    });
});

// 5. The .dblclick() Event
// We might want to cause a jQuery effect when a user double clicks on an element,
// rather than just single-clicking. We can do this with the .dblclick() event handler.
$(document).ready(function() {
    $('div').dblclick(function() {
        $(this).fadeOut('fast');    
    });    
});

// 6. Hover
// What if you wanted to create an effect when your mouse is on top of an object,
// then have that effect vanish when your mouse moved away? You might notice this
// effect in use on many site's navigation bars!
$(document).ready(function(){

  $('div').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');    
    }
  );

});

// 7. Let's .focus()!
// Another event we can make use of is .focus(). We say an element has focus when
// we click on it or tab over to it. 
$(document).ready(function() {
    $('input').focus(function() {
        $('input').css('outline-color', '#FF0000');    
    });    
});

// 8. The .keydown() Event
// You're not limited to mouse events in jQuery—you can trigger events using the
// keyboard, as well!
$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left: '+=10px'}, 500);
    });    
});

// 9. Getting Ready
// Now that you've got a solid foundation in jQuery events and have covered important
// functions like .keydown() and .animate(), we'll put our newfound knowledge to work.
// In this section, we'll animate a sprite, or two-dimensional image on the screen.
$(document).ready(function() {
        
});

// 10. Using .keydown()
// Good! Now we want to add a line of jQuery that will handle the keydown event.
$(document).ready(function() {
    $(document).keydown(function(key) {
        
    });    
});

// 11. Filling Out the Cases
// Every key press on a keyboard is translated into a number for the computer to use.
// Don't worry about memorizing them, for now we've given you the basics in script.js
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
              $('img').animate({left: "-=10px"}, 'fast');
              break;
            // Up Arrow Pressed
            case 38:
              $('img').animate({top: "-=10px"}, 'fast');
              break;
            // Right Arrow Pressed
            case 39:
              $('img').animate({left: "+=10px"}, 'fast');
              break;
            // Down Arrow Pressed
            case 40:
              $('img').animate({top: "+=10px"}, 'fast');
              break;
        }
    });
});

// 12. You Did It!
// Great work! Your sprite now moves to the left, right, up, and down when you hit
// the a, s, w, and d keys.
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
              $('img').animate({left: "-=10px"}, 'fast');
              break;
            // Up Arrow Pressed
            case 38:
              $('img').animate({top: "-=10px"}, 'fast');
              break;
            // Right Arrow Pressed
            case 39:
              $('img').animate({left: "+=10px"}, 'fast');
              break;
            // Down Arrow Pressed
            case 40:
              $('img').animate({top: "+=10px"}, 'fast');
              break;
        }
    });
});
