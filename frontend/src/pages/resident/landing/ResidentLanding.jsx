import { useState } from "react";
import { MdInfo } from "react-icons/md";
import FilledButton from "../../../components/Buttons/Filled/FilledButton.jsx";
import Bubble from "../../../components/bubble/bubble.jsx";
import Instructions from "../../../components/instructions/instructions.jsx";
import QRContainer from "../../../components/qrContainer/qrContainer.jsx";
import classes from "./ResidentLanding.module.scss";

const ResidentLanding = () => {
    const [showQR, setShowQR] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const handleInfoClick = () => {
        setShowInstructions(showInstructions ? false : true);
        console.log("in");
    }

    return (
        <div className={classes["ResidentLandingContainer"]}>
            {showInstructions &&
                <div className={classes["modal-background"]}>
                    <div className={classes["modal-container"]}>
                        <div className={classes["instructions"]}>
                            <Instructions />
                        </div>
                        <div className={classes["go-back"]}>
                            <FilledButton text={"Go Back"} onClick={handleInfoClick} />
                        </div>
                    </div>
                </div>
            }
            <div className={classes["qr-container"]}>
                <QRContainer />
            </div>

            {!showInstructions &&
                <div className={classes["icon-container"]}>
                    <Bubble icon={<MdInfo />} color={"#6AA6C6"} handleClick={handleInfoClick} />
                </div>
            }
        </div>
    )
}

export default ResidentLanding;