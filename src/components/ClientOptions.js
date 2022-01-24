

function ClientOptions(props) {


    console.log(props.currentClient)

    return (
        <div>
         
        <ul className= "icons">
        <li><img src="images/001-documents.png" alt="intake forms"/>
        <p className="content">Intake Forms</p></li>
        <li><img src="images/005-mental-health.png" alt="holding heart and mind"/>
        <p className="content">Treatment Plan</p></li>
        <li><img src="images/002-solution.png" alt="mind with puzzle"/>
        <p className="content">Progress Note</p></li>
        <li><img src="images/006-brain.png" alt="heart and brain"/>
        <p className="content">Client Overview</p></li>
        </ul>
        </div>
    )

}

export default ClientOptions