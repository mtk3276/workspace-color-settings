import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ColorThemeProvider } from './contexts/ColorThemeContext'

function App() {
  return (
    <>
    <ColorThemeProvider>
      <Navbar />
      <Outlet />
    </ColorThemeProvider>
    </>
  )
}

export default App
