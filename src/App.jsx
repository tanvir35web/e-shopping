import React from "react";
import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="font-bodyFont">
      <Header />
      <Home />
    </div>
  );
}

export default App;
