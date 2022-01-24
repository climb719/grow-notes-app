import { useLocation } from 'react-router-dom';

function Client() {

    const { state } = useLocation();

    console.log(state.client)

    return (
        <div>
        <p>Client Info:</p>
        </div>
    )

}

export default Client