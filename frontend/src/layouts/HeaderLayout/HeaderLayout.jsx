import classes from './HeaderLayout.module.scss';

const HeaderLayout = ({type, children}) => {
    const imgSource = "/src/assets/Avatar.svg"; // To obtain from the backend

    return(
        <header className={classes[type]}>
            <img src="/src/assets/Logo.svg" alt="Logo" />

            <div className={classes["RightContainer"]}>
                {children}

                <div className={classes["Avatar"]}>
                    <img src={imgSource} alt="Avatar" />
                </div>
            </div>
        </header>
    )
}

export default HeaderLayout;