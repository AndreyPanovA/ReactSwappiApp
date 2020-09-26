import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div>Header</div>
      <ul className="routes">
        <li>
          <a>People</a>
        </li>
        <li>
          <a>Planets</a>
        </li>
        <li>
          <a>Starships</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
