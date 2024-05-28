import { useState } from "react"
import { URL } from "../../consts/consts"

const usePermitsInfo = () => {
    const [permits, setPermits] = useState([]);

    const dummyPermits = [
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "John Doe",
            date: "2024-10-29 10:00 a 13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "Jane Doe",
            date: "2024-10-29 - 12:00 a 13:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "John Doe",
            date: "2024-10-29 - 14:00 a 15:00",
            address: "Calle Primavera #123, Residencial Las Flores"
        },
        {
            id: "A378F7E1-94AD-432E-9DB1-41BADDBDAE8F",
            resident: "Jane Doe",
            date: "2024-10-29 - 18:00 a 20:00",
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