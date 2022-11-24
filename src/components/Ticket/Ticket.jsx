import React from 'react'
import { useState } from 'react'
import './Ticket.scss'

const Ticket = ({ ticket }) => {
    const [showsubtasks, setShowsubtasks] = useState(false)

    return (
        <div
            className="ticket"
            onClick={() => setShowsubtasks((prev) => !prev)}
        >
            <h3 className="heading-m">{ticket.title}</h3>
            <p className="body-m">{ticket.description}</p>
            <p className="body-m">{ticket.tasks.length} subtasks</p>
            <ul>
                {showsubtasks &&
                    ticket.tasks.map((ticket) => {
                        return <li key={ticket}>{ticket}</li>
                    })}
            </ul>
        </div>
    )
}

export default Ticket
