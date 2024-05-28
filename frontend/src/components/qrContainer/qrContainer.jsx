import QRGenerator from "./qrGenerator/qrGenerator";
import classes from './qrContainer.module.scss';
import FilledButton from "../Buttons/Filled/FilledButton";
import Timer from "./timer/timer";
import { useEffect, useState } from "react";

const QRContainer = () => {
    /* TODO: this value should be retrieved from the API since it can be changed by the ADMIN */
    const timeLimit = new Date();
    timeLimit.setMinutes(10,0);

    var i = 0; // Esto se va a quitar después

    const [expired, setExpired] = useState(false); // Indicates if the QR code has expired or not
    const [value, setValue] = useState(JSON.stringify(`This is message ${i}`)) // Obtain this value from the API
    const [deadline, setDeadline] = useState(); 

    const handleClick = () => {
        // TODO: Ask for a new code from the API
        setValue(`This is message ${i++}`)
        setDeadline(Date.now() + timeLimit);
        const newTime = new Date();
        newTime.setMinutes(newTime.getMinutes() + timeLimit.getMinutes());
        setDeadline(newTime);
    }

    const handleTimeLimitExceeded = () => {
        setExpired(true);
    }

    useEffect(() => {
        const initialTime = new Date();
        initialTime.setMinutes(initialTime.getMinutes() + timeLimit.getMinutes());
        setDeadline(initialTime);
    }, [])

    return(
        <div className={classes["QRContainer"]}>
            {
                deadline != undefined ? 
                <>
                    <h1 style={{fontWeight: "bold", fontSize: "24px"}}>Tiempo restante</h1>
                    <Timer timeLimit={timeLimit} handleDeadline={handleTimeLimitExceeded} expired={expired} deadline={deadline}/>
                    {
                        !expired ? 
                            <QRGenerator value={value}/>
                        :
                            <QRGenerator value="QR CODE NOT VALID"/>
                    }
                    <FilledButton onClick={() => {handleClick()}} color="secondary" text="Generar otro QR"/>
                </>
                : 
                <h1>Loading</h1>
            }

        </div>
    )
}

export default QRContainer;