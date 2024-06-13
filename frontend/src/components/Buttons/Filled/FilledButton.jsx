import React from 'react'
import classes from './FilledButton.module.scss'
import { buttonColorsStrings } from '../ButtonColorStrings.js';
import { useMediaQuery } from 'react-responsive';

// FilledButton is a reusable component that can be used to create buttons with different colors
// The color prop is used to determine the color of the button and the states of it

/*
    text = text to display in the button
    color = import buttonColors and use
    disabled = is disabled
    size_w = sm, md, full (default)
*/

const FilledButton = ({ icon, text = "Default", onClick, disabled = false, color = buttonColorsStrings.primary, size_w = "full-w"}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    return (
        <div style={{display: "flex", height: "100%"}}>
            <button onClick={onClick} disabled={disabled} className={[classes[color], classes[size_w]].join(" ")}>
            {isMobile && icon ? icon : text}
            </button>
        </div>
    )
}

export default FilledButton;