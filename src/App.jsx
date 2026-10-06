import { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PageActivity from './pages/Activity/Activity'
import PageBoard from './pages/Board/Board'
import PagePeople from './pages/People/People'
import PageSettings from './pages/Settings/Settings'

function App() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="app-shell" id="appShell">
            <Sidebar collapsed={collapsed} />
            <div className="app-main">
                <Header setCollapsed={setCollapsed} />

                <main className="page-area">
                    <PageBoard />
                    <PagePeople />
                    <PageActivity />
                    <PageSettings />
                </main>
            </div>
        </div>
    )
}

export default App
