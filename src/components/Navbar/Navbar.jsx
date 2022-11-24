import React from 'react'
import './Navbar.scss'
import IconLogo from '../../assets/icon/IconLogo'
import { useProject } from '../../context/ProjectContext'
import uplogo from '../../assets/icon-chevron-up.svg'
import downlogo from '../../assets/icon-chevron-down.svg'

const Navbar = () => {
    const { currentProject } = useProject()

    return (
        <div className="navbar">
            <div className="logo-container">
                <IconLogo />
                <h1>Kanban</h1>
            </div>
            <section className="nav-heading-section">
                <IconLogo />
                <h2>{currentProject.title}</h2>
                <button className="arrow-btn">
                    <img src={uplogo} alt="" />
                </button>
            </section>
            <section className="nav-btn-section">
                <button>Add New Task</button>
            </section>
        </div>
    )
}

export default Navbar
