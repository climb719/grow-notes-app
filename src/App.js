import './App.css'
import { Nav, Home, Scheduling, Resources, Client }  from './components'
import Clients from './containers/Clients';
import ToDoContainer from './containers/ToDoContainer';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="scheduling" element={ <Scheduling/> } />
    <Route path="todos" element={ <ToDoContainer/> } />
    <Route path="resources" element={ <Resources/> } />
    <Route path="clients" element={ <Clients/> } />
    <Route path="client" element={ <Client/> } />
    </Routes>  
    

       
      
    
    </div>
  );
}

export default App;
  