import React from 'react'
import './Board.scss'
import Ticket from '../Ticket/Ticket'

const Board = () => {
    return (
        <div className="board">
            <div className="board-column">
                <div className="board-title">
                    <div className="board-title-icon Done"></div>
                    <h4 className="heading-s">Done</h4>
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
            <div className="board-column">
                <div className="board-title">
                    <div className="board-title-icon Todo"></div>
                    <h4 className="heading-s">Todo</h4>
                </div>

                <Ticket
                    item={{
                        id: '2',
                        title: 'Context Bug',
                        description:
                            'This is one of the longest descriptions ever',
                        tasks: ['Fix types at the same time'],
                    }}
                />
            </div>
            <div className="board-column">
                <div className="board-title">
                    <div className="board-title-icon Doing"></div>
                    <h4 className="heading-s">Doing</h4>
                </div>

                <Ticket
                    item={{
                        id: '3',
                        title: 'Context Bug',
                        description:
                            'This is one of the longest descriptions ever',
                        tasks: ['Fix types at the same time'],
                    }}
                />
                <Ticket
                    item={{
                        id: '4',
                        title: 'Context Bug',
                        description:
                            'This is one of the longest descriptions ever',
                        tasks: ['Fix types at the same time'],
                    }}
                />
            </div>
        </div>
    )
}

export default Board
