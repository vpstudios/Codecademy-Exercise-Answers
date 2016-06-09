##1.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        echo(strlen("Laurent"));
      ?>
    </p>
  </body>
</html>
```
##2.)
No changes needed.

##3.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        // Write your function below!
        function displayname() {
            echo "not a";
        }
      ?>
    </p>
  </body>
</html>
```
##4.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        // Write your function below!
        function displayname() {
            echo "not a";
        }

        // Call function
        displayname();;
      ?>
      </p>
    </body>
</html>
```
##5.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <?php
        function returnname(){
            return "dsafd";
        }
    ?>
  </body>
</html>
```
##6.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        function greetings($name) {
            echo ("Greetings, " . $name . "!");
        }

        $name = "Todd";
        greetings($name);
      ?>
    </p>
  </body>
</html>
```
##7.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        function aboutme($name, $age){
            echo "Hello! My name is ", $name," and I am ", $age ," years old.";
        }

        aboutme("Laurent","45");
      ?>
    </p>
  </body>
</html>
```