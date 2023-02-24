import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Body from "./components/body/Body"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
