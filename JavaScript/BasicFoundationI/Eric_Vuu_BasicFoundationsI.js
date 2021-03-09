// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function arrayTo255(){
    var output = [];
    for(var i = 1; i < 256; i++){
        output.push(i);
    }
    return output;
}

arrayTo255();

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sumEven(){
    var result = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 === 0){
        result += i
        }
    }
    return result;
}

sumEven();

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdd(){
    var result = 0;
    for(var i = 0; i < 5001; i++){
        if(i % 2 !== 0){
            result += i;
        }
    }
    return result;
}

sumOdd();

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

sumArray([-5,2,5,12]);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

findMax([-3,3,5,7]);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function getAverage(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total/arr.length;
}

getAverage([1,3,5,7,20]);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOdd(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

arrayOdd([1,2,3,4,5,6,7,8,9,10]);

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
//For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, num){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > num)
        count++
    }
    return count;
}

greaterThanY([1, 3, 5, 7], 3);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}

squares([1,5,10,-2]);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

negatives([1,5,10,-2]);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var output = [];
    var max = arr[0]
    var min = arr[0]
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            total += arr[i];
        } else {
            min = arr[i];
            total += arr[i];
        }
    }
    output.push(max, min, total/arr.length);
    return output;
}

maxMinAvg([1,5,10,-2]);

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValues(arr){
    if(arr.length < 2){
        return `Arguement is too short`;
    }

    // set temp variable to store first array value
    var temp = arr[0]
    // set first array position value to value of last array
    arr[0] = arr[arr.length-1]
    // re-assign last position value to value stored in temp variable
    arr[arr.length - 1] = temp;
    return arr;
}

swapValues([1,5,10,-2]);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

numberToString([-1,-3,2]);
