//import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";

import classes from "./Home.module.scss"
import Welcome from "./../../assets/Welcome.png"

const Home = () => {
    /*const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: error => console.log(error),
    });*/

    return (
        <div className={classes["Home_Container"]}>
            <div className={classes["Text_Container"]}>
                <h1>Bienvenidos a 
                    <br />
                    <span>HAPPY</span>
                </h1>

                {/*
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                    />
                */}

                <button onClick={() => login()}>
                    <FcGoogle/>
                    Ingresar con Google
                </button>

                <span>
                    Tu compañero
                    <br />
                    confiable en seguridad.
                </span>
            </div>
            <div className={classes["Image_Container"]}>
                <img src={Welcome} alt="Hand holding a phone thats scanning a QR code" />
            </div>
        </div>
    )
}

export default Home