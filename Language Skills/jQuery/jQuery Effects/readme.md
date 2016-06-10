##[1. You Know This!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
```script.js
$(document).ready(function() {
    $('div').hide();
});
```
##[2. More Practice with .animate()] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* Let's get in a little more practice with the .animate() effect.
```script.js
$(document).ready(function(){
    $('img').animate({top:'+=100px'},1000);
});
```
##[3. Introducing: jQuery UI] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* All right! Time to blaze new jQuery trails with a new jQuery library: jQuery UI.
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
    });    
});
```
##[4. .bounce()] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* Cool, right? But we can do much more than just blow things up. Another possible effect is 'bounce'.
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce',{times:3}, 500);
    });    
});
```
##[5. .slide()] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* We can also make Krypton .slide() into view. Not surprisingly, we do this by calling the .effect() effect and passing in 'slide' as an input.
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('slide');
    });    
});
```
##[6. Special Effects] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* The .effect() effect has all kinds of magical goodness in it, but it's not the most amazing thing jQuery UI can do. The library has a number of built-in effects that can make your website look sleek and professional with surprisingly little code.
```script.js
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});
```
##[7. Drag Racing] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* jQuery UI includes a .draggable() function that can make any HTML element draggable—you can click on it and move it anywhere on the page!
```script.js
$(document).ready(function() {
    $('#car').draggable();    
});
```
##[8. One Resize Fits All] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* You didn't love our mega sweet car? We slaved over that for months! Back to regular div's for you!
```script.js
$(document).ready(function() {
    $('div').resizable();
});
```
##[9. A Greater Selection] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* Images and div's aren't the only elements we can target with jQuery UI—we can also enhance our ordered and unordered lists.
```script.js
$(document).ready(function() {
    $('ol').selectable();
});
```
##[10. Let's Sort Things Out] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* Lists are great, and jQuery UI makes them greater. While selecting is cool, it doesn't necessarily make our list as dynamic as we'd like—what if we want to reorder the elements in our list?
```script.js
$(document).ready(function() {
    $('ol').sortable();
});
```
##[11. jQuery UI, is There Anything You Can't Do?] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/index.html)
* All right! Time to use jQuery UI to create that awesome-looking accordion-style dropdown menu we saw in the last section. For this, we'll be using jQuery UI's built-in .accordion() function. (Handy, no?)
```index.html
<!DOCTYPE html>
<html>
    <head>
		<title></title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
        <div id="menu">
            <h3>Section 1</h3>
            <div>
                <p>I'm the first section!</p>
            </div>
            <h3>Section 2</h3>
            <div>
                <p>I'm the second section!</p>
            </div>
            <h3>Section 3</h3>
            <div>
                <p>I'm the third section!</p>
            </div>
        </div>
	</body>
</html>
```
##[12. At the Ready] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* Perfect! Now we'll add the necessary jQuery magic to script.js.
```script.js
$(document).ready(function(){ 
    
});
```
##[13. Break Out Your .accordion()!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* Perfect! Now all we need to do is call .accordion() on our '#menu'.
```script.js
$(document).ready(function(){ 
    $('#menu').accordion();
});
```
##[14. Victory!] (https://github.com/vpstudios/Codecademy-Exercise-Answers/blob/master/Language%20Skills/jQuery/jQuery%20Effects/script.js)
* With the jQuery projects you've mastered over the last several courses, you're now prepared to make a truly impressive interactive website. And when you make it, we'd love to see it!
```script.js
$(document).ready(function(){ 
    $('#menu').accordion();
});
```