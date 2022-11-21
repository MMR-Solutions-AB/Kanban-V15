import React, { useState, useContext } from 'react'
import { createContext } from 'react'
import { projectsData } from './projects-data'

const ProjectContext = createContext({})

export function useProject() {
    return useContext(ProjectContext)
}

const ProjectContextProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData)
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentProject = projects[currentIndex]

    const addTicket = (ticket) => {
        projects[currentIndex].board.stage1.items.push(ticket)
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
            board: {
                stage1: {
                    name: 'Todo',
                    items: [],
                },
                stage2: {
                    name: 'Doing',
                    items: [],
                },
                stage3: {
                    name: 'Done',
                    items: [],
                },
            },
        }
        setProjects((prev) => [...prev, data])
        setCurrentIndex(projects.length)
    }

    const changeCurrentBoard = (newData) => {
        projects[currentIndex].board = newData
        setProjects([...projects])
    }

    const value = {
        changeBoard,
        currentProject,
        changeCurrentBoard,
        projects,
        addTicket,
        addNewProject,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider
