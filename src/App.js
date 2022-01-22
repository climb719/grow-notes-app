import './App.css'
import { Nav, Home }  from './components'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
    <Route path="/" element={ <Home/> } />
    </Routes>  
    
    <p>Test  </p>
       
      
    
    </div>
  );
}

export default App;
  