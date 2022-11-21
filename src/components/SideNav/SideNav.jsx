import React from 'react'
import './SideNav.scss'
import { useProject } from '../../context/ProjectContext'
import Links from '../Links/Links'

const SideNav = () => {
    const { projects } = useProject()
    return (
        <div className="sidenav">
            <p>ALL BOARDS ( {projects.length} )</p>
            <Links />
        </div>
    )
}

export default SideNav
