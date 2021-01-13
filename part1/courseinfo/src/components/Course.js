import React from 'react'

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course ={course} />
    <Total course={course}/>
  </div>
)
  
const Header = ({ course }) => (
    <h1>{course.name}</h1>
)

const Content = ({ course }) => (
  <div>
    {course.parts.map(part => 
      <Part key={part.id} part={part}/>
      )}
  </div>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>    
)

const Total = ({ course }) => {
  const total = course.parts.reduce( (sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <p><strong>Total of {total} exercises </strong></p>
  ) 
}

export default Course