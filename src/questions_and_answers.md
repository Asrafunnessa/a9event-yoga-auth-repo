<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ReferenceError: greetign is not defined. In this code, I have a typo where i intended to declare and initialize a variable named greeting, but i mistakenly wrote greetign instead. Thats why JavaScript cannot find the variable greetign, leading to a ReferenceError.

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Right ans is 3. In JavaScript, when i use the + operator to add two values, if one of them is a string, JavaScript performs type coercion and treats the other operand as a string as well. 

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Right answer is A.In this code, the info.favoriteFood property is initially set to the first element of the food array, which is "🍕". Then, it is reassigned to "🍝". However, this reassignment does not modify the original food array in any way. The food array remains unchanged, and when you log it to the console, it will still be ['🍕', '🍫', '🥑', '🍔'].

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Right answer is "Hi there, undefined".In this code, the sayHi function expects a parameter name, which it uses to construct the greeting. However, when you call sayHi() without passing an argument, the name parameter inside the function will be undefined. As a result, the function will return "Hi there, undefined," and that's what will be logged to the console.

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The Right answer is 3.In this code, the forEach loop iterates over each element in the nums array. Inside the loop, there is a conditional check if (num) which evaluates to true for all elements in the array except for 0. Since there are three non-zero elements in the nums array (1, 2, and 3), the count variable is incremented three times. Therefore, the final value of count is 3, and that's what will be logged to the console.

<i>Write your explanation here</i>

</p>
</details>
