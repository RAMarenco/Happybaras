import React, { useState } from 'react';
import { DeleteModal } from '../../../components/modals/DeleteModal.jsx';
import { EditModal } from '../../../components/modals/EditModal';
import TableComponent from '../../../components/tableComponent/tableComponent';
import classes from './AdminUserManagement.module.scss';

export const AdminUserManagement = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
            name: "Michelle Rivas Gutierritos",
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
        setIsDeleteModalOpen(false);
    }

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        document.body.classList.add(classes["modal-open"]);
        setIsDeleteModalOpen(true);
    }

    return (
        <div>
            <TableComponent
                data={data}
                headers={headers}
                role="admin"
                permission={true}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            {isEditModalOpen &&
                <EditModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                />
            }
            {isDeleteModalOpen &&
                <DeleteModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                />
            }
        </div>
    )
}
