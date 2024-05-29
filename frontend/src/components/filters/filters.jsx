import classes from './filters.module.scss';
import { useState } from 'react';
import Picker from '../inputs/datePicker/datePicker';
import {GeneralInput} from "./../inputs/GeneralInput";

const Filters = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
    });

    return (
        <div className={classes["Filters"]}>
            <Picker 
                date={startDate}
                setDate={setStartDate}
                className={classes["DatePicker"]}
            />
            <Picker
                date={endDate}
                setDate={setEndDate}
                className={classes["DatePicker"]}
            />
            <GeneralInput
                value={"Ingrese el nombre de un residente"}
                type="text"
                name="name"
            />

        </div>
    )
}

export default Filters;