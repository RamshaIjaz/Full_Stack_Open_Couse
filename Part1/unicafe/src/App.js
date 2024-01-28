import { useState } from 'react'

const Statistics = ({good, neutral, bad, total, average}) => {

  const positive = () => (good / total) * 100 + " %";
  if(total > 0){
  return (
    <>
    <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text ='all' value ={total} />
      <StatisticLine text = 'average' value ={average/total} />
      <StatisticLine text ='positive' value ={positive()} />
      </tbody>
    </>
  )}
  else {
    return (
    <div>
       <h1>statistics</h1>
        <p>No feedback given</p>
    </div>
    )
  }
}

const Button =({onClick, text}) =><><button onClick={onClick} >{text}</button></> 

const StatisticLine =({text , value}) =>{
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const App =() =>{
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const increaseGoodClicks = () => {
    const updatedGood = good+1
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
    setAverage(updatedGood-bad)
  }
  const increaseNeutralClicks = () => {
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)
    setTotal(good+updatedNeutral+bad)
  }
  const increaseBadClicks = () => {
    const updatedBad = bad+1
    setBad(updatedBad)
    setTotal(good+neutral+updatedBad)
    setAverage(good-updatedBad)
  }
  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={increaseGoodClicks} text={'good'}></Button>
      <Button onClick={increaseNeutralClicks} text={'neutral'}></Button>
      <Button onClick={increaseBadClicks} text={'bad'}></Button>
      <br>
      </br>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average}></Statistics>
    </>
  )
}

export default App;
