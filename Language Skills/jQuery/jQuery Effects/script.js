// 1. You Know This!
// You know a lot about jQuery events already, but it never hurts to review the basics.
$(document).ready(function() {
    $('div').hide();
});

// 2. More Practice with .animate()
// Let's get in a little more practice with the .animate() effect.
$(document).ready(function(){
    $('img').animate({top:'+=100px'},1000);
});

// 3. Introducing: jQuery UI
// All right! Time to blaze new jQuery trails with a new jQuery library: jQuery UI.
// jQuery UI includes a number of ultra-fancy animations you can use to make your
// websites do incredible things.
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
    });    
});

// 4. .bounce()
// Cool, right? But we can do much more than just blow things up. Another
// possible effect is 'bounce'.
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce',{times:3}, 500);
    });    
});

// 5. .slide()
// We can also make Krypton .slide() into view. Not surprisingly, we do this by
// calling the .effect() effect and passing in 'slide' as an input.
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('slide');
    });    
});

// 6. Special Effects
// The .effect() effect has all kinds of magical goodness in it, but it's not the
// most amazing thing jQuery UI can do. The library has a number of built-in effects
// that can make your website look sleek and professional with surprisingly little code.
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

// 7. Drag Racing
// jQuery UI includes a .draggable() function that can make any HTML element
// draggable—you can click on it and move it anywhere on the page!
$(document).ready(function() {
    $('#car').draggable();    
});

// 8. One Resize Fits All
// You didn't love our mega sweet car? We slaved over that for months! Back to
// regular <div>s for you!
$(document).ready(function() {
    $('div').resizable();
});

// 9. A Greater Selection
// Images and <div>s aren't the only elements we can target with jQuery UI—we can
// also enhance our ordered and unordered lists.
$(document).ready(function() {
    $('ol').selectable();
});

// 10. Let's Sort Things Out
// Lists are great, and jQuery UI makes them greater. While selecting is cool, it
// doesn't necessarily make our list as dynamic as we'd like—what if we want to
// reorder the elements in our list?
$(document).ready(function() {
    $('ol').sortable();
});

// 11. jQuery UI, is There Anything You Can't Do?
// All right! Time to use jQuery UI to create that awesome-looking accordion-style
// dropdown menu we saw in the last section. For this, we'll be using jQuery UI's
// built-in .accordion() function. (Handy, no?)

// See index.html

// 12. At the Ready
// Perfect! Now we'll add the necessary jQuery magic to script.js.
$(document).ready(function(){ 
    
});

// 13. Break Out Your .accordion()!
// Perfect! Now all we need to do is call .accordion() on our '#menu'.
$(document).ready(function(){ 
    $('#menu').accordion();
});

// 14. Victory!
// You did it! Doesn't that look great?
// With the jQuery projects you've mastered over the last several courses, you're
// now prepared to make a truly impressive interactive website. And when you
// make it, we'd love to see it!
$(document).ready(function(){ 
    $('#menu').accordion();
});
