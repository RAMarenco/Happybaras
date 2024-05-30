import { useState } from "react";
import FilledButton from "../../../components/Buttons/Filled/FilledButton";
import SearchBar from "../../../components/searchBar/SearchBar";
import { FaPlus } from "react-icons/fa";
import "./members.scss";
import MemberCard from "../../../components/memberCard/MemberCard";
import ROLES from "../../../consts/roleConsts";

const dummyData = [
    {
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "normalResident"
    },
    {
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "normalResident"
    },
    {
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "mainResident"
    },
    {
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "mainResident"
    },
    {
        name: "Juan Perez",
        email: "juanperez@gmail.com",
        role: "mainResident"
    }
]

const Members = () => {
    const [search, setSearch] = useState("");
    const getLocalRole = localStorage.getItem("dataStorage");
    const role = JSON.parse(getLocalRole);

    const handleSearchChange = (value) => {
        setSearch(value);
    }

    const handlePermission = (role) => {
        if(role === ROLES.MAINRESIDENT){
            return true
        }else{
            return false
        }
    }

    console.log(role.user.role)

    return(
        <div className="members-container">
            <div className="members-info">
                <div className="members-data">
                    <p>Residencia #16</p>
                    <p>Miembros totales: 5</p>
                </div>
                { handlePermission(role.user.role) ? 
                    <div className="members-actions">
                        <SearchBar 
                            value={search} 
                            onSearchChange={handleSearchChange} 
                            placeHolder={"Buscar por correo electronico..."}
                        />
                        <FilledButton icon={<FaPlus/>}  text="Agregar residente" />
                    </div> :
                    <></>
                }
            </div>
            <div className="members-cards-content">
                {
                    dummyData.map((data, index) => {
                        return(
                            <MemberCard 
                            key={index} 
                            name={data.name}
                            role={data.role}
                            email={data.email}
                            permission={handlePermission(role.user.role)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Members;