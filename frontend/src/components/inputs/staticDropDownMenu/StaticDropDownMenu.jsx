import { useEffect, useState } from 'react';
import './StaticDropDownMenu.scss';
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const StaticDropDownMenu = ({ options, selectedOption, setSelectedOption, placeHolder, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modifiedOptions, setModifiedOptions] = useState([]);

    useEffect(() => {
        const optionsWithEmpty = ['Deseleccionar', ...options];
        setModifiedOptions(optionsWithEmpty);
    }, [options])

    const handleOptionClick = (option) => {
        if (option === 'Deseleccionar') {
            setSelectedOption('');
            setIsOpen(false);
            return;
        }

        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleButtonClick = (e) => {
        createRipple(e);
        toggleDropDown();
    };

    const activeOption = (option) => {
        if (option === 'Deseleccionar') {
            return false
        }
        
        if (option === selectedOption) {
            return true;
        }
    }

    const actualOption = (selectedOption) => {
        if (selectedOption === 'Deseleccionar' || selectedOption === '') {
            return placeHolder;
        }

        return selectedOption;
    }

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const createRipple = (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement('span');

        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        const rect = button.getBoundingClientRect();
        const top = event.clientY - rect.top - radius;
        const left = event.clientX - rect.left - radius;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        ripple.classList.add('ripple');

        const rippleContainer = button.querySelector('.ripple-container');
        rippleContainer.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <div className={`static-drop-down-menu`}>
            <button className='button-action' onClick={handleButtonClick} disabled={disabled}>
                <span>{ actualOption(selectedOption) }</span>
                <FaAngleDown className={`${isOpen ? 'rotate-up' : 'rotate-down' }`}/>
                <div className="ripple-container"></div>
            </button>

            {isOpen && (
                <div className={`options ${isOpen ? 'fade-in' : '' }`}>
                    <ul>
                        {modifiedOptions.map((option) => (
                            <li key={option} className={`${activeOption(option) ? "active" : ""}`} onClick={() => handleOptionClick(option)}>
                                <span>{option}</span>
                                <div>{activeOption(option) && <FaCheck />}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default StaticDropDownMenu;