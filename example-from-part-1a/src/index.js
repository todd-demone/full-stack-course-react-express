import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const App = (props) => {
//   const{counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(
//     <App counter={counter} />,
//     document.getElementById('root')
//   )
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

// //  section 1c, up until page re-rendering
// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name="Peter"
//   const age=10
  
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10}/>
//       <Hello name={name} age={age}/>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//-------------------
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout( () => 
//     setCounter(counter + 1),
//     3000
//   )

//   console.log('rendering', counter);

//   return (
//     <div>
//       <div>{counter}</div>
//     </div>
    
//   )
// }

//----------------------------
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={ () => setCounter(counter + 1) } >
//         plus
//       </button>
//       <button onClick={ () => setCounter(0) } >
//         reset
//       </button>
//     </div>
//   )
// }

//----------------------------------------------

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const decreaseByOne = () => setCounter(counter - 1)

//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button 
//         handleClick={increaseByOne} 
//         text="plus" 
//       />
//       <Button 
//         handleClick={setToZero} 
//         text="zero" 
//       />
//       <Button 
//         handleClick={decreaseByOne}
//         text="minus"
//       />
//     </div>
//   )
// }
// const Display = ({ counter }) => <div>{props.counter}</div>

// const Button = ({ handleClick, text }) => (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )

//-----------------------------------------------
// const App = () => {
//   const [ left, setLeft ] = useState(0)
//   const [ right, setRight ] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={ () => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={ () => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }

// //--------------------------------------------

// const App = () => {
//   const [ clicks, setClicks ] = useState(
//     {
//       left: 0,
//       right: 0
//     }
//   )

//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left + 1,
//       right: clicks.right
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       left: clicks.left,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// //--------------------------------------------

// const App = () => {
//   const [ clicks, setClicks ] = useState(
//     {
//       left: 0,
//       right: 0
//     }
//   )

//   const handleLeftClick = () => {
//     const newClicks = {
//       ...clicks,
//       left: clicks.left + 1
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// //--------------------------------------------

// const App = () => {
//   const [ clicks, setClicks ] = useState(
//     {
//       left: 0,
//       right: 0
//     }
//   )

//   const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

//   const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// //--------------------------------------------

// const App = () => {

//   const [ left, setLeft ] = useState(0)
//   const [ right, setRight ] = useState(0)
//   const [ allClicks, setAll ] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

// //--------------------------------------------

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button pressing history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const App = () => {

//   const [ left, setLeft ] = useState(0)
//   const [ right, setRight ] = useState(0)
//   const [ allClicks, setAll ] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}<span> </span> 
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       <span> </span>{right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// //--------------------------------------------

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button pressing history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => ( 
//   <button onClick={onClick}>
//     {text}
//   </button> 
// )    

// const App = () => {

//   const [ left, setLeft ] = useState(0)
//   const [ right, setRight ] = useState(0)
//   const [ allClicks, setAll ] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}<span> </span> 
//       <Button onClick={handleLeftClick} text='left' />
//       <Button onClick={handleRightClick} text='right' />
//       <span> </span>{right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// //----------------------------
// const App = () => {
//   const [ value, setValue ] = useState(10)

//   const handleClick = () => {
//     console.log('clicked the button')
//     setValue(0)
//   }
//   return (
//     <div>
//       {value}
//       <button onClick={handleClick}>reset to zero</button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// //----------------------------
// const App = () => {
//   const [ value, setValue ] = useState(10)

//   const setToValue = (newValue) => () => setValue(newValue)

//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>zero</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }

// //----------------------------
// const App = () => {
//   const [ value, setValue ] = useState(10)

//   const setToValue = (newValue) => setValue(newValue)

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>thousand</button>
//       <button onClick={() => setToValue(0)}>zero</button>
//       <button onClick={() => setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }

// //----------------------------

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [ value, setValue ] = useState(10)

//   const setToValue = (newValue) => setValue(newValue)

//   return (
//     <div>
//       {value}
//       <Button handleClick={ () => setToValue(1000) } text="thousand" />
//       <Button handleClick={ () => setToValue(0) } text="reset" />
//       <Button handleClick={ () => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

// //----------------------------

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [ value, setValue ] = useState(10)

//   const setToValue = (newValue) => setValue(newValue)

//   const Display = (props) => <div>{props.value}</div>
//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={ () => setToValue(1000) } text="thousand" />
//       <Button handleClick={ () => setToValue(0) } text="reset" />
//       <Button handleClick={ () => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }


//----------------------------
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [ value, setValue ] = useState(10)

  const setToValue = (newValue) => setValue(newValue)

  return (
    <div>
      <Display value={value} />
      <Button handleClick={ () => setToValue(1000) } text="thousand" />
      <Button handleClick={ () => setToValue(0) } text="reset" />
      <Button handleClick={ () => setToValue(value + 1)} text="increment" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
