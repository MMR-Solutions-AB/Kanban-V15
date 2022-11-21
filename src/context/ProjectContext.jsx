import React, { useState, useContext } from 'react'
import { createContext } from 'react'
import { projectsData } from './projects-data'

const ProjectContext = createContext({})

export function useProject() {
    return useContext(ProjectContext)
}
const ProjectContextProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData)
    const [current, setCurrent] = useState(projectsData[0])

    const addTicket = (ticket) => {
        setCurrent((prev) => ({
            ...prev,
            board: {
                ...prev.board,
                stage1: {
                    ...prev.board.stage1,
                    items: [...prev.board.stage1.items, ticket],
                },
            },
        }))
    }

    const getCurrent = (id) => {
        const newCurrent = projects.find((item) => {
            return item.id == id
        })
        setCurrent(newCurrent)
    }

    const addNewProject = (title) => {
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
    }

    const value = {
        current,
        setCurrent,
        projects,
        getCurrent,
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
