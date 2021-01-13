import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course ={course} />
    <Total parts={course.parts}/>
  </div>
)

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce( (sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <p><strong>Total of {total} exercises </strong></p>
  ) 
}

/* 
arr.reduce(function( accumulator, currentValue) {
  return accumulator + currentValue
, 0}*/

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <Part key={part.id} part={part}/>
        )}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
      {
        name: 'Adobe Flash',
        exercises: 99,
        id: 5
      }
    ]
  }
  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))