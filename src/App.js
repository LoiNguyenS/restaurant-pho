
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import Notes from './pages/HomePage'
import Note from './pages/Note'


function App() {
  return (
    <NavBar />
    <div classname="container">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
