import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <div className="navLeft">
        <div className="hamburger">
          <img src="hamburger.svg" alt="" />
        </div>
        <div className="logo">
          <img src="keeplogo.svg" alt="" />
          <h2 className="logoWord">Keep</h2>
        </div>
      </div>

      <div className="navMiddle">
        <div className="searchbarbutton">
          <img src="searchbarbutton.svg" alt="" />
        </div>
        <div className="searchBar">
          <input
            type="search"
            name="Search"
            id="searchBar"
            placeholder="Search"
          />
        </div>
        <div className="crossImage">
          <img src="cross.svg" alt="" />
        </div>
      </div>

      <div className="navRight">
        <div className="leftItems">
          <ul>
            <li>
              <img src="reloadicon.svg" alt="settings" />
            </li>
            <li>
              <img src="listview.svg" alt="settings" />
            </li>
            <li>
              <img src="settings.svg" alt="settings" />
            </li>
          </ul>
        </div>
        <div className="rightItems">
          <ul>
            <li>
              <img src="settings.svg" alt="settings" />
            </li>
            <li>
              <img src="settings.svg" alt="settings" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
