import React from 'react'
import './Board.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Ticket from '../Ticket/Ticket'
import { useProject } from '../../context/ProjectContext'

const Board = () => {
    const { currentProject, changeCurrentBoard } = useProject()

    function onDragend(result) {
        if (!result.destination) return
        /* Dragg Object */
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = currentProject.board[source.droppableId]
            const destinationColumn =
                currentProject.board[destination.droppableId]
            /* Items */
            const sourceItems = [...sourceColumn.items]
            const destinationItems = [...destinationColumn.items]
            /* Remove from col, add to new col */
            const [removed] = sourceItems.splice(source.index, 1)
            destinationItems.splice(destination.index, 0, removed)

            /* Set state with new data */
            changeCurrentBoard({
                ...currentProject.board,
                [destination.droppableId]: {
                    ...destinationColumn,
                    items: [...destinationItems],
                },
                [source.droppableId]: {
                    ...sourceColumn,
                    items: [...sourceItems],
                },
            })
        } else {
            const sourceColumn = currentProject.board[source.droppableId]
            const copiedItems = [...sourceColumn.items]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)
            /* Change state */
            changeCurrentBoard({
                ...currentProject.board,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: [...copiedItems],
                },
            })
        }
    }

    // return <div className="board"></div>

    return (
        <div className="board">
            <DragDropContext onDragEnd={(res) => onDragend(res)}>
                {Object.entries(currentProject.board).map(
                    ([id, column], idx) => {
                        return (
                            <div id={idx} key={id}>
                                <Droppable key={id} droppableId={id}>
                                    {(provided, snapshot) => {
                                        return (
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
                                                {column.items.map(
                                                    (item, idx) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={
                                                                    item.id
                                                                }
                                                                index={idx}
                                                            >
                                                                {(
                                                                    provided,
                                                                    snapshot
                                                                ) => {
                                                                    return (
                                                                        <Ticket
                                                                            provided={
                                                                                provided
                                                                            }
                                                                            snapshot={
                                                                                snapshot
                                                                            }
                                                                            item={
                                                                                item
                                                                            }
                                                                        />
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )
                                                    }
                                                )}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        )
                    }
                )}
            </DragDropContext>
        </div>
    )
}

export default Board
