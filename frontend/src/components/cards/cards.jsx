import classes from './cards.module.scss';
import { useEffect, useState } from "react";
import usePermitsInfo from '../../hooks/permitsInfo/usePermitsInfo';
import InformationCard from './informationCard/informationCard';

const Cards = ({filter, setFilter, filters, handleClick}) => {
    const [permits, loadPermits] = usePermitsInfo();
    const [cards, setCards] = useState([]);

    const filterCards = () => {

        const filtered = permits.filter((permit) => {
            return permit.email === filters.email
        })

        console.log(filtered);

        setCards(filtered);

        setFilter(false);
    }
    
    useEffect(() => {
        loadPermits("permits/all");
    }, []);

    useEffect(() => {
        if(filter)
            filterCards();

    }, [filters])

    return (
        <div className={classes["CardsContainer"]}>  
            {
                cards.map((permit, index) => {
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
                            handleClick={handleClick}
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