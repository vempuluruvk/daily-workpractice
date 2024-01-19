def fibonacci(n):
    fib_sequence = [0, 1]
    while len(fib_sequence) < n:
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])
    return fib_sequence

from fibonacci_module import fibonacci

n = 10
result = fibonacci(n)
print(f"Fibonacci sequence of {n} numbers:", result)


def greet(name):
    return f"Hello, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"
from my_module import greet

name = "Alice"
greeting = greet(name)
print(greeting)


file_name = input("Enter the name of the text file: ")

with open(file_name, 'r') as file:
    words = file.read().split()

unique_words = sorted(set(words))
print("Unique Words in Alphabetical Order:", unique_words)


class IntegerToRoman:
    def int_to_roman(self, num):
        val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4,
            1
        ]
        syb = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV",
            "I"
        ]
        roman_num = ''
        i = 0
        while num > 0:
            for _ in range(num // val[i]):
                roman_num += syb[i]
                num -= val[i]
            i += 1
        return roman_num

converter = IntegerToRoman()
number_to_convert = 3549
result_roman = converter.int_to_roman(number_to_convert)
print(f"{number_to_convert} in Roman Numerals: {result_roman}")


class PowerCalculator:
    def power(self, x, n):
        return x ** n

calculator = PowerCalculator()
base = 2
exponent = 3
result = calculator.power(base, exponent)
print(f"{base} to the power of {exponent}: {result}")


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




source_file = input("copy.py: ")          
destination_file = input("copy2.py: ")


try:
    with open(source_file, 'r') as source:
        content = source.read()
except FileNotFoundError:
    print(f"Error: {source_file} not found.")
    exit()

with open(destination_file, 'w') as destination:
    destination.write(content)

print(f"Contents from {source_file} successfully copied to {destination_file}.")


