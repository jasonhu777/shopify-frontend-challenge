import React from "react";

export default function NavItem({ link, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
}
