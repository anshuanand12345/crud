import Home from './Home';
import './App.css';
import About from './About';
import BasicExample from './Navbar';
import { Route, Routes } from "react-router-dom";
import Adduser from './Adduser';
import View from './View';
import Edit from './Edit';



function App() {
  return (
    <div className="App">
    <BasicExample />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/adduser" element={<Adduser />}></Route>
        <Route exact path="/view" element={<View />}></Route>
        <Route exact path="/edit/:id" element={<Edit />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
