import numpy as np

n = 8

matrix = np.zeros((n, n), dtype=int)

matrix[::2, 1::2] = 1
matrix[1::2, ::2] = 1

for i in range(n):
    for j in range(n):
        print(matrix[i][j], end=" ")
    print()


import numpy as np
 
arr = np.array([1, 2, 3])
print("Array with Rank 1: \n",arr)
 
arr = np.array([[1, 2, 3],
                [4, 5, 6]])
print("Array with Rank 2: \n", arr)
 
arr = np.array((1, 3, 2))
print("\nArray created using "
      "passed tuple:\n", arr)


import numpy as np

arr = np.array([[-1, 2, 0, 4],
                [4, -0.5, 6, 0],
                [2.6, 0, 7, 8],
                [3, -7, 4, 2.0]])
print("Initial Array: ")
print(arr)
 
sliced_arr = arr[:2, ::2]
print ("Array with first 2 rows and"
    " alternate columns(0 and 2):\n", sliced_arr)
 
Index_arr = arr[[1, 1, 0, 3], 
                [3, 2, 1, 0]]
print ("\nElements at indices (1, 3), "
    "(1, 2), (0, 1), (3, 0):\n", Index_arr)


import numpy as np

a = np.array([[1, 2],
              [3, 4]])
 
b = np.array([[4, 3],
              [2, 1]])
               
print ("Adding 1 to every element:", a + 1)
 
print ("\nSubtracting 2 from each element:", b - 2)
 

print ("\nSum of all array "
       "elements: ", a.sum())

print ("\nArray sum:\n", a + b)


import numpy as np
x = np.array([1, 2])  
print("Integer Datatype: ")
print(x.dtype)         
 
x = np.array([1.0, 2.0]) 
print("\nFloat Datatype: ")
print(x.dtype)  

x = np.array([1, 2], dtype = np.int64)   
print("\nForcing a Datatype: ")
print(x.dtype)


import numpy as np
arr1 = np.array([[4, 7], [2, 6]], 
                 dtype = np.float64)
                  
arr2 = np.array([[3, 6], [2, 8]], 
                 dtype = np.float64) 
 
Sum = np.add(arr1, arr2)
print("Addition of Two Arrays: ")
print(Sum)
 

Sum1 = np.sum(arr1)
print("\nAddition of Array elements: ")
print(Sum1)
 
Sqrt = np.sqrt(arr1)
print("\nSquare root of Array1 elements: ")
print(Sqrt)
 
Trans_arr = arr1.T
print("\nTranspose of Array: ")
print(Trans_arr)