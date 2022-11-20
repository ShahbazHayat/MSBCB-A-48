import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




import React, { useState } from 'react';
// import LoginForm from './component/Login';
import Counter from './component/Counter';
function App(){
  return(
    // <><div>
    //   <h1>{userName}</h1>
    //   <h2>{lastName}</h2>
    //   <button type="button" onClick={() => setName('Haider')}>Ok</button>
    //   <button onClick={updatedValues}>click</button>
    // </div>
    // <LoginForm />
    <Counter />
  );
  }

export default App;