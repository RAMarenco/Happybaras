import PropTypes from 'prop-types';
import './tableComponent.scss'
import TableFieldComponent from './tableFieldComponent/tableFieldComponent'
import ROLES from '../../consts/roleConsts';

/*  Parametros que se necesitan para inicializar la tabla -> (data, headers, role, permission)
    - Los datos (data) que se utilizaran para rellenar la tabla que sera el JSON
    - Los campos (headers) que se deben de crear en la tabla y con cuales tendran relacion segun el JSON, por ejemplo
        const headerExample = {
            "Nombre": "nombre",
            "Correo Electrónico": "correoElectronico",
            "Rol": "rol",
            "Estado": "state",
            "Hogar": "hogar"
        };
    donde, "Nombre" sera el valor que aparecera en la tabla y "nombre" el dato con el que relacionara el JSON
    - El rol (role) del usuario para determinar que color y tipo de tabla se mostrara
    - El permiso (permission), esta hecha para que el residente principal se le pueda habilitar el campo
    de acciones, pero esto no aplica para el admin ya que en todas sus tablas tiene acciones
    - onApproveClick, onDenyClick, onEditClick, onDeleteClick son funciones que se ejecutaran al dar click en los diferentes botones
*/

const TableComponent = (props) => {
    const selectType = (header) => {
        switch (header) {
            case 'Acciones':
                return 'action'
            case 'Rol':
                return 'role'
            case 'Estado':
                return 'state'
            default:
                return 'normal'
        }
    }

    const setHeaders = (headerObject) => {
        let updateHeaders = Object.keys(headerObject)
        if (props.role == ROLES.ADMIN) {
            updateHeaders.push("Acciones")
            return updateHeaders
        }

        if(props.role == ROLES.MAINRESIDENT && props.permission) {
            updateHeaders.push("Acciones")
            return updateHeaders
        }

        return updateHeaders
    }

    return (
        <div className={`table-container ${props.role}`}>
            <table className='table'>
                <thead>
                    <tr>
                        {setHeaders(props.headers).map((header, index) => (
                            <TableFieldComponent 
                                key={index} 
                                type={"header"} 
                                value={header}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => (
                        <tr key={index}>
                            { setHeaders(props.headers).map((header, index) => (
                                <TableFieldComponent 
                                    key={index} 
                                    type={selectType(header)}
                                    value={header === 'Acciones' ? null : row[props.headers[header]]}
                                    dataLabel={header}
                                    role={props.role}
                                    onApproveClick={props.onApproveClick}
                                    onDenyClick={props.onDenyClick}
                                    onEditClick={() => props.onEditClick(row)}
                                    onDeleteClick={() => props.onDeleteClick(row)}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

TableComponent.propTypes = {
    role: PropTypes.string,
    data: PropTypes.array,
    headers: PropTypes.object,
    permission: PropTypes.bool,
    onApproveClick: PropTypes.func,
    onDenyClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};


export default TableComponent