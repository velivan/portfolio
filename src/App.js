import './App.css';
import Nav from './component/header/nav/Nav';
import langue from './component/langue/CheckLangue';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagetwo from './component/Pages/Pagetwo';
import Pageone from './component/Pages/Pageone';
import Homepage from './component/Pages/Homepage';
import Chat from './component/Chat/Chat';
import dataUser from './API/dataUser.json';
import dataMsg from './API/dataMsg.json';
import todolist from './API/todolist.json';
import Todo from './component/Todo/Todo';


function App(props) {

  return (
 <BrowserRouter>
 <div className="App">
    <Nav />
    
    <h1>{langue()  ? "EN": "UA"}</h1>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/Pageone" element={<Pageone />}/>
        <Route path="/Pagetwo" element={<Pagetwo />}/>
        <Route path="/Todo" element={<Todo todolist={todolist} myList={todolist} />}/>
        <Route path="/Chat" element={<Chat dataUser={dataUser} dataMsg={dataMsg}/>}/>
      </Routes>
    </div>
 </BrowserRouter>
  );
}

export default App;
