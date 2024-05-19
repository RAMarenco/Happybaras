import "./actionButtonComponent.scss";

const actionButtonComponent = (props) => {
    return(
        <button className={`action-button-container ${props.type}`} onClick={props.onClick}>
            {props.icon}
        </button>
    )
}

export default actionButtonComponent;