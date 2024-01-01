function sumArray(ar)
{
    let sum = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(ar);
console.log(sum);

function averageArray(ar)
{
    let n = ar.length;
    let sum = 0;
    
    for(let i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

let ar = [1, 3, 9, 15, 90];
let avg = averageArray(ar);

console.log("Average: ", avg);

