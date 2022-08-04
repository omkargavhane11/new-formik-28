import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import EditUser from './Components/EditUser';
import CreateUser from './Components/CreateUser';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
