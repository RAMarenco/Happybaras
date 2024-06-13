import PropTypes from 'prop-types';
import { FaCheck, FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import ActionButtonComponent from '../../actionButtonComponent/actionButtonComponent';
import ChipComponent from '../../chipComponent/chipComponent';

const TableFieldComponent = (props) => {
    const deleteSpaces = (string) => {
        return string.replace(/\s+/g, '');
    }

    const settingRole = (role) => {
        switch (role) {
            case 'admin':
                return 'Administrador'
            case 'guard':
                return 'Vigilante'
            case 'mainResident':
                return 'Residente principal'
            case 'normalResident':
                return 'Residente normal'
            case 'visitor':
                return 'Visitante'
            default:
                return ''
        }
    }

    switch (props.type) {
        case 'header':
            return (
                <th
                    className='table-header-field'>
                    {props.value}
                </th>
            );
        case 'normal':
            return (
                <td
                    data-label={props.dataLabel}
                    className='table-normal-field'>
                    {props.value === "" ? "-" : props.value }
                </td>
            );
        case 'action':
            if (props.role === 'mainResident') {
                return (
                    <td
                        data-label={props.dataLabel}
                        className='table-action-field'>
                        <ActionButtonComponent icon={<FaCheck />} type="approve" onClick={props.onApproveClick} />
                        <ActionButtonComponent icon={<IoClose />} type="deny" onClick={props.onDenyClick} />
                    </td>
                );
            } else {
                return (
                    <td
                        data-label={props.dataLabel}
                        className='table-action-field'>
                        <ActionButtonComponent icon={<RiPencilFill />} type="edit" onClick={props.onEditClick} />
                        <ActionButtonComponent icon={<FaTrash />} type="delete" onClick={props.onDeleteClick} />
                    </td>
                );
            }
        case 'role':
            return (
                <td
                    data-label={props.dataLabel}
                    className='table-action-field'>
                    <ChipComponent value={settingRole(props.value)} data={props.value} />
                </td>
            );
        case 'state':
            return (
                <td
                    data-label={props.dataLabel}
                    className='table-action-field'>
                    <ChipComponent value={props.value} data={deleteSpaces(props.value)} />
                </td>
            );
        default:
            return null;
    }
};


TableFieldComponent.propTypes = {
    type: PropTypes.oneOf(['header', 'normal', 'action', 'role', 'state']).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataLabel: PropTypes.string,
    role: PropTypes.string,
    onApproveClick: PropTypes.func,
    onDenyClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};


export default TableFieldComponent