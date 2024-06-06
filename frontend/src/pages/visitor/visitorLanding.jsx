import classes from './visitorLanding.module.scss';
import Filters from '../../components/filters/filters';
import Instructions from '../../components/instructions/instructions';
import Cards from '../../components/cards/cards';
import { useState } from 'react';
import QRContainer from '../../components/qrContainer/qrContainer';
import { useMediaQuery } from 'react-responsive';
import Bubble from '../../components/bubble/bubble';
import { IoInformation } from "react-icons/io5";
import InstructionsModal from '../../components/modals/instructionsModal/instructionsModal';

const VisitorLanding = () => {
    const isMovile = useMediaQuery({ query: "(max-width: 900px)" });
    const [showQR, setShowQR] = useState(false);
    const [showCards, setShowCards] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
    });
    const [email, setEmail] = useState("");
    const [filters, setFilters] = useState({});
    const [filter, setFilter] = useState(false);

    const handleFilters = () => {
        setFilters({
            startDate, 
            endDate, 
            email
        })

        setFilter(true);
    }

    const handleBubbleClick = () => {
        setShowInstructions(showInstructions ? false : true);
    }

    const handleGoBack = () => {
        setShowCards(true);
        setShowQR(false);
    }

    const handleAgreementClick = () => {
        setShowCards(true);
    }

    const handleGenerateQRClick = (info) => {
        if(!showQR)
            setShowQR(true)
    }

    return(
        <div className={classes["VisitorLandingContainer"]}>
            {
                isMovile ? 
                    !showCards ? 
                        <div className={classes["RightContainer"]}>
                            <Instructions onAgreementClick={() => {handleAgreementClick()}}/>
                        </div>
                    : 
                    <>
                        {    
                            !showQR ?
                                <div className={classes["LeftContainer"]}> 
                                    <Filters 
                                        startDate={startDate} 
                                        endDate={endDate} 
                                        setStartDate={setStartDate} 
                                        setEndDate={setEndDate}
                                        email={email}
                                        setEmail={setEmail}
                                        handleFiltersClick={handleFilters}
                                    />
                                    <Cards 
                                        filter={filter}
                                        setFilter={setFilter}
                                        filters={filters} 
                                        handleClick={handleGenerateQRClick}
                                    />
                                </div>
                            : 
                                <QRContainer onGoBack={() => {handleGoBack()}}/> 
                        }
                        <div 
                            className={classes["BubbleContainer"]}
                            style={{zIndex: 20000}}    
                        >
                            <Bubble 
                                icon={<IoInformation />} 
                                color={"#9EC4DB"}
                                handleClick={() => {handleBubbleClick()}}
                            />
                        </div>
                        {
                            showInstructions ? 
                                <InstructionsModal/>
                            :
                                <> </>
                        }
                    </>

                : 
                    <>
                        <div className={classes["LeftContainer"]}> 
                            <Filters 
                                startDate={startDate} 
                                endDate={endDate} 
                                setStartDate={setStartDate} 
                                setEndDate={setEndDate}
                            />
                            <Cards 
                                filters={filters} 
                                handleClick={handleGenerateQRClick}
                            />
                        </div>
                        <div className={classes["RightContainer"]}>
                            {
                                !showQR ? 
                                    <Instructions/>
                                :
                                    <QRContainer/>
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default VisitorLanding;