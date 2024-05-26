import classes from './visitorLanding.module.scss';
import Filters from '../../components/filters/filters';
import InformationCard from '../../components/informationCard/informationCard';
import { useEffect, useState } from "react";
import usePermitsInfo from '../../hooks/permitsInfo/usePermitsInfo';

const VisitorLanding = () => {
    const [showQR, setShowQR] = useState(false);
    const [data, loadData] = usePermitsInfo([]);
    
    const handleClick = () => {
        showQR ? setShowQR(false) : setShowQR(true);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div className={classes["VisitorLandingContainer"]}>
            <div className={classes["LeftContainer"]}> 
                <Filters/>
                <div className={classes["CardsContainer"]}>  
                    {
                        data.map((permit, index) => {
                            return (
                                <InformationCard 
                                    key={index} 
                                    number={index + 1} 
                                    firstTitle="Residente: " 
                                    secondTitle="Fecha y hora: " 
                                    thirdTitle="Dirección: " 
                                    first={permit.resident} 
                                    second={permit.date} 
                                    third={permit.address}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes["RightContainer"]}>
                {
                    !showQR ? 
                        <div className={classes["InstructionsContainer"]}>
                            <h1>Instrucciones de uso</h1>
                            <ol>
                                <li>Encuentra la invitación del residente que deseas visitar en la agenda</li>
                                <li>Haz clic en el botón "Generar QR"</li>
                                <li>Espera a que se genere el código QR</li>
                                <li>Muestra el código QR al vigilante en la entrada</li>
                                <li>Después de 10 minutos, genera un nuevo QR: 
                                    <p>Si han pasado 10 minutos desde que se generó el código QR anterior y aún no has ingresado a la residencia, regresa a la agenda y genera un nuevo código QR siguiendo los pasos anteriores.</p>
                                </li>
                            </ol>
                        </div>
                    :
                        <div className={classes["QRContainer"]}>

                        </div>
                }
            </div>
        </div>
    )
}

export default VisitorLanding;