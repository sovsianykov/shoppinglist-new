import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./AppNavbar/AppNavbar";
import ShoppingList from "./ShoppingList/ShoppingList";

function App() {
  return (
    <div className="App">
    <AppNavbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
