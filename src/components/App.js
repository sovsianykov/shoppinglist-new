import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./AppNavbar/AppNavbar";
import ShoppingList from "./ShoppingList/ShoppingList";
import OrdersList from "./OrdersList/OrdersList";

function App() {
  return (
    <div className="App">
    <AppNavbar/>
      <ShoppingList/>
      <OrdersList/>
    </div>
  );
}

export default App;
