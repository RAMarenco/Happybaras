import { useState } from "react";
import QRContainer from "../../../components/qrContainer/qrContainer.jsx";
import classes from "./ResidentLanding.module.scss"
import InstructionsModal from "../../../components/modals/instructionsModal/instructionsModal.jsx";
import FilledButton from "../../../components/Buttons/Filled/FilledButton.jsx";
import Instructions from "../../../components/instructions/instructions.jsx";

const ResidentLanding = () => {
    const [showQR, setShowQR] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const handleGenerateQRClick = (F) => {
        if (!showQR)
            setShowQR(true)
    }

    return (
        <div className={classes["ResidentLandingContainer"]}>
            {showInstructions
                ?
                    <Instructions />
                :
                <QRContainer onGoBack={() => { handleGoBack() }} />
            }
        </div>
    )
}

export default ResidentLanding;