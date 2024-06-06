import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FilledButton from "../../../components/Buttons/Filled/FilledButton";
import MemberCard from "../../../components/memberCard/MemberCard";
import DeleteModal from "../../../components/modals/DeleteModal.jsx";
import SearchBar from "../../../components/searchBar/SearchBar";
import ROLES from "../../../consts/roleConsts";
import "./members.scss";

const dummyData = [
    {
        id: "1",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "normalResident",
    },
    {
        id: "2",
        name: "Michelle Rivas Gutierritos",
        email: "mrivasasdasdasas@gmail.com",
        role: "normalResident",
    },
    {
        id: "3",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "mainResident",
    },
    {
        id: "4",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "mainResident",
    },
    {
        id: "5",
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "mainResident",
    },
];

const Members = () => {
    const [search, setSearch] = useState("");
    const getLocalRole = localStorage.getItem("dataStorage");
    const role = JSON.parse(getLocalRole);
    const [isClicked, setIsClicked] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDeleteClick = (user) => {
        setSelectedUser(user)
        document.body.classList.add("modal-open");
        setIsClicked(true);
    };

    const handleOnDismiss = () => {
        document.body.classList.remove("modal-open")
        setIsClicked(false);
    }

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    const handlePermission = (role) => {
        if (role === ROLES.MAINRESIDENT) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="members-container">
            {isClicked &&
                <DeleteModal
                    userData={selectedUser}
                    onDismiss={handleOnDismiss}
                />
            }
            <div className="members-info">
                <div className="members-data">
                    <p>Residencia #16</p>
                    <p>Miembros totales: 5</p>
                </div>
                {handlePermission(role.user.role) ? (
                    <div className="members-actions">
                        <SearchBar
                            value={search}
                            onSearchChange={handleSearchChange}
                            placeHolder={"Buscar por correo electronico..."}
                        />
                        <FilledButton
                            icon={<FaPlus />}
                            text="Agregar residente"
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="members-cards-content">
                {dummyData.map((data, index) => {
                    return (
                        <MemberCard
                            key={index}
                            id={data.id}
                            name={data.name}
                            role={data.role}
                            email={data.email}
                            permission={handlePermission(role.user.role)}
                            onClick={handleDeleteClick}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Members;
