import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
    const parts = props.parts;
    const partTitlesAndExercises = parts.map((part) =>
      <p key={part.title}>
        {part.title} {part.numberOfExercises}
      </p>
    );
    return (
      <>{partTitlesAndExercises}</>
    );
}

const Total = (props) => {
  const parts = props.parts;
  let totalExercises = 0;
  for (let i = 0; i < parts.length; i++) {
    totalExercises += parts[i].numberOfExercises;
  }
  return (
    <p>Number of exercises {totalExercises} </p>  
  );
}

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      title: 'Fundamentals of React',
      numberOfExercises: 10
    },
    {
      title: 'Using props to pass data',
      numberOfExercises: 7
    },
    {
      title: 'State of a component',
      numberOfExercises: 14
    } 
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

