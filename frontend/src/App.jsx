import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import PotCardDetail from "./Components/PotCard/PotCardDetail.jsx";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/potCard/:id" element={<PotCardDetail/>} />
      <Route path="/company-info" element={<CompanyInfo />} />
    </Routes>
  )
}

export default App;