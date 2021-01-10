# Part 1a - React intro

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

