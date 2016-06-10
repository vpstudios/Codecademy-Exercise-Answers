// 1. Creating HTML Elements
// Dynamically adding elements to our HTML page is a powerful tool—it lets us
// modify not only the formatting, but the actual structure of our websites in
// response to a user's actions.
$(document).ready(function() {
    $h1 = $("<h1>Hello</h1>");    
});

// 2. Inserting Elements
// We can insert our newly created elements using a few jQuery actions.
$(document).ready(function() {
    $('body').append("<p>I'm a paragraph</p>");    
});

// 3. Before and After
// We can specify where in the DOM we insert an element with the .before()
// and .after() functions. 
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");    
});

// 4. Moving Elements Around
// Moving elements around in the DOM is a snap—all we need to do is use the
// jQuery functions we just learned on existing elements instead of creating new ones.
var $div = $('div');

// 5. Removing Elements
// Adding elements to our HTML documents is great, but without the ability to
// remove them, our pages can quickly become cluttered. Thankfully, we have two
// jQuery functions, .empty() and .remove(), that help us delete content from our pages.
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");
    $("div #two").after($("p"));
    $("p").remove();
});

// 6. Adding and Removing Classes
// We don't have to limit ourselves to adding or removing entire elements, though—we
// can fine-tune our jQuery superpowers to alter classes, CSS, and even the contents
// of our HTML elements.
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });
});

// 7. Toggling Classes
// What if we want to toggle a class back and forth, though? That is, what if we want
// jQuery to automatically check to see whether our #text is .highlighted, so that
// when we click on it, it adds the class if it isn't there and removes it if it is?
$(document).ready(function() {
    $('#text').click(function() {
        $(this).toggleClass('highlighted');
    });
});

// 8. Changing Your Style
// What if we want to fine-tune individual CSS property values, though? Remember
// style="height:300px; width:300px;"? jQuery makes it a snap!
$(document).ready(function() {
    $('div').width("200px");
    $('div').height("200px");
    $('div').css("border-radius","10px");
});

// 9. Modifying Content
// Finally, we can update the contents of our HTML elements—that is, the bit between
// the opening and closing tags—using the .html() and .val() functions.
$(document).ready(function() {
    $('p').html("jQuery magic in action!");    
});

// 10. Set Up
// All right! It's time to apply our newfound knowledge. In this section, we'll build
// an interactive "to do" list that will add items to a checklist and remove them
// as they're checked off.
$(document).ready(function() {
    
});

// 11. Click Da Button! Do it Naoughw!
// You'll notice we've set up an HTML form for grabbing the user's input. We'll need
// to store the user's input in a variable, which will allow us to append that input
// to the body of the HTML document later on.
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();    
    });
});

// 12. Append to Body
// Perfect! Now we want to add our HTML element to the document. We can do this using
// our handy .append() function.
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});

// 13. Remove What's Been Clicked
// Great job! Finally, we want to be able to check items off our list.
$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});

// 14. You Did It!
// Great work! You now know how to dynamically update the content of your HTML
// page, including adding and removing elements. Now that you can handle manipulating
// the DOM on the fly, the hard part is over. In the next two lessons, we'll cover a
// wider range of jQuery event handlers and effects, which will allow you to apply
// your core programming skills to a variety of challenges.
$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});