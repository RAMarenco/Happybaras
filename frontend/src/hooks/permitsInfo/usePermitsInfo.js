import { useState } from "react"
import { URL } from "../../consts/consts"

const usePermitsInfo = () => {
    const [permits, setPermits] = useState([]);

    const dummyPermits = [
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "John Doe",
            begin_date: "2024-10-29",
            end_date: "2024-10-29",
            begin_hour: "10:00",
            end_hour: "13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "John Doe",
            begin_date: "2024-10-29",
            end_date: "2024-10-29",
            begin_hour: "10:00",
            end_hour: "13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "John Doe",
            begin_date: "2024-10-29",
            end_date: "2024-10-29",
            begin_hour: "10:00",
            end_hour: "13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "John Doe",
            begin_date: "2024-10-29",
            end_date: "2024-10-29",
            begin_hour: "10:00",
            end_hour: "13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        }
    ]

    const loadPermits = async (route) => {
        /*
        const response = await fetch(`${URL}/${route}`, {
            method: "GET"
        });

        if(response.ok) {
            const responseData = await response.json();
            setPermits(responseData.permits);
        }
        */
        setPermits(dummyPermits); // setPermits()
    }

    return[permits, loadPermits];
}

export default usePermitsInfo;