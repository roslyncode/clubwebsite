# Navigation Bar Across Top of Screen


### Step 1: Setting up the files

To start, create four files: ```index.html``` ```page1.html``` ```page2.html``` ```style.css```

Next, open the ```index.html``` file. First, we will declare a doctype. We’re using html as our coding language, so we will type ```<!DOCTYPE HTML>```. 

Now, we will create the shell of the webpage. Start with the ```<html>``` tag. Inside the html tag, put a ```<head>``` tag and a ```<body>``` tag. Your file should look like this: 

```html
<!DOCTYPE HTML>
<html>
	<head></head>
	<body></body>
</html>
```

### Step 2: Creating the navbar

In the body, create a ```<nav>``` tag. Inside the tag, create an ```<a>``` tag. Inside the tag, type ```Home```. Create two more ```<a>``` tags, for Page 1 and Page 2. 

Now add some text to the page in a div. After the ```</nav>``` tag, but still in the body add a ```<div>``` tag. Inside the tag, add whatever text you want. Your file should now look something similar to this:

```html
<!DOCTYPE HTML>
<html>
    <head></head>
    <body>
        <nav>
            <a>Home</a>
            <a>Page 1</a>
            <a>Page 2</a>
        </nav>
        <div>
            Home is where the wifi is.
        </div>
    </body>
</html>
```

### Step 3: Linking to the other pages

In order to link the other pages, we will have to go inside the ```<a>``` tag. Right after the a of the first tag, press the space bar, then type ```href=”index.html”```. Do the same for ```page1.html``` and ```page2.html``` in their respective tags. The three should now look like this:

```html
<a href="index.html">Home</a>
<a href="page1.html">Page 1</a>
<a href="page2.html">Page 2</a>
```

Now open the other two html files and do a little copy paste of the ```index.html``` document into them. Then, change the text in the div so that each page displays unique text. Hit run. Go to preview > Live Running Preview. The buttons should now work

### Step 4: Styling the navbar

Although your navbar is working, it’s pretty ugly. It’s time for some css styling. In the head of the index.html file (we will work on the index, then do another copy paste to the pages at the end), we’re going to link the css file. Type <link href="style.css" rel="stylesheet"> in the head. 
Next, open the css file.

First, we’re going to get rid of the automatic page margin. Type ```body {```, then click enter and in the parentheses type ```padding:0px```; and on the next line, ```margin: 0px;```. 

Then, we're going to set the font with ```font-family: Verdana;```.

Third, we will set a background color with ```background-color:#FFF```. Type ```html {``` and press enter. Then, add the code to set the color inside.

Fourth, we’re going to style the navbar. Type ```nav {``` and inside, type ```background-color: #3D3C41;``` ```width:100%;``` and ```padding: 10px;``` The background color uses hexadecimal (base-16) values (40 red, 90 green, C0 blue) to represent hues, the width at 100% makes the navbar as wide as the page is wide, and the padding gives the elements inside 10 pixels of space from them to the edge of the page.

The current state of the ```style.css``` should be:

```css
html {
    background-color: #FFF;
}
body {
    padding:0px;
    margin: 0px;
    font-family: Verdana;
}
nav {
    background-color: #3D3C41;
    width:100%;
    padding: 10px;
}
```

Now, we will switch back to the html file.

The ```<a>``` tags need a name to be called by in the css file to add styling to them, without messing with other a tags that could exist on a page (```<a>``` tags are often used for hyperlinks). We will be using classes. A class is very similar to a Facebook group. Each a tag that wants to join will need to apply for membership, so to speak. Let's code this.

Inside the ```<a>``` tag, next to where we previously put the ```href```, we will type ```class=”navButton”```. This allows all of our a tags to join the ```.navButton``` class. 

The updated ```<a>``` tags should look like this:

```html
<a class="navbutton" href="index.html">Home</a>
<a class="navbutton" href="page1.html">Page 1</a>
<a class="navbutton" href="page2.html">Page 2</a>
```

In the css, we will now style the entire ```.navButton class```. 

Type ```.navButton {```, then click enter and in the parentheses type ```font-size: 30px;``` ```margin-left:15px;``` ```margin-right:15px;``` ```color:#7395AE;``` ```text-decoration: none;```. The removal of text decoration gets rid of the underline, as well as other automatic styling of ```<a>``` tags. The margins will set space between the buttons.

The update to the ```style.css``` should look like this:

```css
.navbutton {
    font-size: 23px;
    margin-left:15px;
    margin-right:15px;
    color:#7395AE;
    text-decoration: none;
}
```

To style the text, create a ```.pages {``` and place ```margin-top: 200px;```, ```text-align: center;```, ```font-size: 35px;```, and ```color:#557A95;``` inside.

### Step 5: Getting fancy
Now for a little advanced coding (you can pat yourself on the back when you finish).

To start place ```id="homeButton"``` in the html next to the class for the home button ONLY. Make sure to do this on all 3 html documents.

Now, switch back to the css. It's time for some fun. 

Let's give the home button some special styling because we like it so much. Type ```#homeButton {``` then click enter. (Notice how ids use the '#' and not the '.'). 
Inside, we will make a border. To start, we use ```border-style:solid;```. Then, we color it with ```border-color: #557A95;``` and give it rounded corners with ```border-radius: 13;```. 

In order to make the border fit right, we will set the space between the border and the text with ```padding:1px;```, ```padding-left: 7px;```, and ```padding-right: 7px;```.

The update should look something like this:

```css
#homeButton{
    border-color: #557A95;
    border-style:solid;
    border-radius: 13;
    padding:1px;
    padding-left: 7px;
    padding-right: 7px;
}
```

To be even more fancy, let's add some hover effects.

In order to use a hover efect, you must know what a ```psuedo-class``` is. A psuedo class is used to define a special state of an element. For example, using ```a:hover {``` will apply the styling to ```a``` when the mouse is hovering over it.

Let's try it.

Type ```a:hover {``` then click enter. Inside, we set the specific styles we want when the mose is hovering over it. Let's make a bottom border on hover. Inside, type ```border-bottom-style: solid;```, ```border-bottom-color: #557A95;```, and ```border-width: 5px;```.
Then, use ```padding-bottom: 5px;``` to position the bottom border to the bottom of the navbar.

This update should look like:
```css
a:hover{
    border-bottom-style: solid;
    border-bottom-color: #557A95;
    border-width: 5px;
    padding-bottom: 5px;
}
```

There may arise a problem using ```a:hover``` if there are certain `a` tags you do not want to be styled. In order to do this, you can use ```a:not(.myClass):hover``` instead of ```a:hover``` to exclude a certain class of elements from the styling. We will use this to exclue the home button, with ```a:not(#homeButton):hover {```

### Step 6: Congratulations!

You’ve made it to the end. Try to think of ways you can style this further. If you don’t know how to do something, don’t hesitate to ask any one of us for help. 
