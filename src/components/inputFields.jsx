import { React, useState } from "react";
import '../App.css'

const InputFields = ({prihodi, setPrihodi, rashodi, setRashodi}) => {

    const options = [
        '+',
        '-'
    ]

    const [select, setSelect] = useState(options[0])
    const [text, setTxt] = useState('')
    const [numValue, setNumValue] = useState('')

    return(
        <div className="add">
           <div className="add-container">
            {/* Select opcija */}
        <select className="add-type" value={select} onChange={(e)=>{
            setSelect(e.target.value)
        }}>

        {options.map(option => <option key={option} value={option}>{option}</option>)}
         

        </select>


            {/* Input za opis */}
        <input className="add-description" value={text} onChange={(e)=>{      
            setTxt(e.target.value)       
        }}/>


            {/* Input za iznos */}
        <input type="number" className="add-value" value={numValue} onChange={
            (e)=>{    
            setNumValue(e.target.value)    
        }}/>


    
            {/* Dugme za dodavanje */}
        <button className="add-btn" onClick={() => {
            if(select === '+' && text !== ''){

            let noviPrihod = {
                //mora Math.max
                id:Math.max(0,...prihodi.map(p => p.id)) + 1,
                desc: text,
                value: Number(numValue)
            }

            setPrihodi([...prihodi, noviPrihod])
            setTxt('')
            setNumValue('')

            console.log(prihodi);
        }
            if(select === '-' && text !== ''){
            let noviRashod = {
                id:Math.max(0,...rashodi.map(r => r.id)) + 1,
                desc: text,
                value: Number(numValue)
            }
            // console.log(noviRashod.id);



            setRashodi([...rashodi, noviRashod])
            setTxt('')
            setNumValue('')
        }

        }}>Add</button>
       </div>
      </div>




    )


}


export default InputFields
