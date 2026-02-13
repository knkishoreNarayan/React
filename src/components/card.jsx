const Card = (props) => {
  return (
    <div className='card'>


      <h1>{props.user} ({props.age})</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae!</p>

      

      <h1>{props.winner}</h1>  <h2>{props.rge}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vitae!</p>
      
    </div>
  )
}

export default Card