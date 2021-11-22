const Header = ({text}) => (<h1>{text}</h1>)

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map(part => 
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      )}
    </ul>
  )
}

const Part = ({name, exercises, id}) => (
  <li key={id}>
    {name} {exercises}
  </li>
)

const Total = ({parts}) => {
  const sum = parts.map(part => part.exercises).reduce((a, b) => a + b)
  return (
    <b>
      A total of {sum} exercises
    </b>
  )
}

const Course = ({course}) => {
  return (
    <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course