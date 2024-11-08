const Header = (props) => {
  console.log('Header props:', props)
  return  <h1>{props.course}</h1>
}

const Part = (props) => { 
  console.log('Part props:', props)
  return <p>{props.part} {props.exercises}</p>; 
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
      <Part part={props.parte1} exercises={props.actividades1} />
      <Part part={props.parte2} exercises={props.actividades2} />
      <Part part={props.parte3} exercises={props.actividades3} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props: ', props)
  return ( <p>Number of exercises {props.actividades1 + props.actividades2 + props.actividades3} </p> )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 =14
  
  return (
    <div>
      <Header course = {course}/>
      <Content 
        parte1={part1} actividades1={exercises1}
        parte2={part2} actividades2={exercises2}
        parte3={part3} actividades3={exercises3}
      />
      < Total
        actividades1={exercises1}
        actividades2={exercises2}
        actividades3={exercises3}  
      />
    </div>
  )
}

export default App
