import './App.css';
import Nav from './component/header/nav/Nav';
import langue from './component/langue/CheckLangue';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Pagetwo from './component/Pages/Pagetwo';
import Pageone from './component/Pages/Pageone';
import Homepage from './component/Pages/Homepage';
import Chat from './component/Chat/Chat';


function App() {
  return (
 <BrowserRouter>
 <div className="App">
    <Nav />
    
    <h1>{langue()  ? "EN": "UA"}</h1>
     <h1>My Portfolio</h1>
     <h2>Test Git</h2> 
     <p>I'm codin on iPad Pro</p>
     <a href="#test">test link</a>
     <Routes>
     <Route path="/" element={<Homepage />}/>
     <Route path="/Pageone" element={<Pageone />}/>
     <Route path="/Pagetwo" element={<Pagetwo />}/>
     <Route path="/Chat" element={<Chat />}/>
     </Routes>
     
      

     
    
 
    </div>
 </BrowserRouter>
  );
}

export default App;
