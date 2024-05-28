import classes from './cards.module.scss';
import { useEffect, useState } from "react";
import usePermitsInfo from '../../hooks/permitsInfo/usePermitsInfo';
import InformationCard from './informationCard/informationCard';

const Cards = (props) => {
    const [permits, loadPermits] = usePermitsInfo();
    
    useEffect(() => {
        loadPermits("permits/all");
    }, []);

    return (
        <div className={classes["CardsContainer"]}>  
            {
                permits.map((permit, index) => {
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
                            handleClick={props.handleClick}
                            disabled={index === 0 ? false : true}
                            /* TODO: set if it is disabled depending on the date and hour */
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;