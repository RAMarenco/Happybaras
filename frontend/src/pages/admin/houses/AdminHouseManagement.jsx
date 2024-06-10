import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { buttonColorsStrings } from "../../../components/Buttons/ButtonColorStrings";
import FilledButton from "../../../components/Buttons/Filled/FilledButton";
import DataModal from "../../../components/modals/DataModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import SearchBar from "../../../components/searchBar/SearchBar";
import TableComponent from "../../../components/tableComponent/tableComponent";
import classes from "./AdminHouseManagement.module.scss";

const AdminHouseManagement = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("");

    const data = [
        {
            id: 1,
            address: "Olivos #10",
            residence: 1,
            phone: "1234-5678",
            mainResident: "Juan Perez",
            mainResidentEmail: "juan@mail.com",
            habitants: 4
        },
        {
            id: 2,
            address: "Olivos #11",
            residence: 2,
            phone: "1234-5678",
            mainResident: "John Doe",
            mainResidentEmail: "john@mail.com",
            habitants: 3
        },
        {
            id: 3,
            address: "Olivos #12",
            residence: 3,
            mainResident: "Michelle Rivas Gutierritos",
            mainResidentEmail: "michelle_rivas@mail.com",
            phone: "1234-5678",
            habitants: 2
        },
        {
            id: 4,
            address: "Olivos #13",
            residence: 4,
            mainResident: "Malenco",
            mainResidentEmail: "malenco@mail.com",
            phone: "1234-5678",
            habitants: 1
        },
        {
            id: 5,
            address: "Olivos #14",
            residence: 5,
            mainResident: "Juan Perez",
            mainResidentEmail: "juan@mail.com",
            phone: "1234-5678",
            habitants: 5
        }
    ];

    const headers = {
        "Dirección": "address",
        "# residencia": "residence",
        "# teléfono": "phone",
        "Encargado": "mainResident",
        "# habitantes": "habitants"
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
        setIsCreateModalOpen(false);
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        document.body.classList.add(classes["modal-open"]);
        setIsDeleteModalOpen(true);
    };

    const handleCreateClick = () => {
        document.body.classList.add(classes["modal-open"]);
        setIsCreateModalOpen(true);
    }

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    return (
        <div className={classes["AdminHouseManagement_Container"]}>
            <div className={classes["search-bar-div"]}>
                <SearchBar
                    value={search}
                    onSearchChange={handleSearchChange}
                    placeHolder={"Buscar por número de residencia..."}
                    classname={classes["search-bar"]}
                />
                <FilledButton
                    icon={<FaPlus />}
                    text="Agregar residencia"
                    onClick={handleCreateClick}
                    color={buttonColorsStrings.accentGreen}
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
            {isEditModalOpen &&
                <DataModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                    mode={"house"}
                />
            }
            {isDeleteModalOpen &&
                <DeleteModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                    mode={"house"}
                />
            }
            {isCreateModalOpen &&
                <DataModal
                    onDismiss={handleOnDismiss}
                    mode={"create"}
                />
            }
        </div>
    )
}


export default AdminHouseManagement;