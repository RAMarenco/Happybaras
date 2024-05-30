import "./MemberCard.scss";
import ChipComponent from "../chipComponent/chipComponent";
import { FaTrash } from "react-icons/fa";
import ActionButtonComponent from "../actionButtonComponent/actionButtonComponent";
import ROLES from "../../consts/roleConsts";

const MemberCard = (props) => {

    const settingRole = (rol) => {
        switch (rol) {
            case 'mainResident':
                return 'Encargado'
            case 'normalResident':
                return 'Residente'
            default:
                return ''
        }
    }

    return(
        <div className="members-card-container">
            <figure className="card-img">
            <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" alt="Avatar"/>
            </figure>
            <div className="card-info">
                <div className="card-data">
                    <p className="card-name">{props.name}</p>
                    <p className="card-email">{props.email}</p>
                </div>
                <div>
                    <ChipComponent data={props.role} value={settingRole(props.role)} />
                </div>
            </div>
            {
                props.permission && props.role === ROLES.NORMALRESIDENT && (
                    <div className="card-action">
                        <ActionButtonComponent icon={<FaTrash />} type="delete"/>
                    </div>
                )
            }
        </div>
    )
}

export default MemberCard;