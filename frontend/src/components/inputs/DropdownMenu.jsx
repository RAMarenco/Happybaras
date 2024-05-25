import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './DropdownMenu.module.scss';

export const DropdownMenu = ({
    label,
    list,
    name,
    maxResults = 10,
    onChange,
    options = [],
    filterOption,
    renderOption
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        setFilteredOptions(
            options.filter(option => filterOption(option, searchTerm)).slice(0, maxResults)
        );
    }, [options, searchTerm, maxResults, filterOption]);

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
                    value={searchTerm}
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
    maxResults: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    filterOption: PropTypes.func,
    renderOption: PropTypes.func
};

DropdownMenu.defaultProps = {
    maxResults: 10,
    filterOption: (option, searchTerm) => option.address.toLowerCase().includes(searchTerm.toLowerCase()),
    renderOption: (option) => option.address
};
