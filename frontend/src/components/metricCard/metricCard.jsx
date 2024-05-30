import { FaHouseUser, FaCarSide, FaUserShield } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";

import classes from "./MetricCard.module.scss";

const MetricCard = ({ text = "", total = 0, icon = "" }) => {
    const icons = () => {
        switch (icon) {
            case "HiMiniUserGroup":
                return <HiMiniUserGroup />;
                break;
            case "FaHouseUser":
                return <FaHouseUser />;
                break;
            case "FaHouseChimney":
                return <FaHouseChimney />;
                break;
            case "FaCarSide":
                return <FaCarSide />;
                break;
            case "FaUserShield":
                return <FaUserShield />;
                break;
            default:
                break;
        }
    };
    return (
        <div className={classes["Metric_Card"]}>
            <span className={classes["Icon_Container"]}>
                {icons()}
            </span>
            <section className={classes["Text_Container"]}>
                <h3>{text}</h3>
                <p>{total}</p>
            </section>
        </div>
    );
};

export default MetricCard;
