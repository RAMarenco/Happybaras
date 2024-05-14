import { useState } from "react";
import { URL } from "../../consts/consts";

const useForm = (route, info) => {
    const [data, setData] = useState(info);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOnSubmit = async () => {
        const response = await fetch(`${URL}/${route}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        
        if (response.ok) {
            const responseData = await response.json();
            alert(responseData.message);
        } else {
            alert("Error al registrar la visita");
        }
        setData(info);
    }

    const validForm = () => {
        // Check for empty object first
        if (Object.keys(data).length === 0) return true; // No data, not valid
        // Use some to check if all values are non-empty
        return Object.values(data).every(value => value.trim() !== "");
    };

    return {data, setData, handleOnChange, handleOnSubmit, validForm};
}

export default useForm;