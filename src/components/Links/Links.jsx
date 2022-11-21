import React, { useState } from 'react'
import { useProject } from '../../context/ProjectContext'
import CreateProject from '../CreateProject/CreateProject'
import BoardIcon from '../../assets/icon/IconBoard'

const Links = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { projects, getCurrent, current } = useProject()

    return (
        <nav className="nav">
            <ul>
                {projects.map((link, idx) => {
                    return (
                        <li
                            onClick={() => getCurrent(link.id)}
                            key={idx}
                            className={
                                current.title == link.title ? 'active' : ''
                            }
                        >
                            <BoardIcon fill="#828FA3" />
                            {link.title}
                        </li>
                    )
                })}
                <li
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="new-board"
                >
                    <BoardIcon fill={'#645ccb'} />+ Create New Board
                </li>
            </ul>
            {isOpen && <CreateProject setIsOpen={setIsOpen} />}
        </nav>
    )
}

export default Links
