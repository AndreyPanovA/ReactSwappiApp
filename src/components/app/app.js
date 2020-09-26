import React from "react";
import SwappiServ from "../../services/swappi-service";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDitails from "../person-ditails/person-ditails";
// import "./App.css";

function App() {
  SwappiServ.getAllStarships().then((res) => console.log(res));
  return (
    <div className="App">
      <Header />
      <RandomPlanet />
      <div className="row">
        <div className="col s6 center">
          <ItemList />
        </div>
        <div className="col s6 center">
          <PersonDitails />
        </div>
      </div>
    </div>
  );
}

export default App;
