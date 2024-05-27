import classes from './cards.module.scss';
import { useEffect, useState } from "react";
import usePermitsInfo from '../../hooks/permitsInfo/usePermitsInfo';
import InformationCard from './informationCard/informationCard';

const Cards = (props) => {
    const [data, loadData] = usePermitsInfo([]);
    
    useEffect(() => {
        loadData();
    }, []);

    return (
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
                            handleClick={props.handleClick}
                            disabled={index === 0 ? false : true}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;