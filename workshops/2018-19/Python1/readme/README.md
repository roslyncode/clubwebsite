# About Python

Python is a widely-used, interpreted, object-oriented, and high-level programming language with dynamic semantics, used for general-purpose programming. It was created by **Guido van Rossum**, and first released on February 20, 1991.

Python Goals
-   an  **easy and intuitive**  language just as  **powerful**  as those of the major competitors;
-   **open source**, so anyone can contribute to its development;
-   code that is as understandable as  **plain English**;
-   suitable  **for everyday tasks**, allowing for short development times.

![enter image description here](https://zgab33vy595fw5zq-zippykid.netdna-ssl.com/wp-content/uploads/2017/09/growth_major_languages-1-1024x878.png)

# Basic Python

## "Hello World!"

The most basic exercise when learning any new programming language is printing the phrase "Hello World"

 1. To begin create a new file named helloworld.py
 2. To print a phrase in python you must make a call to the print() method; to do this you simply type print()
 3. If you try to run the code the way it is now nothing would appear; to actually display "Hello World!" you have to insert the words "Hello World!" with quotations into the parentheses.

## Variables

Variables in python are different from most other languages. There is no need to declare the type of a variable explicitly; instead, python infers the type of the variable based on the value you assign to it.

For Example:
The line
```
    word = "bus"
```
will initiate the variable `word` as a String because it uses quotations.

Python will do the same thing for all other supported datatypes including
-   Numbers
-   Lists
-   Tuples
-   Strings
-   Sets
-   Dictionaries

We will only cover number, strings, and lists in this tutorial

### Numbers

Numbers include negative and positive integers and decimals
All of the following lines are valid python code
```
    num = 2
    dec = 3.2
    bignum = 32030492
```    
Note: Python actually divides number into multiple datatypes but does not reveal the actual type to the programmer. You can see the actual type of the number using the type() method.

#### Operations

Python supports all the common arithmetic operations you would expect

![enter image description here](https://i.gyazo.com/c416e5ce181e469f1fc67f17001d639e.png)Note: `x = x + 2` can be abbreviated as `x += 2`

### Strings

String are any character or group of characters which are initialized with quotations.
Example:
```
    word = "hello"
    a = "1AsdFsa"
    b = "#4.2@4Isn"
```    
#### Concatenating

Strings can be combined in the following manner.
```
    a = "Hello"
    b = "World"
    c = a + " " + b
    # c is set equal to "Hello World"
```
#### Slicing

Strings in python can be divided using a special "slicing" syntax

```
a[n]         # gets nth character in string
a[start:end] # string start through end-1
a[start:]    # string start through the rest of the string
a[:end]      # string from the beginning through end-1
a[:]         # a copy of the whole string
```
Example:
```
    a = "You won't believe it's not butter."
    print(a[:3])  # prints "You"
    print(a[2:6]) # prints "u wo"
    print(a[4:])  # prints "won't believe it's not butter."
```  
### Lists

Lists are one of the most versatile python types and have a huge number of uses.

A list is a collection of other variables. Lists in python can hold any number of variables and are not dependent on the type of the variables that they are holding.

Example: 
```
    nums = [1,3,2]
    strs = ["hi","hello","hola"]
    mix = ["one",2,"three"]
```  
#### Adding and removing elements to/from a list

You can use .append(element) to add elements to a list.
.remove(element) removes the first occurrence of an element from a list
Example:
```
    a = [1,2,3,4]
    a.append(5)
    print(a) # prints [1,2,3,4,5]
    a.remove(2)
    print(a) # print [1,3,4,5]
```
   
#### Slicing

The syntax for slicing used for strings can also be applied to lists.
```
      a = [1,2,3,4,5]
      b = a[1:3]
      print(b) # prints  [2,3]
```

## For Loops

For loops are one of the most important concepts in python.
Any code put inside of a for loop will be repeated however many times its parameters dictate.
```
    # Syntax for the for loop
    for i in range(num):
	    # code to be looped over
	# num is the number of times the loop will be executed
```
	
Example:
```
    for i in range(5):
	    print(i)
	# The above prints
	0
	1
	2
	3
	4
```
### Enhanced For Loop
The enhanced for loop can be used when one wants to iterate directly over the contents of a list.
```
    list = ["a","b","c"]
	for x in list:
		print(x)
	# The above prints
	a
	b
	c
```
# Exercises

 1. Given a list of integers write a program that prints odd or even for each element. (Hint: Use modulus)
 2. Given a list of strings print an acronym. Example: ["Body", "Odor"] would output "BO"
 3. Given a string print the reverse of the string.
