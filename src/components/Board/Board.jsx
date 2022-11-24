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
                    {column.tickets.map((ticket) => (
                        <Ticket key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board
