import React, { useState } from 'react'

const Button = ({name, func}) => (
  <button onClick={func}>{name}</button>
)

const Statistic = ( {name, count} ) => {
  if(name === "positive")
    return (
      <tr><td>{name}</td><td>{count}%</td></tr>
    )
  return (<tr><td>{name}</td><td>{count}</td></tr>)
}

const Statistics = ( {clicks} ) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const avg = (clicks.good - clicks.bad) / total
  const positive = (clicks.good / total) * 100

  if(total === 0) return (
    <div>
      No feedback given
    </div>
  )

  return (
    <div>
      <table>
        <tbody>
          <Statistic name="good" count={clicks.good} />
          <Statistic name="neutral" count={clicks.neutral} />
          <Statistic name="bad" count={clicks.bad} />
          <Statistic name="total" count={total} />
          <Statistic name="average" count={avg} />
          <Statistic name="positive" count={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const inc = (type) => {
    return () => {
      const newClicks = {...clicks}
      newClicks[type] += 1
      setClicks(newClicks)
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" func={ inc('good') } />
      <Button name="neutral" func={ inc('neutral')  } />
      <Button name="bad" func={inc('bad') } />
      <h1>Statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App