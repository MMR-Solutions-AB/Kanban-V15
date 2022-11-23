import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './theme/index.scss'
import ProjectContextProvider from './context/ProjectContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProjectContextProvider>
                <App />
            </ProjectContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)
