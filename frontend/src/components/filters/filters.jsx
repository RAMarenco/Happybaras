import classes from './filters.module.scss';
import { useEffect } from 'react';
import Picker from '../inputs/picker/picker';
import {GeneralInput} from "./../inputs/GeneralInput/GeneralInput";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useState } from 'react';
import FilledButton from '../Buttons/Filled/FilledButton';
import { CiSearch } from "react-icons/ci";
import 'react-toastify/dist/ReactToastify.css';

const Filters = ({startDate, endDate, setStartDate, setEndDate, email, setEmail, handleFiltersClick}) => {

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
            <div className={classes["DatePickersContainer"]}>
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
            </div>
            <div className={classes["Input"]}>
                <GeneralInput
                    value={email}
                    type="text"
                    name="name"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                />
            </div>
            <div className={classes["ButtonContainer"]}>
                <FilledButton
                    text='Aplicar filtros'
                    color='primary'
                    onClick={() => {handleFiltersClick()}}
                />

            </div>
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