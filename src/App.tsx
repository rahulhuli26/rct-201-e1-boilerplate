import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
// import useClock from "./hooks/useClock";

function App() {
  return (
    <div className="App">
      {/* Clock */}
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
      <Clock/>
      <List1/>
      <List2/>
      {/* <useClock/> */}
    </div>
  );
}

export default App;
