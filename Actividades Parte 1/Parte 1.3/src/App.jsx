const Header = (props) => {
  console.log('Header props:', props)
  return  <h1>{props.course}</h1>
}

const Part = (props) => { 
  console.log('Part props:', props)
  return <p>{props.part.name} {props.part.exercises}</p>; 
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
      <Part part={props.parte1} />
      <Part part={props.parte2} />
      <Part part={props.parte3} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props: ', props)
  return ( <p>Number of exercises {props.parte1.exercises + props.parte2.exercises + props.parte3.exercises} </p> )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React', 
    exercises: 10
  }
 const part2 = {
    name: 'Using props to pass data', 
    exercises: 7
 }
  const part3 = {
    name: 'State of a component', 
    exercises: 14
  }
 
  
  return (
    <div>
      <Header course = {course}/>
      <Content 
        parte1={part1} 
        parte2={part2} 
        parte3={part3}
      />
      < Total
         parte1={part1} 
         parte2={part2} 
         parte3={part3} 
      />
    </div>
  )
}

export default App
