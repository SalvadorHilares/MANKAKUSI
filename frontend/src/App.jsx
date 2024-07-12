import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import PotCardDetail from "./Components/PotCard/PotCardDetail.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/potCard/:id" element={<PotCardDetail/>} />
    </Routes>
  )
}

export default App;