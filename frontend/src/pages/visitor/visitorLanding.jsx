import classes from './visitorLanding.module.scss';
import Filters from '../../components/filters/filters';
import Instructions from '../../components/instructions/instructions';
import Cards from '../../components/cards/cards';
import { useState } from 'react';

const VisitorLanding = () => {
    const [showQR, setShowQR] = useState(false);
    
    const handleClick = () => {
        showQR ? setShowQR(false) : setShowQR(true);
    }

    return(
        <div className={classes["VisitorLandingContainer"]}>
            <div className={classes["LeftContainer"]}> 
                <Filters/>
                <Cards/>
            </div>
            <div className={classes["RightContainer"]}>
                {
                    !showQR ? 
                        <Instructions/>
                    :
                        <div className={classes["QRContainer"]}>
                            
                        </div>
                }
            </div>
        </div>
    )
}

export default VisitorLanding;