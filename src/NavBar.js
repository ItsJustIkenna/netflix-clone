import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://i.pinimg.com/564x/91/6c/61/916c610076e3e6b4ed3ad215478a020b.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default NavBar;
