import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import LoginForm from './components/LoginForm/LoginForm'
import AuthProvider from './components/Routes/AuthProvider'

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/login' element={<LoginForm/>}/>
                <Route path="/" element={<MainLayout />}>
                    <Route element={<AuthProvider/>} > 
                    <Route path='/dashboard' element={<Dashboard />} />
                 
                 <Route path="/videos" element={<Blank />} />
                 <Route path="/profile" element={<Blank />} />
                 <Route path="/customers" element={<Blank />} />
                 <Route path="/settings" element={<Blank />} />
                 <Route path="/stats" element={<Blank />} />
                    </Route>
                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
