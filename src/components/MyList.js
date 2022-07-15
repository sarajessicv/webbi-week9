
function MyList({header, items}) {

    const listItems = items.map((element) => (
        <li key={element.id}>{element.text}</li>
    ))
    
  return (
    <div>
      <h3>My List </h3>
      <h1>{header}</h1>
      <ol>{listItems}</ol>
    </div>
  )
}

export default MyList
