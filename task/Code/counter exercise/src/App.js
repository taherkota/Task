import { useState } from 'react';
import './App.css';
function App() {
  const [numb, setNumb] = useState(5)
  const onInc = () =>{
    setNumb(numb+1);
  }
  const onDec = () =>{
    setNumb(numb-1);
  }
  return (
    <div className='Wrapper'>
      <button onClick={onInc} className='button'>
        Increament +1
      </button>
      <button onClick={onDec} className='button'>
        Decreament -1
      </button><br/>
      <div className='counter'>{numb}</div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
