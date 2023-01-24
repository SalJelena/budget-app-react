import { React, useState } from "react";
import InputFields from "./components/inputFields.jsx";
import Header from "./components/header.jsx"
import CalculationsLists from "./components/calculations.jsx";
import './App.css'


const App = () => {

  const [prihodi, setPrihodi] = useState([
    {
      id: 1,
      desc: 'Salary',
      value: 5000
    }
  ])

 const [rashodi, setRashodi] = useState([
    {
      id: 1,
      desc: 'Appartment rent',
      value: 1900
    }
  ])

  return (
    <>
      <Header prihodi={prihodi} rashodi={rashodi} />
      <InputFields prihodi={prihodi} setPrihodi={setPrihodi} rashodi={rashodi} setRashodi={setRashodi}/>
      <CalculationsLists prihodi={prihodi} setPrihodi={setPrihodi} rashodi={rashodi} setRashodi={setRashodi} />
    </>
  )
}

export default App;