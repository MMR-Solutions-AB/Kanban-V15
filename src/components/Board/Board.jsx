import React from 'react'
import './Board.scss'
import Ticket from '../Ticket/Ticket'
import { useProject } from '../../context/ProjectContext'

const Board = () => {
    const { currentProject } = useProject()
    console.log(currentProject)
    return (
        <div className="board">
            {currentProject.board.map((column) => (
                <div className="board-column" key={column.name}>
                    <div className="board-title">
                        <div
                            className={`board-title-icon ${column.name}`}
                        ></div>
                        <h4 className="heading-s">{column.name}</h4>
                    </div>

                    <Ticket
                        item={{
                            id: '1',
                            title: 'Context Bug',
                            description:
                                'This is one of the longest descriptions ever',
                            tasks: ['Fix types at the same time'],
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default Board
