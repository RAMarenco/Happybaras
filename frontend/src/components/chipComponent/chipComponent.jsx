import './chipComponent.scss'

const chipComponent = (props) => {
    return(
        <div className={`chip-container ${props.data}`}>
            <p>
                {props.value}
            </p>
        </div>
    )
}

export default chipComponent;