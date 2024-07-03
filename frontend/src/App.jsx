import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import PotCard from "./Components/PotCard/PotCard.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/potCard/:id" element={<PotCard/>} />
    </Routes>
  )
}

export default App;