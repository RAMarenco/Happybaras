import { useState } from "react"

const useAvatar = () => {
    const [img, setImg] = useState("https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg");

    /*
        TODO: realizar proceso para obtener el avatar del usuario 
    */

        return img;
}

export {useAvatar};
