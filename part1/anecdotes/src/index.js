import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({fxn, text}) => (
    <button onClick={fxn}>{text}</button>
)

const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </div>
  )
}

const App = (props) => {
  const [ votes, setVotes ] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))
  const [ selected, setSelected ] = useState(0)
  const [ mostVotes, setMostVotes ] = useState(0)

  const placeVote = () => { 
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    if (votes[selected] + 1 > votes[mostVotes]) {
      setMostVotes(selected)
    }
  } 

  const chooseNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))   
  }

  console.log(selected)
  console.log(votes)
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Button fxn={placeVote} text="vote" />
      <Button fxn={chooseNextAnecdote} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={props.anecdotes[mostVotes]} votes={votes[mostVotes]}  />
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
