import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,Picture,Card,Cake,Present,End } from "./components"
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pictures" element={<Picture/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/cake" element={<Cake/>}/>
          <Route path="/present" element={<Present/>}/>
          <Route path="/end" element={<End/>}/>
      </Routes>

    </Router>
  )
}

export default App
