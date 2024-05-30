import classes from './filters.module.scss';
import { useEffect, useState } from 'react';
import Picker from '../inputs/datePicker/datePicker';
import {GeneralInput} from "./../inputs/GeneralInput";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Filters = ({startDate, endDate, setStartDate, setEndDate}) => {
    const notify = () => toast.warn('Fecha no válida', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    useEffect(() => {
        if(startDate > endDate) {
            notify();
            setStartDate(new Date());
        }
    }, [startDate, endDate])

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
            {/* <GeneralInput
                value={"Ingrese el nombre de un residente"}
                type="text"
                name="name"
            /> */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                //transition: Bounce,
            />
        </div>
    )
}

export default Filters;