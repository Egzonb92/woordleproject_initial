import logo from './logo.svg';
import './App.css';
import React from 'react';





function App() {
  const [count, setCount] = React.useState(0)

  const handleClick = () =>{
    setCount(count + 1)
  }
  
  const Button = () => {
    return( 
      <button
        onClick={handleClick}    
      >
        
       Clicked  {count} times
     </button>
   )
  }
  
  
  
  


  return (
    <div className="App">


      <Button> asd</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dette er min test.
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
