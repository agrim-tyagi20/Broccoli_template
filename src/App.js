//import logo from './logo.svg';
import './App.css';
import Layout from "./Components/Layout"
import { Routes, Route } from "react-router-dom";
import Data from "./Components/Data"


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/data" element={<Data/>} />
      </Routes>


    </>
  );
}

export default App;
