import React from "react";
import styles from "./Backdrop.module.css";

export default function Backdrop({ active, onClick }) {
  if (!active) return null; // don't render if not active

  return <div className={styles.backdrop} onClick={onClick} />;
}
