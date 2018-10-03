# Canvas Stuff

### Step 1: Setting up the files

To start, create three files: ```index.html``` ```styles.css``` and ```canvas.js``` 

Open up your ```index.html``` file. 

Let's add the basic code: 

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

Now, let's link our css file to our html file using the ```<link>``` tag. 
Make sure you do this inside of the ```<head>```.

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
    </head>
    <body></body>
</html>
```

Since we'll be using javascript today, let's go ahead and link our javascript file to the html as well.
Do this inside of the ```<body>```.

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
    </head>
    <body>
        <script src="canvas.js"></script>
    </body>
</html>
```

### Adding and Viewing the Canvas

Inside of the ```<body>```, let's go ahead and add a canvas. We can do this by using the ```<canvas>``` tag.

(If you'd like, we can also add a ```<title>``` tag to our head to title this webpage.)

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <title>Playing with Canvas</title>
    </head>
    <body>
        <canvas></canvas>
        <script src="canvas.js"></script>
    </body>
</html>
```

To see our newly created canvas, let's go to our ```styles.css``` file to style it.

Give your canvas a background color by using the following code inside of your ```styles.css``` file:

```css
canvas {
    background-color: #A3A3A3;
}
```
Make sure to click "Run" and "Preview" --> "Live Preview" to view your recent changes.

If you used the same color as me, you should now see a gray rectangle on your screen. This represents the canvas.

Congratulations! You have successfully created a canvas.

### Resizing the Canvas

Though you can resize the canvas using CSS, we will not be doing it this way.

Why? It's because we want our canvas to take up the space of the entire window, which is difficult using CSS.

Instead, we'll be using javascript to do this. Head over to your ```canvas.js``` file.

Inside of your ```canvas.js``` file, use the following code:

```javascript
var canvas=document.querySelector("canvas");
```
All this piece of code says is that I want to create a variable in my javascript file called canvas, and I want it to be equal to my html canvas.

Now, we can edit our new variable called "canvas" inside of the javascript file.

Edit the height and width of your canvas like so:

```javascript
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
```

These pieces of code are self explanatory-- we are setting the height and width of the canvas equal to the height and width of the window.

Your entire javascript file should look like this: 

```javascript
var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
```

Run your code and preview it. 

You may notice that the canvas does not fill up the entire screen. This is because the body of our html automatically has a margin.

To get our canvas to be the way we want it, we must get rid of the margin.
We can do this in our ```styles.css``` file.

Go back to your ```styles.css``` file and set the margin of the body to 0 pixels:

```css
body {
    margin: 0px;
}
```
Run and preview your code once again.

You should now have a canvas that takes up the entire window!

### Drawing 2D Objects on the Canvas

Here's where things start to get more fun. Open up your ```canvas.js``` file.

Add a variable called "c" to your javascript file like so:

```javascript
var c=canvas.getContext("2d");
```

Think of this variable as a magic paintbrush that will allow you to draw any 2D shape you'd like on the canvas.

<i>Note: Make sure the "d" in "2d" is lowercase, or your code will not work. </i>





<b>Creating a Rectangle:</b>

```javascript
c.fillStyle="#FFFFFF";
c.fillRect(x,y,width,height);
```
Replace "#FFFFFF" with any hex color code you like. This will be the color of your rectangle.

Replace "x," "y," "width," and "height" with the numbers you'd like. "x" and "y" refer to the position of the rectangle on the screen.

For example, 
```javascript
c.fillStyle="#E85E4A";
c.fillRect(100,100,100,100);
```
would create a dull red rectangle at position (100,100) with a width of 100 and a height of 100.

Play around with this for a little bit.

<b>Creating a Line:</b>

```javascript
c.beginPath();
c.moveTo(startX,startY);
c.lineTo(endX,endY);
c.strokeStyle="rgba(redVal,greenVal,blueVal,opacity)";
c.stroke();
```
Replace "startX" and "startY" with the coordinates that you'd like your line to start at. 
Replace "endX" and "endY" with the coordinates you'd like your line to end at.

As you can see here, you can use rgb values to change the color for a line/rectangle rather than a hex value. This allows us to also change the opacity of our object!

For example:
```javascript
c.beginPath();
c.moveTo(100,100);
c.lineTo(300,300);
c.strokeStyle="rgba(0,0,255,0.2)";
c.stroke();
```
would create a blue line with 20% opacity that starts at coordinates (100,100), ends at coordinates (300,300).

To create multiple lines that are connected to one another, use multiple "lineTo" statements.

For example:
```javascript
c.beginPath();
c.moveTo(100,100);
c.lineTo(300,300);
c.lineTo(100,300);
c.lineTo(100,100);
c.strokeStyle="rgba(0,0,255,0.2)";
c.stroke();
```

Play around with lines until you're comfortable with using them.

<b>Creating a Circle:</b>

```javascript
c.beginPath();
c.arc(x, y, radius, 0, Math.PI*2, false);
c.strokeStyle="#FFFFFF";
c.stroke();
```
Replace "x" and "y" with the coordinates you'd like your circle to be at. Replace "radius" with how large you'd like the radius of your circle to be.

Replace "#FFFFFF" with the color you'd like the outline of the circle to be.

For example:
```javascript
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI*2, false);
c.strokeStyle="#FFCCFF";
c.stroke();
```
would create a light pink circle of radius 30px at coordinates (300,300).

Have some fun creating rectangles, lines, and circles before moving on.

### Learning to Animate

Make sure you're inside of your ```canvas.js``` file.

First, we will be adding our function which will animate the object.

Add the following code to the end of your canvas.js file:

```javascript
function animate() {
    requestAnimationFrame(animate);
}
```
In order for our animate function to actually work, we need to call it some place in the code.

At the very end of your ```canvas.js``` file, add in:

```javascript
animate();
```

As of right now, our animate function still doesn't do much. We need some code to it!

Let's add a circle at the coordinates (200,200) of radius 30 to our animate function:

```javascript
function animate() {
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(200, 200, 30, 0, Math.PI*2, false);
    c.stroke();
}

animate();
```

If you run and live preview your code, you'll probably notice that our circle isn't moving.

In order to get it moving, we'll need either the x or y coordinate to change. How we do this? We use variables.

Let's create a variable called xPosition and set it equal to 200:

```javascript
var xPosition=200;

function animate() {
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(200, 200, 30, 0, Math.PI*2, false);
    c.stroke();
}

animate();
```
Now, we need to actually use our variable. 
Change your code to add 1 to the xPosition every time the animate function is called, and use the variable inside of the code:

```javascript
var xPosition=200;

function animate() {
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(xPosition, 200, 30, 0, Math.PI*2, false);
    c.stroke();
    
    xPosition+=1;
}

animate();
```

Run and live preview the code. You should see a bunch of circles drawn on top of each other which form a cylindrical shape.

Why is this happening? It's because we need to clear the canvas before every frame. Let's do this now.

```javascript
var xPosition=200;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(xPosition, 200, 30, 0, Math.PI*2, false);
    c.stroke();
    
    xPosition+=1;
}

animate();
```

If you run and live preview the code again, the circle should finally move like it should. 

Currently, our circle flies right off the page. That isn't much fun. Let's make it bounce to and fro each side of the screen!

For this, we'll need to use if-statements, or conditional statements. The concept is that if some condition is fulfilled, it will run the lines of code you specify.

First, let's go ahead and add another variable called xVelocity and set it to 1:

```javascript
var xPosition=200;
var xVelocity=1;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(xPosition, 200, 30, 0, Math.PI*2, false);
    c.stroke();
    
    xPosition+=1;
}

animate();
```

Our xVelocity will specify how far the circle should move on the canvas. Let's actually use it inside of our function:

```javascript
var xPosition=200;
var xVelocity=1;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(xPosition, 200, 30, 0, Math.PI*2, false);
    c.stroke();
    
    xPosition+=xVelocity;
}

animate();
```

So if the circle is past the right side of the screen, we want to change the direction the circle is heading towards.

This means negating the xVelocity. Let's try it out now:

```javascript
var xPosition=200;
var xVelocity=1;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(xPosition, 200, 30, 0, Math.PI*2, false);
    c.stroke();
    
    if(xPosition>window.innerWidth) {
        xVelocity=-xVelocity;
    }
    xPosition+=xVelocity;
}

animate();
```

If you hate waiting, you can go ahead and change your xVelocity to a higher number like so:

```javascript
var xVelocity=4;
```

For my purposes, I'll be keeping the xVelocity at 1. You might notice that the circle still doesn't bounce off of the left side of our screen.

Let's go ahead and add another if-statement to change that.

```javascript
var xPosition=200;
var xVelocity=1;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(xPosition, 200, 30, 0, Math.PI*2, false);
    c.stroke();
    
    if(xPosition>window.innerWidth) {
        xVelocity=-xVelocity;
    }
    if(xPosition<0) {
        xVelocity=-xVelocity;
    }
    xPosition+=xVelocity;
}

animate();
```

Try running and live previewing your code. The circle should be bouncing back and forth now.

However, our circle isn't quite bouncing back as we want it to- half of the circle still goes off the screen.

Let's create a variable called radius, set it equal to 30, and use it in our code.

```javascript
var xPosition=200;
var xVelocity=1;
var radius=30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.beginPath();
    c.arc(xPosition, 200, radius, 0, Math.PI*2, false);
    c.stroke();
    
    if(xPosition+radius>window.innerWidth) {
        xVelocity=-xVelocity;
    }
    if(xPosition-radius<0) {
        xVelocity=-xVelocity;
    }
    xPosition+=xVelocity;
}

animate();
```

Everything should be working properly now.

Go ahead and try to animate other aspects of the circle, such as the yPosition or the radius!