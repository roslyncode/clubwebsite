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
