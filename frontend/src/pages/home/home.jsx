import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";

import classes from "./Home.module.scss";
import Welcome from "./../../assets/Welcome.png";

const Home = () => {
    localStorage.setItem(
        "dataStorage",
        JSON.stringify({
            token: "something",
            user: {
                role: "admin",
            },
        })
    );
    const login = useGoogleLogin({
        flow: "implicit",
        onSuccess: async (tokenResponse) => {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`,
                }
            })
            const data = await response.json();
            console.log(data);
        },
        onError: (error) => console.log(error),
    });

    return (
        <div className={classes["Home_Container"]}>
            <div className={classes["Text_Container"]}>
                <h1>
                    Bienvenido a
                    <br />
                    <span>HAPPY</span>
                </h1>
                
                <button onClick={() => login()}>
                    <FcGoogle />
                    Ingresar con Google
                </button>

                <span>
                    Tu compañero
                    <br />
                    confiable en seguridad.
                </span>
            </div>
            <div className={classes["Image_Container"]}>
                <img
                    src={Welcome}
                    alt="Hand holding a phone thats scanning a QR code"
                />
            </div>
        </div>
    );
};

export default Home;
