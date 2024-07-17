// import "../src/App.css";
import Headname from "../src/components/headname.jsx";
import Input from "../src/components/input.jsx";

import Task1 from "./components/task1.jsx";
import Task2 from "./components/task2.jsx";

import Task3 from "../src/components/task3.jsx";
import "./App.css";

function Application() {
  return (
    <div style={{ textAlign: "center" }}>
      <Headname></Headname>
      <Input></Input>

      <Task1></Task1>
      <Task2></Task2>

      <Task3></Task3>
    </div>
  );
}

export default Application;
