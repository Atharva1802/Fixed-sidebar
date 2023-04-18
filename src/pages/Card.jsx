function Card(props) {
    console.log(props)
    return (
        
    <div className="card">
            <h2>{props.object.address}</h2>
            <h3>{props.object.about}</h3>
    </div>
  )
}
export default Card