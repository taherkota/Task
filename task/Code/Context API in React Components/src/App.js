import React, { createContext } from "react";
import CompA from "./ComA";


const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
  <>
  <FirstName.Provider value={"Taher"}>
    <LastName.Provider value={"Kotawala"}>
      <CompA/>
    </LastName.Provider>
  </FirstName.Provider>
  </>
  ); 
}

export default App;
export {FirstName, LastName};
