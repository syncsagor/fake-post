import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Card from "./components/Card/Card";
import Data from "./components/Data/Data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Data></Data>} />
          {<Route path="/post-details" element={<Card></Card>} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
