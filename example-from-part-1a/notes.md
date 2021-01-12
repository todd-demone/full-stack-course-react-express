# Part 1a - Fundamentals of React

## ReactDOM.render()
argument 1- takes a Component
argument 2 - tells it where in DOM to render that component, usually #root

## Components
* a JS function
* fxn that defines the behaviour of a component
* written in JSX
* returns element(s) to be rendered by REACT in DOM
* JSX is like HTML
* JSX is compiled into JS by Babel
* JSX lets you embed dynamic content between curly braces { ... }
* JSX is XML like - tags need to be closed - e.g. <br />
* COMPONENT NAMES MUST START WITH CAPITAL
* return value needs to contain one root element
* can't return `<h1>hi</h1><Hello /><Footer />` because no root element
* root element can be empty tags (fragments)

## Multiple Components
* combine components to create an app that is maintainable
* create many reusable components and combine them
* App is often root component, and other components are passed in to App

## Props
* props is an object that is passed as parameter to a component
* allow you to pass data to components
* component (fxn definition) has `props` object as parameter
* component fxn uses data as object.property syntax inside curly braces
* e.g. `<p>Hello {props.name}</p>`
* when calling the component fxn (in `REACTDOM.render()` or inside another component) you include the props data in variables (ie key="value" syntax inside the Component tags)
* e.g., `<Hello name="Maya" />`
* if value is result of JS expn, it must be written in curly braces
* e.g., `const name="Peter"; return (<Hello name={name}>)`

# Part 1b - JavaScript section

`const` values - can't change value unless variable is pointing to an object (eg array), then can change individual values of object
let
arrays
arr.push(val)
arr.forEach(val => { // function is called once for each value in arr })

react - use functional techniques
- keep data immutable
- t/f `concat` instead of `push` - create new array instead of modifying old array
```
arr = [1, 2, 3]
newArr = arr.concat(5)
console.log(arr)
console.log(newArr)
```
### `map` method for arrays
* used often in react
```
const t = [1, 2, 3]
const m1 = t.map(value => value * 2)
console.log(m1) // [2, 4, 6]

const m2 = map(value => '<li>' + value + '</li>') // transformed from integers into html
```

### Objects
* object literals 
const object1 = {
    name: 'Arto',
    age: 35,
    education: 'PhD'
}

getting and setting object properties
```
console.log(object1.name)
object1.address = 'Helsinki'
object1['secret number'] = 12341
```
* object can have methods
* objects can be defined using constructor functions
* can also be defined using ES6 class syntax

### Functions

arrow functions
- can cut corners on parentheses if single parameter
- can remove curly braces and return statement if just single expression

### Object methods and `this`
* React hooks method - no need for defining objects with methods

arrow functions
vs
functions defined with `function` keyword

* main difference is how they view `this` keyword, ie who `this` is

#### Regular Functions
```
const arto = {
    name: 'Arto Hellas',
    greet: function() { console.log('hello my name is ' + this.name)},
}
arto.greet() // 'hello my name is Arto Hellas

referenceToGreet = arto.greet

referenceToGreet() // 'hello my name is undefined'
```
* reference to `this` in `referenceToGreet` call is `global object`

``` 
setTimeout(arto.greet, 1000) // since `setTimeout` is calling, this === global object
```

better:
```
setTimeout(arto.greet.bind(arto), 1000)
```

#### Arrow FUNCTIONS

* don't use arrow methods for objects because `this` doesn't work at all

### Classes
* React hooks method - no need for JS class syntax

```
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
```
# 1c - Component state, event handlers

## Component helper functions
* separate logic into its own function; call it when rendering
* fxn inside another fxn
* define a helper function inside the component fxn
* call the helper fxn inside curly braces inside the return/rendering stuff (the JSX)
* don't need to separately pass paremeter to helper fxn since it can access props passed to Component

```
const Hello = () => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }
    return (
        <p>Hello {props.name}, you are {props.age} years old</p>
        <p>You were probably born in {bornYear()}</p> 
    )
}
```

## Destructuring
* technique to cleanly deal with props passed to component
* destructure the props object so that each property is in its own variable in the Compnent
* then don't have to repeat `props.myproperty` every time, can just refer to `myproperty`

* destructuring in a separate line in component fxn:
```
const Hello = (props) => {
    const { name, age } = props
    ...
    return (
        <p> You are {age} years old</p>
    )
}
```
* or even more extreme, destructuring directly in function parentheses:

```
const Hello = ({name, age}) => {
    ...
    return (
        <p>you are {age} years old</p>
    )
}
```

## Page re-rendering

* example of a counter that increases as time passes or button is clicked
* in our example, we needed to call `ReactDOM.render()` several times to change what was on the screen
* repeatedly calling `ReactDOM.render()` is not recommended way of doing things

## Stateful component

* import the { usestate } fxn from react
* inside component fxn, call `usestate` with a parameter equal to the initial state you want
* by calling `usestate`, you return an array containing two items: 
* (i) the initial state (eg 0)
* (ii) a fxn that can be called to modify (set) the state
* use destructuring to assign the 2 items in the returned array to separate variables, eg a number variable and a function variable
* when the `usestate` fxn is called it does two things:
    * modifies state
    * re-renders the component, ie fxn body is re-executed

## Event Handling

* event handlers are fxns that are called when specific events occur.
* eg the onClick attribute of a button is assigned a fxn
* the fxn gets called when the button is clicked
* in JSX, the fxn can be defined directly as the value of the onClick attribute
* value assigned the onClick attribute is a function, not a function call
* YES onClick = { () => setCounter(counter + 1) }
* NO onclick = { setCounter(counter + 1) }
* latter example will keep re-rendering despite button not pressed

## Passing State to Child Components
* best practice #1 - make small, reusable components
* best practice #2 - for components that share the same changing data, it's best to "lift the state up" to their closest common ancestor (parent)
* place state in the parent component, and pass state down to child components
* that means passing properties such as `counter`, but also passing functions (event handlers) such as `increaseByOne`
* best practice - when passing event handlers, call it `prop.handleClick`

## Changes in state cause re-rendering
* calling a fxn which changes the state causes the component to re-render

## Refactoring the components
* when defining component fxn, use destructuring inside the parentheses that contain the list of parameters
* when defining component fxn, use the more compact form of arrow functions, ie cut out the curly braces and return statement if only one expression inside fxn

# 1d - a more complex state, debugging React apps

## Complex state

* when more than one piece of state you can use `usestate` fxn multiple times 
* variables can either be separate, or together in a single object
* if in a single object, event handlers have to change entire state
* gets messy
* better to use *object spread syntax*
* ie 
```
const handleLeftClick = () => {
    const newClicks = {
        ...clicks,
        left: clicks.left + 1
    }
    setClicks(newClicks)
}
```

* in react you need to create an entirely new object to return from event handler; you can't just do this
```
const handleLeftClick = () => {
    clicks.left++
    setClicks(clicks)
}
```

* react doesn't allow you to mutate state
* always change state by creating a new object

* sometimes good to store all state in single object
* other times it creates unnecessary complexity - ie store separate pieces of state in separate variables

## Handling arrays
use `concat` method to add items to array, not `push`
`concat` creates a new array, t/f consistent with react philosophy of no mutations of state
`push` will work, but don't do this - hard to debug

## Conditional rendering
* use `if` statement within component to change rendering depending on state of application

## Old React

## Debugging REact applications

keep browser console open at all times

keep code and browser open at same time

if bug, fix it before moving forward

option 1 - use console.log() to debug

add `console.log(props)` to second line after function (component) signature
console.log - dont use `+` symbol to concatenate, use `,` instead - makes object available for inspection

option 2 - write `debugger` command in your code

then when program has stopped, use Chrome console to check current state of all variables

option 3 - set breakpoints in Sources tab of CDT; then check value of variables in Scope section

option 4 - React developer tools - Components tab in CDT

## Rules of Hooks

- can't call `useState` or `useEffect` inside loop, conditional (eg if statement) or any place that is not a function defining a component

## Event handling revisited

* event handlers must be a function or a reference to a function
* can't be a function call (because event handler is assigned returned value of fxn eg undefined)
* EXCEPTION to above - when the function that is called returns another function
* can't be a string, a number, a variable assignment or an expression to be evaluated
* by using a function, the function is not executed during render; it is only executed on the event happening (eg button is clicked)

## Function that returns a function

* you can call a function in the event handler attribute (e.g. `onClick={hello()}`) if the function returns a function
* why do this? - because you can call a function with specific parameters and return a function that includes those parameters
* in other words, you can define a function that has generic functionality and can be customized with parameters
* a 'factory function'

## Passing Event Handlers to Child Components

## Do not define components within components





