Functions
##1.)
```php
<html>
  <p>
    <?php
        // Get the length of your own name
        // and print it to the screen!
        echo strlen("Laurent");
    ?>
  </p>
</html>
```
##2.)
```php
<html>
  <p>
    <?php
        // Get a partial string from within your own name
        // and print it to the screen!
        $myname = "Laurent";

        $partial = substr($myname, 1, 3);

        print $partial;
    ?>
  </p>
  <p>
    <?php
        // Make your name upper case and print it to the screen:
        $uppercase = strtoupper($myname);
        print $uppercase;
    ?>
  </p>
  <p>
    <?php
        // Make your name lower case and print it to the screen:
        $lowercase = strtolower($uppercase);
        print $lowercase;
    ?>
  </p>
</html>
```
##3.)
```php
<html>
  <p>
    <?php
        // Print out the position of a letter that is in
        // your own name
        $charpos = strpos("Laurent", "a");
        echo $charpos;
    
    ?>
  </p>
  <p>
    <?php
        // Check for a false value of a letter that is not
        // in your own name and print out an error message
        if (strpos("david","h") === false) {
          print "Sorry, no 'h' in 'david'";
        }
    ?>
  </p>
</html>
```
##4.)
```php
<html>
  <p>
    <?php
        // Try rounding a floating point number to an integer
        // and print it to the screen
        $round = round(M_PI);
        
        print $round;
    ?>
  </p>
  <p>
    <?php
        // Try rounding a floating point number to 3 decimal places
        // and print it to the screen
        $round_decimal = round(M_PI, 3);
        
        echo $round_decimal;
    ?>
  </p>
</html>
```
##5.)
```php
<html>
  <p>
    <?php
        // Use rand() to print a random number to the screen
        print rand();
    ?>
  </p>
  <p>
    <?php
        // Use your knowledge of strlen(), substr(), and rand() to
        // print a random character from your name to the screen.
        $name = "name";
        
        echo substr($name, rand(0,strlen($name)), 1);
    ?>
  </p>
</html>
```
##6.)
```php
<html>
  <p>
    <?php
        // Create an array and push 5 elements on to it, then 
        // print the number of elements in your array to the screen
        $fav_bands = array();
        array_push($fav_bands, "Colosseum");
        array_push($fav_bands, "Barbara Thompson");
        array_push($fav_bands, "Joe Satriani");
        array_push($fav_bands, "Return to forever");
        array_push($fav_bands, "United Jazz + Rock Ensemble");
        array_push($fav_bands, "Chick Corea Electric Band");
        array_push($fav_bands, "a7x");
        array_push($fav_bands, "Dream Theater");
        print count($fav_bands);
    ?>
  </p>
</html>
```
##7.)
```php
<html>
  <p>
    <?php
        // Create an array with several elements in it,
        // then sort it and print the joined elements to the screen
        $the_array = array(4,9,7,3,1,6);
        
        sort($the_array);
        
        print join(", ", $the_array);
    ?>
  </p>
  <p>
    <?php
        // Reverse sort your array and print the joined elements to the screen
  
        rsort($the_array);
        
        print join(", ", $the_array);
    ?>
  </p>
</html>
```
##8.)
```php
<html>
  <p>
    <?php
        // Create an array and push on the names
        // of your closest family and friends
        $theCircle = array("me");
        array_push($theCircle, "Lo");
        array_push($theCircle, "Lodi");
        array_push($theCircle, "Doriane");
        array_push($theCircle, "Ma");
        array_push($theCircle, "Pa");
        array_push($theCircle, "Cedo");
        array_push($theCircle, "Deepa");

        // Sort the list
        $theCircleS = sort($theCircle);

        // Randomly select a winner!
        $theCircleR = count(rand(0,$theCircleS)-1);

        // Print the winner's name in ALL CAPS
        print strtoupper($theCircle[$theCircleR]);
    ?>
  </p>
</html>
```