import Person from './Person'

const Persons = (props) => {
  return (
    <div>
        {props.personsToSearch.map((person, index) => 
          <Person key={person.id} person={person} handleDeleteRequest={() => props.handleDeleteRequest(person)} /> 
        )}
      </div>
  )
}

export default Persons