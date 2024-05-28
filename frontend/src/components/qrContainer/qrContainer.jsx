import QRGenerator from "./qrGenerator/qrGenerator";
import classes from './qrContainer.module.scss';
import FilledButton from "../Buttons/Filled/FilledButton";
import Timer from "./timer/timer";
import { useState } from "react";

const QRContainer = ({info}) => {
    const [expired, setExpired] = useState(false); // Indicates if the QR code has expired or not
    const value = JSON.stringify(info);

    const timeLimit = new Date();
    /* TODO: this value should be retrieved from the API since it can be changed by the ADMIN */
    timeLimit.setMinutes(1,0); 

    const handleClick = () => {
        /* TODO: do something when generate a new QR */
    }

    const handleTimeLimitExceeded = () => {
        setExpired(true);
    }

    return(
        <div className={classes["QRContainer"]}>
            <h1 style={{fontWeight: "bold", fontSize: "24px"}}>Tiempo restante</h1>
            <Timer timeLimit={timeLimit} handleDeadline={handleTimeLimitExceeded}/>
            {
                !expired ? 
                    <QRGenerator value={value}/>
                :
                    <QRGenerator value="QR CODE NOT VALID"/>
            }
            <FilledButton onClick={() => {handleClick()}} color="secondary" text="Generar otro QR"/>

        </div>
    )
}

export default QRContainer;