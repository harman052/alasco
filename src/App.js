import React from "react";
import CurrencyConverter from "./containers/CurrencyConverter";
import Header from "./components/header";
import "./styles.scss";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <CurrencyConverter></CurrencyConverter>
    </div>
  );
}

export default App;
