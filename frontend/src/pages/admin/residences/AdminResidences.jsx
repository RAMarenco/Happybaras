import React, { useState } from 'react'
import TableComponent from '../../../components/tableComponent/tableComponent';
import { EditModal } from '../../../components/modals/EditModal';
import classes from './AdminResidences.module.scss';

export const AdminResidences = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const data = [
        {
            id: 1,
            name: "John Doe",
            email: "john@mail.com",
            role: "admin",
            address: "Olivos #16"
        },
        {
            id: 2,
            name: "Mich",
            email: "mich@mail.com",
            role: "mainResident",
            address: "Olivos #16"
        },
        {
            id: 3,
            name: "Malenco",
            email: "malenco@mail.com",
            role: "normalResident",
            address: "Olivos #16"
        },
        {
            id: 4,
            name: "Kike",
            email: "kike@mail.com",
            role: "visitor",
            address: "Olivos #16"
        }
    ]

    const headers = {
        "Nombre": "name",
        "Correo Electrónico": "email",
        "Rol": "role",
        "Dirección": "address"
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        document.body.classList.add(classes["modal-open"]);
        setIsEditModalOpen(true);
    };

    const handleOnDismiss = () => {
        document.body.classList.remove(classes["modal-open"])
        setIsEditModalOpen(false);
    }

    return (
        <div>
            <TableComponent
                data={data}
                headers={headers}
                role="admin"
                permission={true}
                onEditClick={handleEditClick}
                onDeleteClick={() => console.log("Delete")}
            />
            {isEditModalOpen &&
                <EditModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                />
            }
        </div>
    )
}
