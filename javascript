Map Function

Usage: A Map Function performs various operations on each element of an array.
For example: given an array ar = [1,2,3,4,5] ; if we require a new array that contains double of each element of the existing array ar, a map function can be used.

const ar = [1,2,3,4,5];
function double(x) {
return x*2;
}
const result = ar.map(double);
console.log(result);

Output: [2,4,6,8,10]



Filter Function

Usage: Used to filter all the elements in an array based on a specific condition.
	
	For example: given an array ar=[2,3,4,5,6]; we are expected to find the even
           elements in the array, in such a case, the filter function can be used.


            const ar = [2,3,4,5,6];
	 function isEven(x){
	 return x%2===0
  	 }
	
	const res = ar.filter(isEven);
	console.log(res);
	
	Output: [2,4,6]


Reduce Function
Reduce function is used when you need to use all the elements of a given array and come up with an accumulated value.

Example:

Given array ar = [1,2,3,4,5];

constant ar = [1,2,3,4];
function findSum(ar){
let sum= 1;
for(let i=0; i<ar.length; i++){
sum = sum + ar[i];
}
return sum;
}
console.log(findSum(ar));

Output: 10



4.forEach

The forEach method calls on each element of the array.

	Example:

	var ar = [“Java”, “Python”, “C#”, “C++”];
	ar.forEach(function(value){
	document.write(value + “<br>”);
	});

	Output: 
	Java
	Python
	C#
	C++
