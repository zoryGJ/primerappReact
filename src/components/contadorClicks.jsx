import {useState} from "react";

const ContadorClicks = () => {

    const [clicks, setClicks] = useState(0)

    const styles = {
        backgroundColor: clicks >= 10 ? 'Purple' : 'green', 
        color: 'white',
    } 
    
    return(

        <div style={styles}>
            <h1>Clicks ({clicks})</h1>   
            <button 
                onClick={()=>{
                    setClicks(clicks + 1)
                }}
            >
                Aumentar
            </button>
            <button
                onClick={ ()=>{
                        setClicks(clicks - 1)
                }}
            >
                Decrementar
            </button>
        </div>
        
    )

}

export default ContadorClicks