import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import classes from './DropdownMenu.module.scss';

export const DropdownMenu = ({
    label,
    list,
    name,
    onChange,
    options = [],
    filterOption = useCallback((option, searchTerm) => option.name.toLowerCase().includes(searchTerm.toLowerCase()), []),
    renderOption = (option) => option.address,
    defaultValue = ""
}) => {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        setFilteredOptions(
            options.filter(option => filterOption(option, searchTerm))
        );
    }, [options, searchTerm, filterOption]);

    useEffect(() => {
        setSearchTerm(defaultValue);
    }, [defaultValue]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={classes["main-container"]}>
            <label className={classes["label"]}>{label}</label>
            <div className={classes["input-container"]}>
                <input
                    list={list}
                    name={name}
                    onChange={handleInputChange}
                    className={classes["input"]}
                    defaultValue={searchTerm}
                    onFocus={() => setFilteredOptions(
                        options.filter(option => filterOption(option, searchTerm))
                    )}
                />
                <span className={classes["arrow"]}></span>
            </div>
            <datalist id={list}>
                {filteredOptions.map((option, index) => (
                    <option key={index} value={renderOption(option)} />
                ))}
            </datalist>
        </div>
    );
};

DropdownMenu.propTypes = {
    label: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    filterOption: PropTypes.func,
    renderOption: PropTypes.func,
    defaultValue: PropTypes.string
};