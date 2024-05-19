import classes from "./AdminLanding.module.scss";
import logo from "./../../../assets/Logo.svg";

const AdminLanding = () => {
    return (
        <>
            <div className={classes["AdminLanding_Container"]}>
                <div className={classes["Background_container"]}></div>
                <div className={classes["Logo_Container"]}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </>
    );
};

export default AdminLanding;
