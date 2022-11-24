import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Board from './components/Board/Board'
import SideNav from './components/SideNav/SideNav'

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <SideNav />
                <Board />
            </main>
        </div>
    )
}

export default App
