import { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fruits from "./Pages/Fruits";
import Fresh from "./Pages/Fresh";
import Vegetables from "./Pages/Vegetables";
import "./App.css";
import Layouts from "./Components/Layouts";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";
import RicycleBin from "./RicycleBin/RicycleBin";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegetables" element={<Vegetables/>} />
          <Route path="/fresh" element={<Fresh />} />
          <Route path="/RicycleBin" element={<RicycleBin />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;