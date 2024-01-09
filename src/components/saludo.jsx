//*componentes escrios con javascript puro
export const Saludo = ({persona, nacionalidad}) => {

    //*destructuracion: otra forma de sacar las pocisiones de mi objeto

    const {nombre, edad, colorCabello} = persona

    return(
      <div>
            <h1>
                {
                    nombre ? 'Bienvenido ' + nombre + ' al restaurante de react' : 'Este es un saludo'
                }
            </h1>
            <p>{             
                    edad ? 'tu edad es: '+ edad : 'No tienes edad definida'
                }
            </p>
            <p>color de cabello:{             
                     colorCabello ? colorCabello : 'No tienes color de cabello definido'
                }
            </p>
            <p>
                Nacionalidad: {nacionalidad}
            </p>
            <p>Es un placer conocerte</p>
      </div>
    );
}

export const Despedida = () => {
    return(
        <div>
            <h1>Soy despedida</h1>
            <p>Chao banbino</p>
        </div>
    )
}

export const Perensejo = ()=> (
    <div>
            <h1>Soy perensejo</h1>
            <p>Chao banbino</p>
    </div>
)

//* otra forma de escribir componentes de function a arrow function ()=>{}

export const Postre = () => {
    
    const postreDisponible = {
        'tiramisu' : 'tiramisu',
        'Helado' : 'Helado',
        'Pionono' : 'Pionono',
        'Flang' : 'Flang',
        'chocolate': 'Torta de chocolate'
    };


    return(
       <div>
            <h1>Este es un postre</h1>
            <p>Elige el postre que quieras:</p>
            <ul>
                <li>{postreDisponible.tiramisu}</li>
                <li>{postreDisponible.Helado}</li>
                <li>{postreDisponible.Pionono}</li>
                <li>{postreDisponible.Flang}</li>
                <li>{postreDisponible.chocolate}</li>
            </ul>
        </div>  
    )
}
   
    


export default Saludo;