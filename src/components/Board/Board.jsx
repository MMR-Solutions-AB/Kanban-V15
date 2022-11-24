import React from 'react'
import './Board.scss'
import Ticket from '../Ticket/Ticket'
import { useProject } from '../../context/ProjectContext'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const Board = () => {
    const { currentProject } = useProject()
    console.log(currentProject)

    function onDragend(result) {
        console.log('hsdhadhsdhshd')
        console.log(result)
        if (!result.destination) return
        /* Dragg Object */
        const { source, destination } = result

        console.log(source, destination)

        // if (source.droppableId !== destination.droppableId) {
        //     const sourceColumn = currentProject.board[source.droppableId]
        //     const destinationColumn =
        //         currentProject.board[destination.droppableId]
        //     /* Tickets */
        //     const sourceTickets = [...sourceColumn.tickets]
        //     const destinationTickets = [...destinationColumn.tickets]
        //     /* Remove from col, add to new col */
        //     const [removed] = sourceTickets.splice(source.index, 1)
        //     destinationTickets.splice(destination.index, 0, removed)

        /* Set state with new data */
        // changeCurrentBoard({
        //     ...currentProject.board,
        //     [destination.droppableId]: {
        //         ...destinationColumn,
        //         tickets: [...destinationTickets],
        //     },
        //     [source.droppableId]: {
        //         ...sourceColumn,
        //         tickets: [...sourceTickets],
        //     },
        // })
        // } else {
        //     const sourceColumn = currentProject.board[source.droppableId]
        //     const copiedTickets = [...sourceColumn.tickets]
        //     const [removed] = copiedTickets.splice(source.index, 1)
        //     copiedTickets.splice(destination.index, 0, removed)
        //     /* Change state */
        //     // changeCurrentBoard({
        //     //     ...currentProject.board,
        //     //     [source.droppableId]: {
        //     //         ...sourceColumn,
        //     //         tickets: [...copiedTickets],
        //     //     },
        //     // })
        // }
    }

    return (
        <div className="board">
            <DragDropContext onDragEnd={(res) => onDragend(res)}>
                {currentProject.board.map((column, idx) => (
                    <div id={idx} key={column.name}>
                        <Droppable key={column.name} droppableId={column.name}>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    active={snapshot.isDraggingOver.toString()}
                                    className="board-column"
                                >
                                    <div className="board-title">
                                        <div
                                            className={`board-title-icon ${column.name}`}
                                        ></div>
                                        <h4 className="heading-s">
                                            {column.name}
                                        </h4>
                                    </div>
                                    {column.tickets.map((ticket, idx) => (
                                        <Draggable
                                            key={ticket.id}
                                            draggableId={ticket.id}
                                            index={idx}
                                        >
                                            {(provided, snapshot) => {
                                                return (
                                                    <Ticket
                                                        provided={provided}
                                                        snapshot={snapshot}
                                                        ticket={ticket}
                                                    />
                                                )
                                            }}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </DragDropContext>
        </div>
    )
}

export default Board
