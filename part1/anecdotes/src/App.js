import React, { useState } from 'react'

const VoteInfo = ({count}) => {
  const countToShow = count === undefined ? 0 :count
  return (
    <p>has {countToShow} votes</p>
  )
}

const Button = ({func, text}) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const length = anecdotes.length
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [maxVote, setMaxVote] = useState({
    count: 0,
    index: 0
  })

  const onClickNext = () => {
    const rand = Math.floor(Math.random() * length)
    setSelected(rand)
  }

  const onClickVote = () => {
    const copy = {...votes}
    if(copy[selected] === undefined) copy[selected] = 0
    copy[selected]+=1
    if(copy[selected] > maxVote.count){
      setMaxVote({count: copy[selected], index: selected})
    }
    setVotes(copy)
  }

  return (
    <div>
      <p>Anecdote of the day</p>
      <p>{anecdotes[selected]}</p>
      <VoteInfo count={votes[selected]} />
      <Button func={onClickNext} text='Next anecdote' />
      <Button func={onClickVote} text='Vote' />
      <p>Anecdote with the most votes</p>
      <p>{anecdotes[maxVote.index]}</p>
      <VoteInfo count={votes[maxVote.index]} />
    </div>
  )
}

export default App