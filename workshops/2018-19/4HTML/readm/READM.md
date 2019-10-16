# What is HTML?
HTML is one of the building blocks for creating a website. 
It creates all the things you see on the page, such as text, images, and videos.

Today I'll be teaching you some of the basics of HTML. If you already know HTML, scroll down to the end of this workshop and try to learn Bootstrap!

To start off, go to [codepen.io](https://codepen.io/pen/). If you're more comfortable with using Cloud 9, you can use that too. However, for the purposes of this tutorial, I'll be using codepen.

### The Structure
HTML, like other coding languages, has a structure you must follow. Each item you create (such as a paragraph or image), requires an opening tag and a closing tag. There are exceptions to this rule, but we'll cover that later.

The opening tag looks something like this:
```<p>```. It starts and ends with an arrow bracket, and has a letter/word in between them. 

The closing tag looks something like this: 
```</p>```. It starts and ends with an arrow bracket again, but before the letter/word, you need a forward slash.

### Creating a paragraph
In codepen.io, type in the following under the HTML section:
```<p> Hello World! </p>```

Now when you look below, you should see that it says Hello World!
The "p" in the opening and closing tags stands for paragraph. Anything you type in between the opening and closing tags will show up as a paragraph!

### Creating headings
Type the following in codepen.io:<br/>
```<h1>This is a big heading!</h1>```<br/>
```<h2>This heading isn't as big.</h2>```<br/>
```<h3>This heading is even smaller!</h3>```

You should probably see by now that as the number next to the "h" gets bigger, the heading gets smaller. 
Try some other headings, and see how small you can go!

Once again, with headings, whatever you want the text of the heading to be goes between the opening and closing tags.

### Inserting Images
By now, I'm pretty sure you must be bored of text. Let's create an image instead!

Unlike the HTML elements we learned earlier, images don't have an opening and closing tag. Let me show you how to insert an image:
```<img src="insert-url-here">```.

Where it says insert-url-here, paste in the link for your image. However, keep the quotes around the url. They're important.
You should now have your very first image!

### Learning More HTML
What I just taught you is merely scraping the surface of HTML. There's so much to teach.

No one expects you to memorize all of the HTML out there; instead, we should know how to learn it by ourselves! I personally love using [w3schools](https://www.w3schools.com/html/).

Here are some things I recommend you try to learn on your own and links to the tutorials on w3schools.
<ul>
    <li><a href="https://www.w3schools.com/html/html_formatting.asp">Text Formatting</a></li>
    <li><a href="https://www.w3schools.com/html/html_links.asp">Hyperlinks</a></li>
    <li><a href="https://www.w3schools.com/html/html_tables.asp">Tables</a></li>
    <li><a href="https://www.w3schools.com/html/html_lists.asp">Lists</a></li>
    <li><a href="https://www.w3schools.com/html/html_blocks.asp">Blocks</a></li>
</ul>

# What is CSS?
CSS is how you style your HTML! You've probably noticed that HTML by itself looks pretty boring and bland. That's where CSS comes in.
You can use CSS to do things like set a background image, change the color of the text, and add borders to spice up the page.

Of course, you'll be typing your CSS underneath the CSS section on codepen.io.
### The Structure
For CSS, there is a certain structure. Look below:
```
h1 {
    font-family: Arial;
}
```
First, you type the letter/phrase of the element you'd like to change. Here, I want to change the font of the text inside my heading.

Next, you create an opening and closing curly bracket. Inside the curly bracket, you type the property you want to change. For this example, I chose the font. The property is followed by a colon, and then the value you'd like to change it to. I chose to change my font to Arial. Finally, you have a semicolon.
The semicolon is especially important if you want to change multiple properties:
```
h1 {
    font-family: Arial;
    color: #FF8800;
}
```

Here you can see that I not only change the font of the heading, but the color of the heading as well. 

### Learning More CSS
If you're interested in experimenting with CSS, here are some things I recommend learning:
<ul>
    <li><a href="https://www.w3schools.com/css/css_background.asp">Backgrounds</a></li>
    <li><a href="https://www.w3schools.com/css/css_border.asp">Borders</a></li>
    <li><a href="https://www.w3schools.com/css/css_text.asp">Text Formatting</a></li>
    <li><a href="https://www.w3schools.com/css/css3_shadows.asp">Shadows</a></li>
    <li><a href="https://www.w3schools.com/css/css3_borders.asp">Rounded Corners</a></li>
</ul>

Feel free to explore and learn more on your own!

# What is Bootstrap?
Before you read this, don't move on to trying out Bootstrap unless you've used HTML and CSS before. I recommend using HTML and CSS for a few days before moving on to Bootstrap.

Bootstrap is a CSS framework. This means that it automatically styles a lot of your HTML so you don't have to mess around with CSS too much.

Here's how to get started:
If you're using codepen.io, simply paste the following under the HTML section:


```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></</script>
```

If you're using Cloud 9, copy the starter template on this page: https://getbootstrap.com/docs/4.3/getting-started/introduction/.

Once again, I recommend using [w3schools](https://www.w3schools.com) to learn about some of the great stuff you can do with Bootstrap. Have fun with it!
