import { Routes, Route, Link } from "react-router-dom";
import Exercises from "./components/Exercises";
import Plans from "./components/Plans";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       Hej Ida
      </header>   
      <Routes>
        <Route path="/" element={<Plans />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>  
    </div>
  );
}

export default App;