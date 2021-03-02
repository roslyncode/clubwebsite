# Workshop 8: Intro to Data Analysis with Python

In this workshop we will be analyzing data through the use of python. In this workshop, we will learn the basics of file reading and parsing.

### Step 1: Download and Implement Storm Eleanor CSV
For this workshop, we will use a file of Comma Separated Values (csv) of storm data. 
First, download the file from the zoom chat. Remember the location you saved the file to. 
After you create a new repl with the python language, click the 3 dots near the upper left corner.
Click upload file, and select the file from the file explorer.

To tell the program to load the file in, we will use the ```with``` keyword, which ensures the files are automatically closed after their use.
```python
with open("StormEleanor_2_3_Jan.csv", "r") as weatherfile:
  for line in weatherfile:
    print(line)
```
This means, “With this file opened as this shorthand name, I will do these things in the following block of code...”

For each line of data in the weatherfile, the program will print the line.
You’ll notice that the line is printed as one big string which contains the commas, and we will need to remove these using the split function. 

```python
with open("StormEleanor_2_3_Jan.csv", "r") as weatherfile:
  for line in weatherfile:
    print(line.split(','))
```

### Step 2:  Parsing the File For Information
Suppose we wanted to take a look at the air pressure data. 

First create the variable data_row to store each line of this file as a list.   In order to now access air pressure from the data file, you must address its index.  Since it is located in the 7th column, this is the sixth index (the first index begins at 0 not 1).  

After retrieving this information, you must print it.   Since each time you run through the for loop you are overwriting the values of pressure, its is most efficient to create a list of the pressure values than can be stored and eventually reused.  Since this is a list, you must append said values

```python
pressure = data_row[6] 
pressure_data.append(pressure)
```




### Step 3: Make the Data Usable
After the previous step, there are two more things we need to do to make the data usable. 

If you click on the csv file, you will notice that the first row has the name of what the column below represents. We need to skip this first row to make sure that the data structure only contains the values we want.
To fix this, we will use the ```next``` function, which means “go to the next item in this object”


```python
pressure_data = []
 
with open("StormEleanor_2_3_Jan.csv", "r") as weatherfile:
  next(weatherfile)
  for line in weatherfile:
    data_row = line.split(',')
    pressure = data_row[6]
    pressure_data.append(pressure)
```

Additionally, if you take a look at the type of values that are appended to pressure_data by adding
```python
print(type(pressure_data[1]))
```
to the end of the code, you will see that strings are appended. We want to convert these to floats (which are decimals) so that we can perform mathematical operations on them. To do this, simply use the ```float()``` function:

```python
pressure_data = []

with open("StormEleanor_2_3_Jan.csv", "r") as weatherfile:
  next(weatherfile)
  for line in weatherfile:
    data_row = line.split(',')
    pressure = data_row[6]
    pressure_data.append(float(pressure))
``` 
### Step 4: Working with Pandas
Pandas is intended to be used when the data you are planning to analyze is in “table-like” form.  It is particularly useful when there are columns of data and possibly different data types.  Do not use ```pandas``` for simple data files, large gridded data sets of single data types, and heavily mathematical operations on gridded data

Import the pandas package by adding 
```python
import pandas as pd
```
To the top of your file

Use the ```read_csv``` function to load the csv file. Pass in the path and name of the file, the delimiter (what character is used to separate the values in the file), and the header (which row contains the names of the columns) like so:
```python
data = pd.read_csv('StormEleanor_2_3_Jan.csv', delimiter=',', header=0)
```
Now, the variable data stores the result of the read_csv function. This is called a pandas dataframe. You can think of it as a list with many more features.

Using pandas, we can access the columns using the header names instead of referring to the index.
In order to print the air pressure data, you can write:
```python
pressure_data = data['Pair_Avg']

print(pressure_data)
```
This should print the air pressure data, the record number, and the name of the data variable and its type.

### Step 5: Using matplotlib to plot data
Now we will be using the package matplotlib which can be used to create charts and graphs for data

Import the package matplotlib by adding the following to the top of your file
```python
Import matplotlib.pyplot as plt
```
To plot the data, we add two more function calls to the end of the script:
```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('StormEleanor_2_3_Jan.csv', delimiter=',', header=0)

pressure_data = data['Pair_Avg']

plt.plot(pressure_data)
plt.savefig("pressure.png")
```
The ```plot``` function plots a line by default of the first argument. There are many other optional arguments that can be provided to specify other aspects of the plot.

Open the ```pressure.png``` file to see a line chart produced.  It should look similar to the image below:

<img width="640" height="480" src="storm eleanor basic plot.png">

### Step 6: Cleaning up the Graph

Although this chart is informative, it would be greatly improved by adding more details. To do so we must modify our code.  We will begin by adding axes and a tile to the graph.  

Above the line
```python
plt.savefig("pressure.png")
```
Add the following to the bottom of your code.  This is to assign values to the y-axis, ```plt.ylabel```, and the title of your graph, ```plt.title```
```python
plt.ylabel("Pressure (hPa)")
plt.title("Average Pressure, JCMB Weather Station, 2-3rd Jan 2018")
```


For the ```xlabel```, it would be useful to convert the integers into actual timestamps, and plot those instead. This can be done with the ```datetime``` module.
First, add ```datetime``` to the list of import statements at the top of the script.
```python
# import the required libraries and modules
import datetime
```
Second, create an empty list to store the dates.
```python
date_time_series = []
```
Third, set the first date in the series, which is Midnight (00:00) on the 2nd January 2018. (Midnight is set by default if no hours/minutes are specified) and the end date for our date, which is 23:59 on the 3rd January 2018.
```python
date_time = datetime.datetime(2018, 1, 2)
date_at_end = datetime.datetime(2018, 1, 3, 23, 59)
```
Then, set the timestep with the function ```timedelta```. The weather station records data every minute:
```python
step = datetime.timedelta(minutes=1)
```
Finally, iterate through the times by adding timedelta to the start time and appending the new time into the list until the time at end is reached:
```python
while date_time <= date_at_end:
  date_time_series.append(date_time)
  date_time += step
```

To clean up the plot, you can also add additional functions such as a rotation in the function ```plt.xticks()``` in order to prevent overlap.  You can also add the function ```plt.tight_layout()``` to clean up the axes and scale them correctly

Now that you have coded with matplotlib, it is time to combine all of your work.  It should look very similar to the following 
```python
import pandas as pd
import matplotlib.pyplot as plt
import datetime

data = pd.read_csv('StormEleanor_2_3_Jan.csv', delimiter=',', header=0)

pressure_data = data['Pair_Avg']

date_time_series = []
date_time = datetime.datetime(2018, 1, 2)
date_at_end = datetime.datetime(2018, 1, 3, 23, 59)
step = datetime.timedelta(minutes=1)

while date_time <= date_at_end:
  date_time_series.append(date_time)
  date_time += step

plt.plot(date_time_series, pressure_data)
plt.ylabel("Pressure (hPa)")
plt.xlabel("Time")
plt.title("Average Pressure, JCMB Weather Station, 2-3rd Jan 2018")
plt.xticks(rotation=-60)
plt.tight_layout()
plt.savefig("pressure_final.png")
```

