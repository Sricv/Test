import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Main from './Components/Main';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}
