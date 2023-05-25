//
const Questions = [
  {
    questNum: "1",
    title: "01. Array Reduce Transformation",
    difficulty: "Easy",
    acceptance: "67%",
    description:
      "Q.) Given an integer array nums, a reducer function fn, and an intial value init, return a reduced array. A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = (val, arr[2]), ... until every element in the array has been processed. The final value of val is returned. If the length of the array is 0, it should return init. Please solve it without using the built-in Array.reduce method.",
    input:
      "nums = [1,2,3,4], fn = function sum(accum, curr), { return accum + curr; }, init = 0",
    output: "10",
    explanation:
      "initially, the value is init=0. (0) + nums[0] = 1, (1) + nums[1] = 3, (3) + nums[2] = 6, (6) + nums[3] = 10, The final answer is 10.",
  },
  {
    questNum: "2",
    title: "02. Merge Strings Alternately",
    difficulty: "Easy",
    acceptance: "63%",
    description:
      "Q.) You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.",
    input: "word1 = 'abc', word2 = 'pqr'",
    output: "apbqcr",
    explanation:
      "The merged string will be merged as so:, word1:  a   b   c, word2:    p   q   r, merged: a p b q c r",
  },
  {
    questNum: "3",
    title: "03. Function Composition",
    difficulty: "Easy",
    acceptance: "72%",
    description:
      "Q.) Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The function composition of an empty list of functions is the identity function f(x) = x. You may assume each function in the array accepts one integer as input and returns one integer as output.",
    input: "functions = [x => x + 1, x => x * x, x => 2 * x], x = 4",
    output: "65",
    explanation:
      "Evaluating from right to left -> Starting with x = 4., 2 * (4) = 8, (8) * (8) = 64, (64) + 1 = 65",
  },
  {
    questNum: "4",
    title: "04. Cache With Time Limit",
    difficulty: "Medium",
    acceptance: "52%",
    description:
      "Q.) Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key. The class has three public methods: set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration ha elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and fals otherwise. Both the value and duration should be overwritten if the key already exists. get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1. count(): returns the count of un-expired keys. ",
    input:
      '["TimeLimitedCache", "set", "get", "count", "get"], [[], [1, 42, 100], [1], [], [1]], [0, 0, 50, 50, 150]',
    output: "[null, false, 42, 1, -1]",
    explanation:
      "At t=0, the cache is constructed. At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned. At t=50, key=1 is requested and the value of 42 is returned. At t=50, count() is called and there is one active key in the cache. At t=100, key=1 expires. At t=150, get(1) is called but -1 is returned because the cache is empty.",
  },
  {
    questNum: "5",
    title: "05. Convert Object to JSON String",
    difficulty: "Medium",
    acceptance: "55%",
    description:
      "Q.) Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys(). Please solve it without using the built-in JSON.stringify method.",
    input: 'object = {"y":1,"x":2}',
    output: '{"y":1,"x":2}',
    explanation:
      "Return the JSON representation. Note that the order of keys should be the same as the order returned by Object.keys()",
  },
  {
    questNum: "6",
    title: "06. Check if Object Instance of Class",
    difficulty: "Medium",
    acceptance: "49%",
    description:
      "Q.) Write a function that checks if a given object is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.There are no constraints on the data types that can be passed to the function.",
    input: "func = () => checkIfInstance(new Date(), Date)",
    output: "true",
    explanation:
      "The object returned by the Date constructor is, by definition, an instance of Date.",
  },
  {
    questNum: "7",
    title: "07. Memoize",
    difficulty: "Hard",
    acceptance: "39%",
    description:
      "Q.) Given a function fn, return a memoized version of that function. A memoized function is a function that will never be called twice with the same inputs. Instead it will returned a cache value You can assume there are 3 possible input functions: sum, fib, and factorial sum accepts two integers a and b and returns a + b fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.",
    input:
      '"sum", ["call","call","getCallCount","call","getCallCount"], [[2,2],[2,2],[],[1,2],[]]',
    output: "[4,4,1,3,2]",
    explanation:
      "const sum = (a, b) => a + b; const memoizedSum = memoize(sum); memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before. memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.",
  },
  {
    questNum: "8",
    title: "08. Memoize II",
    difficulty: "Hard",
    acceptance: "44%",
    description:
      "Q.) Given a function fn, return a memoized version of that function. A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cache value fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical i they are === to each other.",
    input:
      "getInputs = () => [[2,2],[2,2],[1,2]], fn = function (a, b) { return a + b; }",
    output: '[{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]',
    explanation:
      "const inputs = getInputs(); const memoized = memoize(fn); for (const arr of inputs) {   memoized(...arr); } For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn(). For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required. For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.",
  },
  {
    questNum: "9",
    title: "09. Snail Traversal",
    difficulty: "Hard",
    acceptance: "37%",
    description:
      "Q.) Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.",
    input:
      "nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], rowsCount = 5, colsCount = 4",
    output:
      "[ [19,17,16,15], [10,1,14,4], [3,2,12,20], [7,5,18,11], [9,8,6,13] ]",
    explanation:
      "5 multiplied by 4 is 20, and the original array has a length of 20; therefore, the input is valid.",
  },
  {
    questNum: "10",
    title: "10. Promise Pool",
    difficulty: "Hard",
    acceptance: "40%",
    description:
      "Q.) Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve. Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of a many functions as possible and continue executing new functions when old promises resolve. promisePool should execut functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should als resolve For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes tw functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on unti there are no functions left to execute You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.",
    input:
      "functions = [() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200)], n = 2",
    output: "[[300,400,500],500]",
    explanation:
      "Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively. At t=0, the first 2 functions are executed. The pool size limit of 2 is reached. At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2. At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1. At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.",
  },
];

export default Questions;
