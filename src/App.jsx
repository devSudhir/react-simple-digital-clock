import "./styles.css";
import { Clock } from "./components/Clock";
import { useState } from "react";
export default function App() {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <div className="App">
      <h1>Clock</h1>
      <Clock show={show} />
      {<button onClick={() => setShow(!show)}>Click</button>}
    </div>
  );
}
