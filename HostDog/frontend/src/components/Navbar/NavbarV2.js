import { render } from "@testing-library/react";
import React, { useState } from "react";

export default function NavbarV2() {
  const [isActive, setisActive] = useState(false);
  return (
    <nav
      class="navbar is-warning"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <strong>HOSTDOG</strong>
        </a>
      </div>
        <a
          role="button"
          class={`navbar-burger ${isActive?" is-active":""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setisActive(!isActive)}
        >
          <span ></span>
          <span ></span>
          <span ></span>
        </a>
      <div
        id="navbarBasicExample"
        class={`navbar-menu${isActive? "is-active":""}`}
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">

              <a class="button is-white">
                <strong>Sign up</strong>
              </a>
              <a
                class="button"
                style={{ backgroundColor: "#844d35", color: "white" }}
              >
                <strong>Log in</strong>

              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
