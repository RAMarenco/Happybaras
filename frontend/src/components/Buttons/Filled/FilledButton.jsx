import React from 'react'
import classes from './FilledButton.module.scss'

// FilledButton is a reusable component that can be used to create buttons with different colors
// The color prop is used to determine the color of the button and the states of it

export const FilledButton = (props) => {
    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled} className={classes[props.color]}>
                {props.text}
            </button>
        </div>
    )
}
