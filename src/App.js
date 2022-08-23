import logo from './logo.svg';
import './App.css';
import React from 'react';





function App() {
  const [count, setCount] = React.useState(
    () => Number(window.localStorage.getItem("countClicks"))
  )

  React.useEffect(
    () => {
      window.localStorage.setItem("countClicks", count)
      console.log("saving locally")
    },
    [count]
  )

  const handleClick = () =>{
    setCount(Number(count + 1))
  }
  
  const Button = (props) => {
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
      <Button/>
    </div>
  );
}

export default App;
