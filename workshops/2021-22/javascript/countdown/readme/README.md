# Workshop 6: Christmas Countdown

Today’s short workshop is a Christmas countdown calculator, as today is our last meeting before break. We got our workshop idea from: https://thisinterestsme.com/javascript-christmas-countdown/. Happy Holidays!

### Step 1: Set Up Repl

1. Create a new repl.it file 
2. Make sure the language selected is `JavaScript`.

### Step 2: HTML
We will now set up the HTML for the timer 

```html
<div id="countdown">
    <h1>Christmas Day Countdown</h1>
    <div id="days"></div>
    <div id="hours"></div>
    <div id="minutes"></div>
    <div id="seconds"></div>
</div>
```

### Step 3: Setting the Variables 
Next, we will begin coding in the <script.js> file to create variables. We will first set the variables necessary for the date. 

```js
function countdown(){
    
    var now = new Date();
    var currentMonth = (now.getMonth() + 1);
    var currentDay = now.getDate();
```

### Step 4: Finding when the next Christmas is

We will then figure out which year next Christmas will be and figure out how many seconds is needed until the day. 

```js
    var nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        nextChristmasYear = nextChristmasYear + 1;
    }
```

### Step 5: Solving for the Time Until the next Christmas
Then, we will check if it is not Christmas Day, and we will create new variables for the days, hours, minutes, and seconds until Christmas Day and solve for them. 

```js
    var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);

    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if(!(currentMonth == 12 && currentDay == 25)){
        days = Math.floor(diffSeconds / (3600*24));
        hours   = Math.floor(diffSeconds / 3600);
        minutes = Math.floor(diffSeconds / 60);
        seconds = diffSeconds - (days * 3600 * 24 +  hours * 3600 +  minutes * 60);
    }
```

### Step 6: Display the Time
Finally, we will add these values to the HTML elements that we created before and continue to call the function after each second to display the timer.

```js
    document.getElementById('days').innerHTML = days + ' DAYS;
    document.getElementById('hours').innerHTML = hours + ' HOURS’;
    document.getElementById('minutes').innerHTML = minutes + ' MINUTES;
    document.getElementById('seconds').innerHTML = seconds + ' SECONDS;

    setTimeout(calculateChristmasCountdown, 1000);
}
countdown();
```

### Step 7: Challenge
Feel free to incorporate CSS as well to change how your timer looks!


