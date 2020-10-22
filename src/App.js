import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Contact name="Theodore Dunn" avatar="https://randomuser.me/api/portraits/men/34.jpg" online />
      <Contact name="Hugh Howell" avatar="https://randomuser.me/api/portraits/men/77.jpg" offline />
      <Contact name="Megan White" avatar="https://randomuser.me/api/portraits/women/80.jpg" online />
    </div>
  );
}

export default App;
