import classes from './cards.module.scss';
import { useEffect, useState } from "react";
import usePermitsInfo from '../../hooks/permitsInfo/usePermitsInfo';
import InformationCard from './informationCard/informationCard';

const Cards = (props) => {
    const [permits, loadPermits] = usePermitsInfo();
    const filters = {...props.filters};

    const filterCards = () => {
        permits.map((permit) => {
            if(filters.begin_date <= permit.begin_date) {
                if(filters.end_date >= permit.begin_date) 
                    return(permit);
            }
        })
    }
    
    useEffect(() => {
        loadPermits("permits/all");
    }, []);

    useEffect(() => {
        filterCards();
    }, [filters])

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
                            second={permit.begin_date} 
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