# Part 1a - Fundamentals of React

## ReactDOM.render()
argument 1- takes a Component
argument 2 - tells it where in DOM to render that component

## Components
* a JS function
* written in JSX
* returns element(s) to be rendered by REACT in DOM
* JSX is like HTML
* JSX is compiled into JS by Babel
* JSX lets you embed dynamic content between { ... }
* JSX is XML like - tags need to be closed - e.g. <br />
* COMPONENT NAMES MUST START WITH CAPITAL
* content needs to contain one root element
* can't return `<h1>hi</h1><Hello /><Footer />` because no root element
* root element can be empty tags (fragments)

## Multiple Components
* combine components to create an app that is maintainable
* create many reusable components and combine them
* App is often root component, and other components are passed in to App

## Props
* allow you to pass data to components
* component (fxn definition) has `props` object as parameter
* fxn definition uses data as object.property syntax inside curly braces
* e.g. `<p>Hello {props.name}</p>`
* when calling the component (in `REACTDOM.render()` or inside another component) you include the props data in variables (ie key="value" syntax inside the Component tags)
* e.g., `<Hello name="Maya" />`
* if value is result of JS expn, it must be written in curly braces
* e.g., `const name="Peter"; return (<Hello name={name}>)`


# JavaScript section

const - can't change value unless variable is pointing to an object (eg array), then can change individual values of object
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
* also using ES^ class syntax

### Functions

arrow functions
- can cut corners on parentheses if single parameter
- can remove curly braces and return statement if just single expression