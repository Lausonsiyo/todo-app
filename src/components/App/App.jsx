//REACT IMPORTS
// import { useState } from "react";

//STYLE IMPORTS
import "./App.css";

//COMPONENT IMPORTS
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
