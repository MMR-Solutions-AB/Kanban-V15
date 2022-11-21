import React from 'react'
import './Dropdown.scss'
import { useProject } from '../../context/ProjectContext'
import Closelogo from '../../assets/icon-cross.svg'
import Links from '../Links/Links'

const Dropdown = ({ setShowDropdown }) => {
    const { projects } = useProject()

    return (
        <aside className={`dropdown`}>
            <div className="dropdown-card">
                <button
                    onClick={() => {
                        setShowDropdown((prev) => !prev)
                    }}
                    className="close-dropdown-btn"
                >
                    <img src={Closelogo} alt="" />
                </button>
                <p>ALL BOARDS ( {projects.length} )</p>

                <Links />
            </div>
        </aside>
    )
}

export default Dropdown
