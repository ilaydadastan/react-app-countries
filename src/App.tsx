import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import CountryList from "./components/CountryList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container mt-2">
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/about" element={<AboutUs />}  />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
