TwoSum problem from leetCode - https://leetcode.com/problems/two-sum/description/
Tutorial - https://www.youtube.com/watch?v=_CoCO62fn_E

# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

--------------------------------------------------------------------------------------------------------------------------

## How to Approach this question?
1. Spend a few minutes before you solve the question. Read at least 3 times
 - What are the inputs? 2 inputs: array of numbers and a target number
 - What is the output? An array

2. Create some test cases so that you would understand better:
- Corner case: what if the array is an empty array? What would be the output?
  A. Maybe the output is an empty array? Need to ask the interviewer
  B. What if the array has multiple numbers that doesn’t add up to the target?
  The output should also be an empty array?
  C. What if there are more than one solution to the problem? nums=[2,7,2,7] target = 9
  The intervier might trick you
### That shows your thinking process
You will have different input and you would discuss the output with the interviewer
And then maybe the interviewer will cross out one or more cases so that you will have better understanding of the solution

## First Solution:
You can take a brute force approach and add every item in the array to find the solution
[2,7,11,15]
Add 2 with 7 add 2 with 11 and add 2 with 15
Then add 7 with 11 and add 7 with 15
Then add 11 with 15
Complexity of the brute force is o of n^2 which is not good. There is a better solution

## Second Solution: 
You can create an object and take the target and subtract it with the first item. 
You would put the result as a key and the value will be the index (9-2=7) 7:0(index of the first number in the array – zero based index)
{
    7: 0
}

Then you can check if the index exists in the array, if it is you found your complement
The index of 7 would be 1 so we can return the result array as [0,1]
So this way we iterate only once

## Solution (2nd approach which is better performance and less complex)
The complexity would be o of n and not O of n^2 – much better.
We will use a Map instead of a JS object which is better.
```javascript
//Inputs:
const nums = [2,7,11,15], target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const TwoSum = (nums, target) => {
  const complement = new Map(); 
	
  //always calculate the length outside of the for loop because if we do it in the for loop it will calculate it in every iteration
  const arrlen = nums.length;
  For(i=0; i<arrlen; i++) 
  {
    If(complement[nums[i] >=0)//it exists in the map complement[x] returns the index complement[7] = 0
    {
      return [complement[nums[i], i];
    }
    // the complement (ההפרש בין המטרה לערך במערך) is Target – Array item
    complement [target-nums[i]] = i; //index as a value
  }
  return []; //if we don’t find the solution
}

/*
if you console.log the output you would get the result very fast - result = [0,1]
You have to explain the complexity that is o of n because we only visiting the number once
And the lookup inside the map is very fast
*/

## Brute Force solution

//Inputs:
const nums = [2,7,11,15], target = 9;

//Constraints::
const CONSTRAINTS = {
    NUMS_MIN: 2,
    NUMS_MAX: 10e4,
    VALUE_MIN: -10e9,
    VALUE_MAX: 10e9
};

// validation functions::
const checkLimit = (value, index, array) => (value >= CONSTRAINTS.VALUE_MIN && value <= CONSTRAINTS.VALUE_MAX && typeof value == 'number');

const numsValidations = nums => (nums.length >= CONSTRAINTS.NUMS_MIN && nums.length<= CONSTRAINTS.NUMS_MAX) && nums.every(checkLimit)  && Array.isArray(nums);

const targetValidations = target => (target >= CONSTRAINTS.VALUE_MIN && target <= CONSTRAINTS.VALUE_MAX && typeof target == 'number');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  if(numsValidations(nums)&&targetValidations(target))
  {
    for(let i = 0; i<nums.length; i++)
    {
      for(let j = 0; j<nums.length; j++)
      {
        if(nums[i] + nums[j] == target && i != j)
        {
          return [i,j];
        } 
      }
    }
  }  
};