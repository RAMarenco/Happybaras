import { useState } from "react"

const useRole = () => {
    const [role, setRole] = useState("admin");

    /*
        TODO: realizar proceso para obtener el rol desde las cookies 
    */

    return role;
}

const useAvatar = () => {
    const [img, setImg] = useState("https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg");

    /*
        TODO: realizar proceso para obtener el avatar del usuario 
    */

        return img;
}

export {useAvatar, useRole};
