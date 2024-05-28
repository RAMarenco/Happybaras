import classes from './informationCard.module.scss';
import { useAuth } from '../../../hooks/auth/useAuth';
import ROLES from '../../../consts/roleConsts';
import { FilledButton } from '../../Buttons/Filled/FilledButton';

const InformationCard = ({number, firstTitle, secondTitle, thirdTitle, first, second, third, handleClick, disabled}) => {
    const { getRole } = useAuth();
    const role = getRole();

    const info = {
        resident: first,
        date: second,
        address: third
    }

    /* TODO: refactor for resident's view */

    return (
        <div className={classes["Card"]}>
            {
                role === ROLES.VISITOR ? 
                    <p className={classes["Number"]}> {number < 10 ? `0${number}` : number}</p>
                :
                    <></>
            }
            <div className={classes["Data"]}>
                <div className={classes["Information"]}>
                    <p> <b className={classes["Title"]}>{firstTitle}</b> {first}</p>
                    <p> <b className={classes["Title"]}>{secondTitle}</b> {second}</p>
                    <p> <b className={classes["Title"]}>{thirdTitle}</b> {third}</p>
                </div>
                {
                    role === ROLES.VISITOR ? 
                        <div className={classes["Button"]}>
                            <FilledButton onClick={() => {handleClick(info)}} disabled={disabled} color="primary" text="Generar QR"/>
                        </div>
                    :
                        <></>
                }
            </div>
        </div>
    )
}

export default InformationCard;