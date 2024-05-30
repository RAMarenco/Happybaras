import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from './picker.module.scss';
import { GeneralInput } from "../GeneralInput";

const Picker = ({date, setDate}) => {
    const icon = <FaRegCalendarAlt/>

    return(
        <DatePicker
            className={classes["DatePicker"]}
            //customInput={<GeneralInput/>}
            showIcon
            icon={icon}
            dateFormat={"dd/MM/yyyy"}
            selected={date}
            onChange={(date) => setDate(date)}
        />
    )
}

export default Picker;