import React from "react";
import styles from "./Navbar.module.css";

import searchIcon from "../../assets/search-icon.svg";
import emojiIcon from "../../assets/emoji-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img
        src={emojiIcon}
        alt="emoji icon"
        className={styles.navIcon}
        style={{ marginRight: "8px" }}
      />
      <img
        src={searchIcon}
        alt="search icon"
        className={styles.navIcon}
        style={{ marginTop: "3px" }}
      />
      <span className={styles.navTitle}>er</span>
    </nav>
  );
};

export default Navbar;
