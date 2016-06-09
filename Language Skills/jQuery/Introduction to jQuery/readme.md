##See It to Believe It

So far, we've built web pages using HTML and styled them using CSS. Our pages look great, but they're not interactive —we can't drag elements around the page, open and close sliding panels, animate HTML elements, or add new elements to our HTML pages simply by clicking a button.


##The Document Object Model

To get the most out of jQuery, we should review how an HTML page is put together.

An HTML document is structured according to the Document Object Model, or DOM. It's by interacting with the DOM that jQuery is able to access and modify HTML.


##Changing Targets

Don't be intimidated by the amount of code you're seeing—we'll go through it piece by piece to make sure you understand it thoroughly.

Just like the CSS div refers to the HTML element <div>, the jQuery 'div' refers to the same HTML element <div>. You can think of the element name passed to jQuery as identical to the CSS element, only wrapped in quotes. 


##What is jQuery?

jQuery is a library, or set of helpful add-ons, to the JavaScript programming language. It may seem counterintuitive to learn how to use a library before learning the actual language, but there are a few good reasons for this.

* It takes a while to become comfortable with JavaScript, and it's trickier to manipulate HTML elements directly with JavaScript than with jQuery. In order to help you build awesome websites faster, we're starting you off with jQuery.
* jQuery provides a simple interface for the underlying JavaScript. It's easier for many users to learn jQuery first, then dive into the nitty-gritty JavaScript details later.
* jQuery is much better at giving you immediate, visual results than regular JavaScript. By the end of this lesson, you'll have built your own interactive button!


##Linking Your HTML and JavaScript Files

Great! Now we need to link our HTML page to our jQuery script so our jQuery magic will affect our HTML.


##Getting Started

Next, we'll need to start up our jQuery magic using the $(document).ready(); syntax you've seen.


##The Functional Approach

Perfect! Now we need to put something inside our ready() function.

Remember, when we say "function," you can think "action." Functions are the basic unit of doing work in jQuery.

For this reason, jQuery includes a function keyword. 


##Electr(on)ic Slide

Almost there! Now we just need to include an action in the body of our function. In this case, we'll make a header div for our HTML page slide into view.


##Mid-Lesson Breather

Great work! We've covered a lot so far. Let's take a second to review what we've learned:

* What jQuery is and how it can manipulate HTML elements
* jQuery syntax


##At the Ready!

All right! Let's get started.


##Get Yourself In...

Great! Next, let's include our function keyword and two new actions together, mouseenter() and fadeTo().

mouseenter() does what you might expect: it produces a change when your mouse enters a given HTML element.


##...and Get Yourself Out!

Excellent! Your button looks great now—it stands out when the user mouses over it.

However, you'll notice that when you take your cursor off the button, it stays dark. What we really want is for our button to become light again when our mouse leaves.


##Eureka!

Great job! You've gone from static HTML and CSS to dynamic jQuery goodness in no time flat.

Now you can see some of the power behind jQuery, and as you learn more, you'll be able to work all kinds of amazing interactive magic.






## Contributing


1. Fork it!
2. Edit
3. Commit.
4. Push.
5. Submit a pull request :D

Thank for participating!