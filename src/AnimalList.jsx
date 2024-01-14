export default function AnimalList(props) {
  if (!props.animals) {
    return <div>
      Loading...
    </div>
  }

  if (props.animals.length === 0) {
    return <div>
      No animals provided.
    </div>
  }


  return (
    <div>
      <h2>My Animal List</h2>
      <ul>
        {
          props.animals.map((animal) => {
            return !animal.startsWith("L") && <ListItem key={animal} animal={animal} />
          })
        }
      </ul>
    </div>
  )
}

function ListItem(props) {
  return <li>
    {props.animal}
  </li>
}

