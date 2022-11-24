import React, { useState, useContext } from 'react'
import { createContext } from 'react'
import { projectsData } from './projects-data'

const ProjectContext = createContext({})

export function useProject() {
    return useContext(ProjectContext)
}

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData)
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentProject = projects[currentIndex]

    console.log(currentProject)

    const addTicket = (ticket) => {
        projects[currentIndex].board[0].tickets.push(ticket)
        // make sure we rerender
        setProjects([...projects])
    }

    const changeBoard = (index) => {
        setCurrentIndex(index)
    }

    const addNewProject = (title) => {
        if (!title) return

        const data = {
            title: title,
            id: projects.length + 1,
            board: [
                {
                    name: 'Todo',
                    tickets: [],
                },
                {
                    name: 'Doing',
                    tickets: [],
                },
                {
                    name: 'Done',
                    tickets: [],
                },
            ],
        }
        setProjects((prev) => [...prev, data])
        setCurrentIndex(projects.length)
    }

    const value = {
        currentProject,
        projects,
        addTicket,
        changeBoard,
        addNewProject,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider
