import { ThemProvider } from './context/them.js'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";


function App() {
  const [themMode, setThemMode] = useState('light');
  const lightThem = () => {
    setThemMode("light");
  }
  const darkThem = () => {
    setThemMode("dark")
  }

  // Actual work in the dark and theam mode  in inner html code 
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add("themMode");
  }, [themMode])

  return (
    <ThemProvider value={{ themMode, lightThem, darkThem }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Call the  ThemeBtn  */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* call the Card  */}
            <Card />
          </div>
        </div>
      </div>
    </ThemProvider>
  )
}

export default App
