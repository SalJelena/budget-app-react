import '../App.css'

const CalculationsLists = ({prihodi, setPrihodi, rashodi, setRashodi}) => {

    let sum = prihodi.reduce(((total, el)=> total + el.value), 0)
  
    return (
        <div className="container">
            <div className="prihod">
                <h2>Prihodi:</h2>
                <div className="item">{prihodi.map(prihod => <p key={prihod.id}>{prihod.desc} {prihod.value} <button onClick={()=>{
                    setPrihodi((prev) => {
                        let kopija = [...prev]
                        let indeks = kopija.findIndex(el => el.id === prihod.id)
                        kopija.splice(indeks, 1)
                        return kopija
                    })
                }}>X</button></p>)}
                </div>      
            </div>

            <div className="rashod">
                <h2>Rashodi:</h2>
                <div className="item">{rashodi.map(rashod => <p key={rashod.id}>{rashod.desc} {rashod.value} <span>{Math.round(rashod.value / sum * 100)}%</span><button onClick={()=>{
                    setRashodi((prev) => {
                        let kopija = [...prev]
                        let indeks = kopija.findIndex(el => el.id === rashod.id)
                        kopija.splice(indeks, 1)
                        return kopija
                    })
                }}>X</button></p>)}</div>
            </div>
        </div>
    )
}

export default CalculationsLists