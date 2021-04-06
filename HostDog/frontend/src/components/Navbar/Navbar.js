import { render } from "@testing-library/react";
import React from "react";

export default function Navbar() {
  return (
    <nav
      class="navbar is-warning"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <button id="navbarBurger" class="navbar-burger"  data-target="navMenuDocumentation" >
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-white">
                <strong>Sign up</strong>
              </a>
              <a class="button is-warning">
                <strong>Log in</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
