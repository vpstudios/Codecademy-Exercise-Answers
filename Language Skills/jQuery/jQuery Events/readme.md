##[1. Review of jQuery Events] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* You know a lot about jQuery events already, but it never hurts to review the basics.
```script.js
$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});
```
##[2. Cutting to the Chase] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Let's quickly review how to trigger an effect without a special event handler like .click()—we just want our effect to happen as soon as our document is .ready().
```script.js
$(document).ready(function() {
    $('div').fadeOut('fast');    
});
```
##[3. Adding an Event Handler] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Great! Now let's review how to make something happen with an event handler. In this case, we'll use .click().
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });    
});
```
##[4. Combining .click() and .hover()] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Well done! Let's add one more jQuery event to our "destruction of Krypton" simulation. Krypton didn't just vanish, it exploded! Let's make it turn red.
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });
    $('div').hover(function() {
        $(this).addClass('red');    
    });
});
```
##[5. The .dblclick() Event] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* We might want to cause a jQuery effect when a user double clicks on an element, rather than just single-clicking. We can do this with the .dblclick() event handler.
```script.js
$(document).ready(function() {
    $('div').dblclick(function() {
        $(this).fadeOut('fast');    
    });    
});
```
##[6. Hover] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* What if you wanted to create an effect when your mouse is on top of an object, then have that effect vanish when your mouse moved away? You might notice this effect in use on many site's navigation bars!
```script.js
$(document).ready(function(){

  $('div').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');    
    }
  );

});
```
##[7. Let's .focus()!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Another event we can make use of is .focus(). We say an element has focus when we click on it or tab over to it. 
```script.js
$(document).ready(function() {
    $('input').focus(function() {
        $('input').css('outline-color', '#FF0000');    
    });    
});
```
##[8. The .keydown() Event] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* You're not limited to mouse events in jQuery—you can trigger events using the keyboard, as well!
```script.js
$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left: '+=10px'}, 500);
    });    
});
```
##[9. Getting Ready] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Now that you've got a solid foundation in jQuery events and have covered important functions like .keydown() and .animate(), we'll put our newfound knowledge to work. In this section, we'll animate a sprite, or two-dimensional image on the screen.
```script.js
$(document).ready(function() {
        
});
```
##[10. Using .keydown()] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Good! Now we want to add a line of jQuery that will handle the keydown event.
```script.js
$(document).ready(function() {
    $(document).keydown(function(key) {
        
    });    
});
```
##[11. Filling Out the Cases] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Great work! Now it's time to animate our character based on the user's input from the keyboard. Every key press on a keyboard is translated into a number for the computer to use. Don't worry about memorizing them, for now we've given you the basics in script.js.
```script.js
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
```
##[12. You Did It!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Events/script.js)
* Great work! Your sprite now moves to the left, right, up, and down when you hit the a, s, w, and d keys.
```script.js
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
```