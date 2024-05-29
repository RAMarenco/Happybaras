import classes from './filters.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from 'react';
import { useRef } from 'react';

const Filters = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
    });
    const [inputClicked, setInputClicked] = useState({
        startDateClicked: false, 
        endDateClicked: false,
    })

    const icon = <FaRegCalendarAlt/>
    
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const handleStartDateClick = () => {
        if(startDateRef.current.isCalendarOpen) {
            setInputClicked((prev) => ({
                startDateClicked: true,
                ...prev
            }))
        }
    }

    const handleEndDateClick = () => {

    }

    return (
        <div className={classes["Filters"]}>
            <DatePicker
                ref={startDateRef}
                showIcon
                icon={icon}
                dateFormat={"dd/MM/yyyy"}
                selected={startDate}
                onInputClick={handleStartDateClick}
                onChange={(date) => setStartDate(date)}
            />
            <DatePicker
                ref={endDateRef}
                showIcon
                icon={icon}
                dateFormat={"dd/MM/yyyy"}
                selected={endDate}
                onInputClick={handleEndDateClick}
                onChange={(date) => setEndDate(date)}
            />
        </div>
    )
}

export default Filters;