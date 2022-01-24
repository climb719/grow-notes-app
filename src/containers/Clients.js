// import {  Client } from '../components/';
import React, { useState, useEffect, } from 'react'
import { useNavigate } from 'react-router-dom';

function Clients() {

    const [btnColor, setBtnColor] = useState("whitesmoke")
    const [clientData, setClientData] = useState([])
    const [filtered, setFiltered] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [currentClient, setCurrentClient] = useState('')
    const navigate = useNavigate()

    const renderClient = () => {
        console.log("you want to render a client")
        console.log(currentClient)
        navigate('/client')
      
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
           const filteredData = clientData.filter((client) => client.name.toLowerCase().startsWith(searchInput.toLowerCase()))
            setFiltered(filteredData)
            } else {
            setFiltered(clientData)}
    }
    
    const handleClick = (e) => {
        console.log(e.target.innerText)
        let client = document.getElementsByClassName('input')
        client.item(0).value = e.target.innerText
        setCurrentClient(e.target.innerText)
       
    }
    

    useEffect(() => {
            fetch("http://localhost:3000/clients")
            .then(response => response.json())
            .then(resp=> {
                console.log(resp)
                setClientData(resp)
                })}, [])
        

    return (
        <div className="clients">
        <h3 className="page-heading">Client Portal</h3>
        <p><button
        onClick={() => {
          btnColor === "whitesmoke" ? setBtnColor("gray") : setBtnColor("whitesmoke")}}
        style={{ backgroundColor: btnColor }} >Add new client...
        </button> </p>
        <div style={{ padding: 20 }}>
        <input className='input'
            placeholder='Search for a client...'
            onChange={(e) => searchItems(e.target.value)}/>
            {searchInput.length > 1 ? (
                filtered.map((client) => {
                    return (
                      <div className='filteredClients'>
                        <ul onClick={(e) => handleClick(e)}>
                            <li>{client.name} - {client.birthday}</li>
                        </ul>
                       </div>)})) : ("" )}
        </div>  
        <ul className= "icons">
        <li><img src="images/001-documents.png" alt="intake forms"/>
        <p className="content">Intake Forms</p></li>
        <li><img src="images/005-mental-health.png" alt="holding heart and mind"/>
        <p className="content">Treatment Plan</p></li>
        <li><img src="images/002-solution.png" alt="mind with puzzle"/>
        <p className="content">Progress Note</p></li>
        <li><img src="images/006-brain.png" alt="heart and brain" onClick={() => renderClient()}/>
        <p className="content">Client Overview</p></li>
        </ul>
       
        </div>
     )
    
}


export default Clients

// return currentClient.map(client => <Client key={client.id} id={client.id} name={client.mame} birthday={client.birthday} address={client.address} phone={client.phone} concern={client.concern} />)