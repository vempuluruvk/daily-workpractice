def greet(name):
    return f"Hello, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"
from my_module import greet

name = "Alice"
greeting = greet(name)
print(greeting)

string1 = "Hello"
string2 = "World"

concatenated_string = string1 + " " + string2
print("Concatenated String:", concatenated_string)

substring = concatenated_string[0:5]
print("Substring:", substring)


from datetime import datetime
import pytz

current_date = datetime.now(pytz.timezone('Asia/Kolkata'))
formatted_date = current_date.strftime("%a %b %d %H:%M:%S %Z %Y")
print("Current Date:", formatted_date)


my_list = [1, 2, 3]

# Append
my_list.append(4)
print("After Append:", my_list)

# Remove
my_list.remove(2)
print("After Remove:", my_list)


my_tuple = (1, 2, 3)

# Accessing elements
print("First Element:", my_tuple[0])

# Tuple unpacking
a, b, c = my_tuple
print("Unpacked Values:", a, b, c)


def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

number = 5
print(f"Factorial of {number}: {factorial(number)}")


class StringReverser:
    def reverse_words(self, input_str):
        words = input_str.split()
        reversed_words = ' '.join(reversed(words))
        return reversed_words

reverser = StringReverser()
input_string = "Hello World"
result_reversed = reverser.reverse_words(input_string)
print(f"Original String: {input_string}")
print(f"Reversed String: {result_reversed}")


def is_right_triangle(a, b, c):
    sides = [a, b, c]
    sides.sort()

    if sides[0]**2 + sides[1]**2 == sides[2]**2:
        return True
    else:
        return False

side1 = 3
side2 = 4
side3 = 5

if is_right_triangle(side1, side2, side3):
    print("It's a right triangle.")
else:
    print("It's not a right triangle.")