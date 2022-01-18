import React from "react";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-25">
      <div className="ps-1 pe-0 container-fluid col-10 col-lg-8 col-xl-6 col-xxl-5">
        <ul className="navbar-nav me-0 mb-2 mb-lg-0 d-flex align-items-center justify-content-between pt-1">
          <li className="nav-item me-3 ms-1">
            <h1 className="h4">
              Astronomy Picture of the Day(s)
              <br />- Infinite Scroll by Ziyang Hu
            </h1>
          </li>
          <NavItem
            link={"https://github.com/jasonhu777/shopify-frontend-challenge"}
            text={"Project Code"}
          />
          <NavItem
            link={"https://www.linkedin.com/in/jasonhu-/"}
            text={"LinkedIn"}
          />
          <NavItem link={"https://beach-head-1980.web.app/"} text={"JS-Game"} />
          <NavItem
            link={"https://jasonhuportfolio.web.app/"}
            text={"Portfolio"}
          />
        </ul>
      </div>
    </nav>
  );
}
