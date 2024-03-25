import React from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;