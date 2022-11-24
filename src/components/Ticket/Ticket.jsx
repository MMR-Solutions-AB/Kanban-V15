import React from 'react'
import { useState } from 'react'
import './Ticket.scss'

const Ticket = ({ item }) => {
    const [showsubtasks, setShowsubtasks] = useState(false)

    return (
        <div
            className="ticket"
            onClick={() => setShowsubtasks((prev) => !prev)}
        >
            <h3 className="heading-m">{item.title}</h3>
            <p className="body-m">{item.description}</p>
            <p className="body-m">{item.tasks.length} subtasks</p>
            <ul>
                {showsubtasks &&
                    item.tasks.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
            </ul>
        </div>
    )
}

export default Ticket
