import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ selected, setSelected ] = useState(0)
  const [ points, setPoints ] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))
  const [ popular, setPopular ] = useState(0)
  
  const chooseNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))   
  }

  const vote = () => { 
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    determineMostPopular()
  } 
  
  // debugging
  console.log(selected)
  console.log(points)

  // returns index of anecdote with most votes
  const determineMostPopular = () => {
    let most = 0
    for (let i = 1; i < points.length; i++) {
      if (points[most] < points[i]) {
        most = i
      }
    }
    setPopular(most)
  }

    

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <span>{props.anecdotes[selected]}</span><br />
      <span>has {points[selected]} votes</span><br />
      <button onClick={vote}>vote</button>
      <button onClick={chooseNextAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <span>{props.anecdotes[popular]}</span>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
