import React, { useState, useEffect } from "react";
import SwappiServ from "../../services/swappi-service";
import "./random-planet.scss";
const RandomPlanet = () => {
  const [state, setState] = useState({
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  });

  const { id, name, population, rotationPeriod, diameter } = state;
  useEffect(() => {
    const id = Math.floor(Math.random() * 25) + 2;
    SwappiServ.getPlanet(10).then(
      ({ name, population, rotation_period, diameter }) =>
        setState((prev) => {
          return {
            ...prev,
            id,
            name: name,
            population: population,
            rotationPeriod: rotation_period,
            diameter,
          };
        })
    );
  }, []);

  return (
    <div className="random">
      <div className="row">
        <div className="col s6 center">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt=""
          />
        </div>
        <div className="col s6 center">
          <div>
            <h4> {name}</h4>
            <ul className="collection">
              <li className="collection-item">
                <span>Population: </span>
                <span>{population}</span>
              </li>
              <li className="collection-item">
                <span>Rotation Period: </span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="collection-item">
                <span>Diameter: </span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomPlanet;
