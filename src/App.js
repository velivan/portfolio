import './App.css';
import Nav from './component/header/nav/Nav';
import len from './component/langue/CheckLangue';


function App() {
  console.log(len())
  return (

    <div className="App">
    <Nav />
    
    <h1>{len()  ? "EN": "UA"}</h1>
     <h1>My Portfolio</h1>
     <h2>Test Git</h2> 
     <p>I'm codin on iPad Pro</p>
     <a href="#test">test link</a>
    </div>
  );
}

export default App;
