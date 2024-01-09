"use strict";
console.log("Hello World");
let age = 30;
let firstName = "Yuvraj";
age = 31;
firstName = "Yuvraj";
console.log(firstName);
let names = ["yuvraj", "kumar", "singh"];
// console.log(names);
let fruits = ['apples', 'pears', 'mangoes'];
fruits.push('peaches');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
let user = {
    firstName: 'mario',
    age: 22,
    id: 1
};
user.firstName = 'super';
let person = {
    name: "Yuvraj Singh",
    age: 22
};
console.log(person.name);
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 5);
subtractTwoNumbers(5, 3);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
    return total;
}
addAllNumbers([5, 2, 6, 4, 4, 7, 0, 3, 1, 9,]);
//any type
let num;
num = 22;
num = false;
//tuples
let persons = ['amrio', 30, true];
const authorOne = {
    name: "yuvraj",
    avatar: 'avatar'
};
const newPost = {
    title: 'A title',
    body: 'this is post',
    tags: ['something', 'interesting'],
    created_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`Created Post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
// const colorThree=getRandomColor()
console.log(colorOne);
console.log(colorTwo);
// union types
let someId;
someId = 1;
someId = "hello";
let email = null;
email = "yuvraj@gmail.com";
email = null;
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    }
    else {
        return id.toString();
        // can use somehting specific to nnumbers
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('1');
console.log(idOne);
console.log(idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    else {
        console.log(value.firstName, value.age);
    }
}
