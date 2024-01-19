integer_number = 10
float_number = 3.14
complex_number = 2 + 3j

print("Integer:", integer_number)
print("Float:", float_number)
print("Complex:", complex_number)


a = 10
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Modulus:", a % b)



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


my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}

# Accessing values
print("Name:", my_dict['name'])

# Adding a new key-value pair
my_dict['gender'] = 'Male'
print("After Adding Gender:", my_dict)


num1 = 10
num2 = 20
num3 = 15
largest = max(num1, num2, num3)
print("Largest Number:", largest)


def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

temperature_celsius = 25
temperature_fahrenheit = 77

print(f"{temperature_celsius} Celsius in Fahrenheit: {celsius_to_fahrenheit(temperature_celsius)}")
print(f"{temperature_fahrenheit} Fahrenheit in Celsius: {fahrenheit_to_celsius(temperature_fahrenheit)}")


rows = 5
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print("*", end=' ')
    print()


 def prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

for i in range(2, 20):
    if prime(i):
        print(i, end=' ')

        

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

number = 5
print(f"Factorial of {number}: {factorial(number)}")



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


   





