import React, { useState, useEffect } from 'react'


function Search() {
  // Declare a new state variable
 
  const [clientData, setClientData] = useState([])
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState('')

useEffect(() => {
    fetch("http://localhost:3000/clients")
    .then(response => response.json())
    .then(resp=> {
        console.log(resp)
        
        setClientData(resp)
        })
}, [])

const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
       const filteredData = clientData.filter((client) => client.name.toLowerCase().startsWith(searchInput.toLowerCase())
        )
        setFiltered(filteredData)
        }
    else{
        setFiltered(clientData)
    }
}

const handleClick = (e) => {
    console.log(e.target.innerText)
    let client = document.getElementsByClassName('input')
    client.item(0).value = e.target.innerText
}


return (
    <div style={{ padding: 20 }}>
        <input className='input'
            placeholder='Search for a client...'
            onChange={(e) => searchItems(e.target.value)}
            
        />
            {searchInput.length > 1 ? (
                filtered.map((client) => {
                    return (
                      <div className='filteredClients'>
                        <ul onClick={(e) => handleClick(e)}>
                            <li>{client.name} - {client.birthday}</li>
                        </ul>
                      </div>
                    )
                })
            ) : (
               "" 
                    )
                }
    </div>
    )
}


export default Search