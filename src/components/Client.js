import { useLocation } from 'react-router-dom';

function Client() {

    const { state } = useLocation();

    const client = state.client

    return (
        <div className='clientInfo'>
        <ul><p>Client Info:</p>
        <li><b>Name: </b>{client.name}</li>
        <li><b>Date of Birth: </b>{client.birthday}</li>
        <li><b>Phone Number: </b>{client.phone}</li>
        <li><b>Address: </b>{client.address}</li>
        <li><b>Concern: </b>{client.concern}</li>
        </ul>
        </div>
    )

}

export default Client