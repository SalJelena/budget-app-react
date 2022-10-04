import { React } from "react";
import '../App.css'

const Header = ({prihodi, rashodi}) => {
    
    let ukupniPrihod = prihodi.reduce(((sum, prihod) => sum + prihod.value), 0)
    let ukupniRashod = rashodi.reduce(((sum, rashod) => sum + rashod.value), 0)
    let preostaliBudzet = ukupniPrihod - ukupniRashod

    let ukupnoProcentiRashod = Math.round((ukupniRashod / ukupniPrihod) * 100)

    return (
        <div className="top-div">
            <div className="budget">
            <p className="budget-naslov">Mesecni budzet u Septembru 2021:</p>
            <p className="budget-vrednost-final">Preostali budzet: {preostaliBudzet}</p>
            <p className="budget-prihod">+ {ukupniPrihod} </p>
            <p className="budget-rashod">- {ukupniRashod} {ukupnoProcentiRashod}%</p>
            </div>
        </div>
    )
}

export default Header