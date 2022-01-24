import './App.css'
import { Nav, Home, Scheduling, ToDo, Resources, Client }  from './components'
import Clients from './containers/Clients';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="scheduling" element={ <Scheduling/> } />
    <Route path="toDo" element={ <ToDo/> } />
    <Route path="resources" element={ <Resources/> } />
    <Route path="clients" element={ <Clients/> } />
    <Route path="client" element={ <Client/> } />
    </Routes>  
    

       
      
    
    </div>
  );
}

export default App;
  