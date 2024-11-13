const Header = (props) => {
  console.log('Header props:', props)
  return  <h1>{props.course.name}</h1>
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <p key = {index}>  
          {part.name} {" "} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = (props) => {
  console.log('Total props: ', props)
  return ( 
    <p>Number of exercises {" "}
      {props.curso.parts[0].exercises + props.curso.parts[1].exercises + props.curso.parts[2].exercises} 
    </p> 
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development', 
    parts: [ 
      {
        name: 'Fundamentals of React', 
        exercises: 10
      },
      {
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        name: 'State of a component', 
        exercises: 14
      }
   ]
  } 

  
  return (
    <div>
      <Header curso = {course} />
      <Content curso = {course} />
      <Total curso = {course} />
    </div>
  )
}

export default App
