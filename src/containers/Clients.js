import Search from '../components/Search';


const Clients = props => {

    return (
        <div className="clients">
        <h3 className="page-heading">Client Options</h3>
        <Search />
        <ul className= "icons">
        <li><img src="images/001-documents.png" alt="intake forms"/>
        <p className="content">Intake Forms</p></li>
        <li><img src="images/005-mental-health.png" alt="holding heart and mind"/></li>
        <li><img src="images/002-solution.png" alt="mind with puzzle"/></li>
        <li><img src="images/006-brain.png" alt="heart and brain"/></li>
        </ul>
       
        </div>
     )
    
}


export default Clients