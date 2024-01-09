console.log("Hello World")

let age: number=30
let firstName: string ="Yuvraj"

age=31
firstName="Yuvraj"

console.log(firstName);


let names:string[]=["yuvraj", "kumar", "singh"]
// console.log(names);

let fruits=['apples','pears', 'mangoes']
fruits.push('peaches')

const f=fruits[3]
let things=[1, true, 'hello']

const t=things[0]


let user:{firstName:string, age: number, id:number}={
    firstName:'mario',
    age:22,
    id:1
}

user.firstName='super'


let person={
    name:"Yuvraj Singh",
    age:22
}

console.log(person.name)


function addTwoNumbers(a:number,b:number):number{
    return a+b
}
const subtractTwoNumbers=(a:number, b:number):number=>{
    return a - b
}

addTwoNumbers(3,5)
subtractTwoNumbers(5,3)

function addAllNumbers(items: number[]):number{
    const total=items.reduce((a,c)=>a+c,0)
    console.log(total)
    return total
}

addAllNumbers([5,2,6,4,4,7,0,3,1,9,])

//any type

let num:any
num=22
num=false



//tuples

let persons:[string, number, boolean]=['amrio',30, true]


//interfaces

interface Author{
    name: string,
    avatar:string,
}


const authorOne:Author={
    name:"yuvraj",
    avatar:'avatar'
}

interface Post{
    title:string,
    body:string,
    tags:string[],
    created_at:Date,
    author:Author
}

const newPost:Post={
    title:'A title',
    body:'this is post',
    tags:['something' ,'interesting'],
    created_at:new Date(),
    author:authorOne
}

function createPost(post:Post):void{
    console.log(`Created Post ${post.title} by ${post.author.name}`)
}

createPost(newPost);


//type aliases

type Rgb=[number, number, number]

function getRandomColor():Rgb{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)

    return [r,g,b]
}

const colorOne=getRandomColor()
const colorTwo=getRandomColor()
// const colorThree=getRandomColor()
console.log(colorOne)
console.log(colorTwo)



// union types

let someId:number|string

someId=1;
someId="hello"

let email:string|null=null
email="yuvraj@gmail.com"
email=null


// type guards

type Id=string|number
function swapIdType(id:Id){
    if(typeof id==='string'){
        // can use string methods
        return parseInt(id)
    }else{
        return id.toString()
        // can use somehting specific to nnumbers
    }
}

const idOne=swapIdType(1)
const idTwo=swapIdType('1')
console.log(idOne)
console.log(idTwo)


//tagged interfaces

interface User{
    type:'user'
    username:string,
    email:string,
    id:Id
}
interface Person{
    type:'person'
    firstName:string,
    age:number,
    id:Id
}

function logDetails(value:User|Person):void{
    if(value.type==='user'){
        console.log(value.email, value.username)
    }else{
        console.log(value.firstName, value.age)
    }
}