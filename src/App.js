
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'


function App() {
  return (

    <div classname="container1">

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
