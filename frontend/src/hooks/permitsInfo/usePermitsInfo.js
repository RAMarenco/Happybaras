import { useState } from "react"
import { URL } from "../../consts/consts"

const usePermitsInfo = (route) => {
    const dummyData = [
        {
            resident: "John Doe",
            date: "19 de abril 2024 - 10:00 a 13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            resident: "John Doe",
            date: "19 de abril 2024 - 10:00 a 13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            resident: "John Doe",
            date: "19 de abril 2024 - 10:00 a 13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            resident: "John Doe",
            date: "19 de abril 2024 - 10:00 a 13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        }
    ]
    const [data, setData] = useState([]);
    
    const loadData = async () => {
        /*
        const response = await fetch(`${URL}/${route}`, {
            method: "GET"
        });

        if(response.ok) {
            const responseData = await response.json();
            setData(responseData.data);
        }
        */
        setData(dummyData);
    }

    return[data, loadData];
}

export default usePermitsInfo;