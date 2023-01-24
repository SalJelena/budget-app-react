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

				<input className="add-description" value={text} placeholder="Description..." onChange={(e)=>{      
					setTxt(e.target.value)       
				}}/>

				<input type="number" className="add-value" placeholder="Value..." value={numValue} onChange={
					(e)=>{    
					setNumValue(e.target.value)    
				}}/>

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
				}

					if(select === '-' && text !== ''){
					let noviRashod = {
						id:Math.max(0,...rashodi.map(r => r.id)) + 1,
						desc: text,
						value: Number(numValue)
					}
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