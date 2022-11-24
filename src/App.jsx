import { useState } from 'react'
import Board from './components/Board/Board'
import SideNav from './components/SideNav/SideNav'

function App() {
    return (
        <div className="App">
            <main>
                <SideNav />
                <Board />
            </main>
        </div>
    )
}

export default App
