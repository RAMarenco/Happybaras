import { useState } from "react"

const useRole = () => {
    const [role, setRole] = useState("admin");

    /*
        TODO: realizar proceso para obtener el rol desde las cookies 
    */

    return role;
}

const useAvatar = () => {
    const [img, setImg] = useState("/src/assets/Avatar.svg");

    /*
        TODO: realizar proceso para obtener el avatar del usuario 
    */

        return img;
}

export {useAvatar, useRole};
