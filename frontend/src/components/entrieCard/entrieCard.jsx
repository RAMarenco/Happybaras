import classes from "./EntrieCard.module.scss";

const EntriesCard = ({element}) => {
    return (
        <div className={classes["Entrie_Card"]}>
            <p>
                <b>Visitante</b>
                <br />
                {element.visitor}
            </p>
            <p>
                <b>Residencia</b>
                <br />
                {element.address}
            </p>
            <p>
                <b>Hora de visita</b>
                <br />
                {element.time}
            </p>
        </div>
    )
}

export default EntriesCard;