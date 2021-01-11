import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({text, value, unit=''}) => (
  <span>{text} {value} {unit}<br /></span>
)

const Statistics = (props) => {
  const [ good, neutral, bad, all, average, positive ]  = props.stats
  return (
  <div>
    <Display text={good.text} value={good.value} />
    <Display text={neutral.text} value={neutral.value} />
    <Display text={bad.text} value={bad.value} />
    <Display text={all.text} value={all.value} />
    <Display text={average.text} value={average.value} />
    <Display text={positive.text} value={positive.value} unit="%" />
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [
    {
      text: "good",
      value: good
    },
    {
      text: "neutral",
      value: neutral
    },
    {
      text: "bad",
      value: bad
    },
    {
      text: "all",
      value: good + neutral + bad
    },
    {
      text: 'average',
      value: (good - bad) / (good + neutral + bad)
    },
    {
      text: 'positive',
      value: 100 * (good / (good + neutral + bad))
    }
  ] 
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics stats={stats} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
