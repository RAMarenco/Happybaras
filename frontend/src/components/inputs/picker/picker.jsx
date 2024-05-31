import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from './picker.module.scss';
import "./picker.css"
import { GeneralInput } from "../GeneralInput/GeneralInput";

const Picker = ({date, setDate}) => {
    const icon = <FaRegCalendarAlt/>

    return(
        <div className={classes["DatePickerWrapper"]}>
            <DatePicker
                className={classes["DatePicker"]}
                //customInput={<GeneralInput/>}
                showIcon
                icon={icon}
                dateFormat={"dd/MM/yyyy"}
                selected={date}
                onChange={(date) => setDate(date)}
            />
        </div>
    )
}

export default Picker;