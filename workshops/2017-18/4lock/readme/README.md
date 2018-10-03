# Puzzle Me

This workshop will introduce a new coding language -- `JavaScript` -- in order to carry out custom functions. `JavaScript` is a type of scripting language that allows us to build custom commans and call them. We will use this functionality to create an online puzzle that ustilizes `HTML` structures and `CSS` styles.

### Every Puzzle Needs a Place to Start

An online puzzle game must have a landing page - a place to start the game. We will be using `HTML` checkboxes in order to create an unlock page.

To start, we will create three pages: an `index.html`, a `styles.css`, and a `main.js`.

Open the `HTML` file. In there, we will put in the usual set-up: `<html>`, `<head>`, and `<body>` tags, like this:

```html
<html>
    <head></head>
    <body></body>
</html>
```
Next, we will link both the `CSS` file (as usual) and the `JavaScript` file. The `CSS` gets linked as usual: `<link href="styles.css" rel="stylesheet" type="text/css"/>`. The `JavaScript` file gets a new tag: `<script>`. This will be placed inside the `<html>` tag. Inside the `<script>` (literally inside it before the right angle bracket), type `type="text/javascript" src="main.js"`. This will allow the file to be recognized as `JavaScript` and tells the name of the file so that it may be accessed. Your code should now look like this:

```html
<html>
    <head>
        <link href="styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body></body>
    <script type="text/javascript" src="main.js"></script>
</html>
```
The premise of this page is to unlock the next one and start the game, so add a `<p>` tag that says something alsong thsoe lines. I've put `<p>Unlock this page</p>`.

Now, we will make a sliding checkbox. An `HTML` checkbox has two states: `checked` or `unchecked`. A sliding checkbox is the same thing, but spiced up with `CSS`.

First, make a checkbox with the following code:

```html
<label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
</label>
```

The use of `label` tags will make the `CSS` more manageable and possible. 

The current `index.html` file should look somthing akin to this:

```html
<html>
    <head>
        <link href="styles.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <p id="text">Unlock this page</p>
        <label class="switch">
             <input type="checkbox">
             <span class="slider"></span>
        </label>
    </body>
    <script type="text/javascript" src="main.js"></script>
</html>
```

We will now switch to the `CSS`.

### Styling the Checkbox Into a Fancy Slider

We will now use `CSS` to make the Sliding checkbox fancy.

#### Basic CSS

First, let's apply some basic styling to the page as whole in the `styles.css` file:

```css
html{
    background-color: #EEE;
}
p{
  text-align: center;
  margin-top:15%;
  font-size:30px;
  font-family:Verdana;
  color:#333;
}
```
#### Styling the Label

Next, we will syle the `.switch` class (the `<label>` tag as a whole). Type `.switch {` and inside use `position: absolute;`, `display: inline-block;`, and `margin: auto;` to position the checkbox. You will also have to use `top: 0;`, `left: 0;`, `right: 0;`, and `bottom:0`.

Then, set `width: 75px;` and `height: 45px;`. Your code for this part should look like this:


<-- finish here -->


```css
.switch {
  position: absolute;
  display: inline-block;
  width: 75px;
  height: 40px;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

After that, we will style the `.switch input` to not show up, as shown:

```css
.switch input {
    display:none;
}
```

The `.switch input` is basically saying all `<input>` tags that exists inside of any `HTML` tag that is a member of the class `.switch`.

#### Styling the Part That Slides

Now, we will be styling the part that will actually be moving: the `<span>` tag.

First, type `.slider {`. Inside, put `position: absolute;`, `top: 0;`, `left: 0;`, `right: 0;`, and `bottom:0` to position the slider properly.

Then, we'll set the backgorund color `background-color: #ccc;` and set the cursor when hovering over it `cursor: pointer;`. Your code should look like this for this section:

```css
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
}
```

#### Move It!

Now we will allow the part that slides to actually move.

We will use the pseudo class `.slider:after` to denote the state the checkbox is in after it is checked (clicked on). Type `.slider:after {` and format the positioning and size of this part with: `position: absolute;`, `height: 30px;`, `width: 30px;`, `left: 5px;`, and `bottom: 5px;`.

In addition, we will use `content:"";` to allow the object to be shown without typing anything and `background-color: white;` to set the color.

Your code will look like this:

```css
.slider:after {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 5px;
  bottom: 5px;
  background-color: white;
  transition: .4s;
}
```
### Javascript

In the main.js, we will create a variable, which is a piece of memory that we can store information in.

First, type `var slider=` to create the variable. Then, assign it to the slider0 with `document.getElementById("slider0")`. Repeat this for slider 1 and 2. YOu should get something like this:

```js
var slider0=document.getElementById("slider0");
var slider1=document.getElementById("slider1");
var slider2=document.getElementById("slider2");
```

Next, we will build functions, which essentially are mini programs that you can use.

First, type `function` to declare a function, then `check0()` to name it. Then type a `{`.

Inside, type an if statement: `if(slider0.checked==true && slider1.checked==true && slider2.checked==true)`. This means that if all the sliders are checked, carry out the following:



```js
function check1(){
    if(slider0.checked==true && slider1.checked==true && slider2.checked==true) {
        setTimeout(function(){
            window.location.href = 'page1.html';
        }, 600);
    }
}

function check2(){
    if(slider0.checked==false && slider1.checked==true && slider2.checked==true && slider3.checked==false) {
        setTimeout(function(){
            window.location.href = 'page2.html';
        }, 600);
    }
}

function check3(){
  setTimeout(function(){
    window.location.href = 'lastPage.html';
  }, 600);
}
```

