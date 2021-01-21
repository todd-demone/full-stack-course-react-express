import Filter from './components/Filter'
import noteService from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  // State
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  ////////////////////////
  // Functions
  ///////////////////////
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = { 
      name: newName,
      number: newNumber
    }
    const filteredPersons = persons.filter(person => person.name === newName)
    if (filteredPersons.length > 0) {
      const message = `${newName} is already added to phonebook, replace the old number with a new one?`
      const confirmedDelete = window.confirm(message)
      if(confirmedDelete) {
        noteService.
          updatePerson(personObject, filteredPersons[0].id)
          .then(revisedPerson => {
            const revisedPeople = persons.filter(person => person.name !== newName)
            setPersons(revisedPeople.concat(revisedPerson))
            setNewNumber('')
            setNewName('')
          })
      }
    } else {
      noteService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewNumber('')
          setNewName('')
        } )
    }
  }

  const hook = () => {
    noteService
      .getAll()
        .then(initialPersons => 
          setPersons(initialPersons)
        )
  }
  
  useEffect(hook, [])

  const personsToSearch = !newSearch
    ? persons
    : persons.filter( (person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  ////////////////////////// 
  // Event Handlers
  //////////////////////////

  const handleDeleteRequest = (personToDelete) => {
    const message = `Delete ${personToDelete.name}?`
    const confirmedDelete = window.confirm(message)
    if(confirmedDelete) {
      noteService.
        deletePerson(personToDelete.id)
        .then(response => {
          const revisedPersons = persons.filter( person => person.id !== personToDelete.id )
          setPersons(revisedPersons)
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  // JSX
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h3>Numbers</h3>
      <Persons personsToSearch={personsToSearch} handleDeleteRequest={handleDeleteRequest} />
    </div>
  )

}

export default App;