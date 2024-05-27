import classes from './informationCard.module.scss';
import { useAuth } from '../../../hooks/auth/useAuth';
import ROLES from '../../../consts/roleConsts';
import { FilledButton } from '../../Buttons/Filled/FilledButton';

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
            <div className={classes["Data"]}>
                <div className={classes["Information"]}>
                    <p> <b className={classes["Title"]}>{props.firstTitle}</b> {props.first}</p>
                    <p> <b className={classes["Title"]}>{props.secondTitle}</b> {props.second}</p>
                    <p> <b className={classes["Title"]}>{props.thirdTitle}</b> {props.third}</p>
                </div>
                {
                    role === ROLES.VISITOR ? 
                        <div className={classes["Button"]}>
                            <FilledButton onClick={props.handleClick} disabled={props.disabled} color="primary" text="Generar QR"/>
                        </div>
                    :
                        <></>
                }
            </div>
        </div>
    )
}

export default InformationCard;