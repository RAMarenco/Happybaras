import { useState } from "react";
import { URL } from "../../consts/consts";

const useModalForm = (user, endpoint, method = "PATCH", onSuccess) => {
    const [data, setData] = useState(user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${URL}/${endpoint}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            if(!response.ok) {
                throw new Error("Error updating data");
            }

            const updatedUser = await response.json();
            setData(updatedUser);

            if(onSuccess) {
                onSuccess(updatedUser);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return {
        data,
        handleChange,
        handleOnSubmit
    };
}

export default useModalForm;