##[1. Creating HTML Elements] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Dynamically adding elements to our HTML page is a powerful tool—it lets us modify not only the formatting, but the actual structure of our websites in response to a user's actions.
```script.js
$(document).ready(function() {
    $h1 = $("<h1>Hello</h1>");    
});
```
##[2. Inserting Elements] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* We can insert our newly created elements using a few jQuery actions.
```script.js
$(document).ready(function() {
    $('body').append("<p>I'm a paragraph</p>");    
});
```
##[3. Before and After] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* We can specify where in the DOM we insert an element with the .before() and .after() functions. 
```script.js
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");    
});
```
##[4. Moving Elements Around] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Moving elements around in the DOM is a snap—all we need to do is use the jQuery functions we just learned on existing elements instead of creating new ones.
```script.js
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");
    $("div #two").after($("p"));
});
```
##[5. Removing Elements] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Adding elements to our HTML documents is great, but without the ability to remove them, our pages can quickly become cluttered. Thankfully, we have two jQuery functions, .empty() and .remove(), that help us delete content from our pages.
```script.js
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");
    $("div #two").after($("p"));
    $("p").remove();
});
```
##[6. Adding and Removing Classes] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* We don't have to limit ourselves to adding or removing entire elements, though—we can fine-tune our jQuery superpowers to alter classes, CSS, and even the contents of our HTML elements.
```script.js
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });
});
```
##[7. Toggling Classes] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* What if we want to toggle a class back and forth, though? That is, what if we want jQuery to automatically check to see whether our #text is .highlighted, so that when we click on it, it adds the class if it isn't there and removes it if it is?
```script.js
$(document).ready(function() {
    $('#text').click(function() {
        $(this).toggleClass('highlighted');
    });
});
```
##[8. Changing Your Style] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* What if we want to fine-tune individual CSS property values, though? Remember style="height:300px; width:300px;"? jQuery makes it a snap!
```script.js
$(document).ready(function() {
    $('div').width("200px");
    $('div').height("200px");
    $('div').css("border-radius","10px");
});
```
##[9. Modifying Content] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Finally, we can update the contents of our HTML elements—that is, the bit between the opening and closing tags—using the .html() and .val() functions.
```script.js
$(document).ready(function() {
    $('p').html("jQuery magic in action!");    
});
```
##[10. Set Up] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* All right! It's time to apply our newfound knowledge. In this section, we'll build an interactive "to do" list that will add items to a checklist and remove them as they're checked off.
```script.js
$(document).ready(function() {
    
});
```
##[11. Click Da Button! Do it Naoughw!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* You'll notice we've set up an HTML form for grabbing the user's input. We'll need to store the user's input in a variable, which will allow us to append that input to the body of the HTML document later on.
```script.js
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();    
    });
});
```
##[12. Append to Body] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Perfect! Now we want to add our HTML element to the document. We can do this using our handy .append() function.
```script.js
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
```
##[13. Remove What's Been Clicked] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Great job! Finally, we want to be able to check items off our list.
```script.js
$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
```
##[14. You Did It!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/Modifying%20HTML%20Elements/script.js)
* Great work! You now know how to dynamically update the content of your HTML page, including adding and removing elements. Now that you can handle manipulating the DOM on the fly, the hard part is over. In the next two lessons, we'll cover a wider range of jQuery event handlers and effects, which will allow you to apply your core programming skills to a variety of challenges.

```script.js
$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
```