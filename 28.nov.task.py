array = np.arange(20).reshape(5, 4)
print(array)
print()

print(np.argmax(array))

print(np.argmax(array, axis=1))

print(np.argmax(array, axis=0))



import numpy as np

array = np.array([
    [3, 7, 1],
    [10, 3, 2],
    [5, 6, 7]
])
print(array)
print()

print(np.sort(array, axis=None))

print(np.sort(array, axis=1))

print(np.sort(array, axis=0))


import numpy as np

array = np.array([28, 13, 45, 12, 4, 8, 0])
print(array)

print(np.argsort(array))



import numpy as np

list = [
    np.array([3, 2, 8, 9]),
    np.array([4, 12, 34, 25, 78]),
    np.array([23, 12, 67])
]

result = []
for i in range(len(list)):
    result.append(np.mean(list[i]))
print(result)


import numpy as np

array = np.array([
    [3, 2, 8],
    [4, 12, 34],
    [23, 12, 67]
])

newRow = np.array([2, 1, 8])
newArray = np.vstack((array, newRow))
print(newArray)


import numpy as np

array = np.array([
    [3, 2, 8],
    [4, 12, 34],
    [23, 12, 67]
])

newColumn = np.array([2, 1, 8])
newArray = np.column_stack((array, newColumn))
print(newArray)


import numpy as np

array = np.array([3, 6, 7, 2, 5, 1, 8])
reversedArray = np.flipud(array)
print(reversedArray)


import numpy as np

matrix1 = [
    [3, 4, 2],
    [5, 1, 8],
    [3, 1, 9]
]

matrix2 = [
    [3, 7, 5],
    [2, 9, 8],
    [1, 5, 8]
]

result = np.dot(matrix1, matrix2)
print(result)


import numpy as np

n = 8
matrix = np.zeros((n, n), dtype=int)

matrix[::2, 1::2] = 1
matrix[1::2, ::2] = 1

for i in range(n):
    for j in range(n):
        print(matrix[i][j], end=" ")
    print()