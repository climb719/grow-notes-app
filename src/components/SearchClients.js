import React, { useState, useEffect } from 'react'
import { ClientOptions } from '.';


function SearchClients() {

 
  const [clientData, setClientData] = useState([])
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  const [currentClient, setCurrentClient] = useState('')

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
       const filteredData = clientData.filter((client) => client.name.toLowerCase().startsWith(searchInput.toLowerCase()))
        setFiltered(filteredData)
    } else {
        setFiltered(clientData)}
}

const handleClick = (selectedClient) => {
    console.log(selectedClient)
    let client = document.getElementsByClassName('input')
    setCurrentClient(selectedClient)
    console.log(selectedClient)
     client.item(0).value = selectedClient.name
}


return (
    <div style={{ padding: 20 }}>
        <input className='input'
        placeholder='Search for a client...'
        onChange={(e) => searchItems(e.target.value)}/>
        {searchInput.length > 1 ? (
        filtered.map((client) => {
            return (
                <div className='filteredClients'>
                    <ul onClick={() => handleClick(client)}>
                  
                        <li>{client.name} - {client.birthday}</li>
                    </ul>
                </div>)})) : (" ")}
    <ClientOptions currentClient={currentClient}/>
    </div>
    )
}


export default SearchClients