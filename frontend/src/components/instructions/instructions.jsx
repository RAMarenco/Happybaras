import classes from './instructions.module.scss';

const Instructions = () => {
    const instructions = [
        {
            text: "Encuentra la invitación del residente que deseas visitar en la agenda",
            additional: "" 
        },
        {
            text: "Haz clic en el botón 'Generar QR'",
            additional: ""
        },
        {
            text: "Espera a que se genere el código QR",
            additional: ""
        }, 
        {
            text: "Muestra el código QR al vigilante en la entrada",
            additional: ""
        },
        {
            text: "Espera la confirmación del vigilante",
            additional: ""
        },
        {
            text: "Después de 10 minutos, genera un nuevo código QR:", 
            additional: "Si han pasado 10 minutos desde que se generó el código QR anterior y aún no has ingresado a la residencia, regresa a la agenda y genera un nuevo código QR siguiendo los pasos anteriores."
        }
    ]

    return (
        <div className={classes["InstructionsContainer"]}>
            <h1>Instrucciones de uso</h1>
            <ol className={classes["StepsContainer"]}>
                {
                    instructions.map((instruction, index) => {
                        return(
                            <li key={index} style={{fontWeight: "bold"}}> 
                                {instruction.text} 
                                <p style={{fontWeight: "normal"}}>{instruction.additional}</p>
                            </li>            
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default Instructions;