import React from "react";
import "./Navbar.scss";
import IconLogo from "../../assets/icon/IconLogo";
import { useProject } from "../../context/ProjectContext";
import uplogo from "../../assets/icon-chevron-up.svg";
import downlogo from "../../assets/icon-chevron-down.svg";

const Navbar = ({ setShowAddTicket, setShowDropdown, showDropdown }) => {
  const { current } = useProject();

  return (
    <div className="navbar">
      <div className="logo-container">
        <IconLogo />
        <h1>Kanban</h1>
      </div>
      <section className="nav-heading-section">
        <IconLogo />
        <h2>{current.title}</h2>
        <button
        className="arrow-btn"
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          <img src={showDropdown ? uplogo : downlogo} alt="" />
        </button>
      </section>
      <section className="nav-btn-section">
        <button
          onClick={() => {
            setShowAddTicket((prev) => !prev);
          }}
        >
          Add New Task
        </button>
      </section>
    </div>
  );
};

export default Navbar;
