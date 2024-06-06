import React, { useState } from 'react';
import DataModal from '../../../components/modals/DataModal.jsx';
import DeleteModal from '../../../components/modals/DeleteModal.jsx';
import SearchBar from '../../../components/searchBar/SearchBar.jsx';
import TableComponent from '../../../components/tableComponent/tableComponent';
import classes from './AdminUserManagement.module.scss';

export const AdminUserManagement = () => {
    const [isDataModalOpen, setIsDataModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("");

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
        },
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
        },
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
        },
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
        },
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
        },
    ];

    const headers = {
        "Nombre": "name",
        "Correo Electrónico": "email",
        "Rol": "role",
        "Dirección": "address"
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        document.body.classList.add(classes["modal-open"]);
        setIsDataModalOpen(true);
    };

    const handleOnDismiss = () => {
        document.body.classList.remove(classes["modal-open"])
        setIsDataModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        document.body.classList.add(classes["modal-open"]);
        setIsDeleteModalOpen(true);
    };

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    return (
        <div className={classes["AdminUserManagement_Container"]}>
            <div className={classes["search-bar-div"]}>
                <SearchBar
                    value={search}
                    onSearchChange={handleSearchChange}
                    placeHolder={"Buscar por correo electrónico..."}
                    classname={classes["search-bar"]}
                />
            </div>
            <TableComponent
                data={data}
                headers={headers}
                role="admin"
                permission={true}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
            />
            {isDataModalOpen &&
                <DataModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                    mode={"user"}
                />
            }
            {isDeleteModalOpen &&
                <DeleteModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                    mode={"user"}
                />
            }
        </div>
    )
}
