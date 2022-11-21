import { useState } from 'react'
import Board from './components/Board/Board'
import CreateTicket from './components/CreateTicket/CreateTicket'
import Dropdown from './components/Dropdown/Dropdown'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'

function App() {
    const [showAddTicket, setShowAddTicket] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="App">
            <Navbar
                setShowDropdown={setShowDropdown}
                showDropdown={showDropdown}
                setShowAddTicket={setShowAddTicket}
            />
            <main>
                <SideNav />
                <Board />
            </main>
            {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
            {showAddTicket && <CreateTicket setIsOpen={setShowAddTicket} />}
        </div>
    )
}

export default App
