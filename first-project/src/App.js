import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/all" element = {<AllUsers/>}/>
          <Route path = "/add" element = {<AddUsers/>}/>
          <Route path = "/edit/:id" element = {<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
