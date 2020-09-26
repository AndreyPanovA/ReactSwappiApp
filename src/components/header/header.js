import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div>Header</div>
      <ul className="routes">
        <li>
          <a href="https://dev.finmars.com/api/v1/ui/list-layout/?page=2">
            People
          </a>
        </li>
        <li>
          <a href="https://dev.finmars.com/api/v1/ui/list-layout/?page=2">
            Planets
          </a>
        </li>
        <li>
          <a href="https://dev.finmars.com/api/v1/ui/list-layout/?page=2">
            Starships
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
