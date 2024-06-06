import classes from './GeneralInput.module.scss'

export const GeneralInput = ({ type, name, label, value, onChange, disabled = false, placeholder = "Placeholder"}) => {
    return (
        <div className={classes["input-container"]}>
            <label className={classes["label"]}>{label}</label>
            <input
                className={classes["gen-input"]}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
            />
        </div>
    );
}

