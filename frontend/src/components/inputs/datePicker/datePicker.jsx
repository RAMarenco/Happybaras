import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from 'react';
import classes from './datePicker.module.scss';

const Picker = ({date, setDate, className}) => {
    const icon = <FaRegCalendarAlt/>
    const inputRef = useRef(null);

    const handleInputClick = () => {
        if(inputRef.current.isCalendarOpen) {
            console.log("Hola")
            /* TODO: Change style for focus */
        }
    }

    return(
        <DatePicker
            className={classes["DatePicker"]}
            ref={inputRef}
            //customInput={<GeneralInput/>}
            showIcon
            icon={icon}
            dateFormat={"dd/MM/yyyy"}
            selected={date}
            onInputClick={() => {handleInputClick()}}
            onChange={(date) => setDate(date)}
        />
    )
}

export default Picker;