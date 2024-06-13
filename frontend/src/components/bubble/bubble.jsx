import classes from './bubble.module.scss';

const Bubble = ({handleClick, color, icon}) => {
    return(
        <figure 
            onClick={handleClick}
            className={classes["Bubble"]}
            style={{
                backgroundColor: color
            }}
        >
            {icon}
        </figure>
    )
}

export default Bubble;