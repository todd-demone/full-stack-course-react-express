const Person = ({person, handleDeleteRequest}) => {
  return (
    <div key={person.id}>{person.name} {person.number} 
      <button onClick={handleDeleteRequest}>Delete</button>
    </div>
  )
}

export default Person