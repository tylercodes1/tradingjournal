import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { navLinks } from "../../data/links";
import { NavLink } from "react-router";
import Backdrop from "../Backdrop/Backdrop";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <span className="font-bold">Trading Journal</span>
        <Backdrop active={menuOpen} onClick={() => setMenuOpen(false)} />
        {/* Desktop / mobile links */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`${styles.navLinksContainer} ${menuOpen ? styles.open : ""}`}
        >
          {navLinks.map((link) => (
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
