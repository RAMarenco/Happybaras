import classes from './informationCard.module.scss';
import { useAuth } from '../../hooks/auth/useAuth';
import ROLES from '../../consts/roleConsts';

const InformationCard = (props) => {
    const { getRole } = useAuth();
    const role = getRole();

    return (
        <div className={classes["Card"]}>
            {
                role === ROLES.VISITOR ? 
                    <p className={classes["Number"]}> {props.number < 10 ? `0${props.number}` : props.number}</p>
                :
                    <></>
            }
            <div className={classes["Information"]}>
                <p> <b className={classes["Title"]}>{props.firstTitle}</b> {props.first}</p>
                <p> <b className={classes["Title"]}>{props.secondTitle}</b> {props.second}</p>
                <p> <b className={classes["Title"]}>{props.thirdTitle}</b> {props.third}</p>
            </div>
            {
                role === ROLES.VISITOR ? 
                    <div className={classes["Button"]}></div>
                :
                    <></>
            }
        </div>
    )
}

export default InformationCard;