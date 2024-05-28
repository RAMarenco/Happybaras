import classes from './visitorLanding.module.scss';
import Filters from '../../components/filters/filters';
import Instructions from '../../components/instructions/instructions';
import Cards from '../../components/cards/cards';
import { useState } from 'react';
import QRContainer from '../../components/qrContainer/qrContainer';

const VisitorLanding = () => {
    const [showQR, setShowQR] = useState(false);

    const handleGenerateQRClick = (info) => {
        if(!showQR)
            setShowQR(true)
    }

    return(
        <div className={classes["VisitorLandingContainer"]}>
            <div className={classes["LeftContainer"]}> 
                <Filters/>
                <Cards handleClick={handleGenerateQRClick}/>
            </div>
            <div className={classes["RightContainer"]}>
                {
                    !showQR ? 
                        <Instructions/>
                    :
                        <QRContainer/>
                }
            </div>
        </div>
    )
}

export default VisitorLanding;