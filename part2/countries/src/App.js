import react, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return (
    <div>
      Find countries: <input value={props.newSearch} onChange={props.handleSearchChange} />
    </div>
  )
}

const Countries = ({countries}) => {
  console.log(countries)
  if (countries.length >= 250) {
    return ''
  } else if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length < 10 && countries.length > 1) {
    return (
      <div>
        {countries.map(country => <p key={country.cioc}>{country.name}</p>)}
      </div>
    )
  } else if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
        </ul>
        <img src={country.flag} height="100" width="150"/>
      </div>
    )
  } else {
    return ''
  }
}

const App = () => {
  const [ newSearch, setNewSearch ] = useState('')
  const [ countries, setCountries ] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => 
        setCountries(response.data)
      )
  }, [])

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
    
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App;