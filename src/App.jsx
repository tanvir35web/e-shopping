import React from "react";
import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-bodyFont">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
