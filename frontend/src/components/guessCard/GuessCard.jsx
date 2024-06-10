import "./GuessCard.scss";
import ChipComponent from "../chipComponent/chipComponent";

const GuessCard = (props) => {
    return (
        <div className="guess-card-container">
            <div className="guess-card-field">
                <p><span>Visitante:</span>  {`${props.name}`}</p>
            </div>
            <div className="guess-card-field">
                <p><span>Tipo de entrada:</span> {`${props.arrival}`}</p>
            </div>
            <div className="guess-card-field">
                <p><span>Fecha y hora: </span>{`${props.date}`}</p>
            </div>
            { props.role === "normalResident" && (
                <div className="guess-card-field">
                    <span>Estado:</span> <ChipComponent data={props.state} value={props.state}/>
                </div>
            )}
        </div>
    );
};

export default GuessCard;