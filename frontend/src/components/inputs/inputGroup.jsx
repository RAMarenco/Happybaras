import { useId } from "react";
import classes from "./InputGroup.module.scss";

const InputGroup = ({inputs = [], onChange}) => {
    const inputsMap = inputs.map((input) => {

        return (
            <label key={useId()} className={classes[input.class]}>
                {input.text}
                {
                    input.type == "area" ? 
                    <textarea name={input.name} onChange={onChange}></textarea>
                    :
                    <input type={input.type} onChange={onChange} name={input.name}/>
                }
            </label>
        )
    })
    
    return (
        <div>
            <div className={classes["Input_Group"]}>
                {
                    inputs.length > 0 && inputsMap
                }
            </div>
        </div>
    )
}

export default InputGroup;
