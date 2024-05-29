import { useEffect } from "react";
import { BsCameraFill } from "react-icons/bs";
import { INPUTS } from "../../consts/consts";
import useForm from "./../../hooks/form/useForm";
import useScanner from "../../hooks/scanner/useScanner";
import InputGroup from "../../components/inputs/inputGroup";
import FilledButton from "../../components/Buttons/Filled/FilledButton";
import classes from "./GuardLanding.module.scss";

const GuardLanding = () => {
    const info = {
        name: "",
        document: "",
        address: "",
        reason: "",
    };

    const { handleOnChange, handleOnSubmit, validForm } = useForm(
        "visit",
        info
    );

    const {
        handleChange,
        handleStartScanning,
        cameras,
        selectedCamera,
        scanning,
        ref,
        scanResult,
    } = useScanner();

    useEffect(() => {
        if (scanResult !== "") alert(scanResult);
    }, [scanResult]);

    const cameraMap =
        cameras.length > 0 &&
        cameras.map((camera) => {
            return (
                <option key={camera.deviceId} value={camera.deviceId}>
                    {camera.label}
                </option>
            );
        });

    return (
        <div className={classes["GuardLanding_Container"]}>
            <section className={classes["Scanner_Container"]}>
                <div>
                    <h3>Escanear QR para control de acceso</h3>
                    <select onChange={handleChange}>
                        {cameras.length > 0 && cameraMap}
                    </select>
                </div>

                <div className={classes["Scanner_Frame"]}>
                    <video ref={ref} />
                    {!scanning && <BsCameraFill />}
                    <div
                        className={[
                            classes["line"],
                            classes["top-left-line"],
                        ].join(" ")}
                    ></div>
                    <div
                        className={[
                            classes["line"],
                            classes["top-right-line"],
                        ].join(" ")}
                    ></div>
                    <div
                        className={[
                            classes["line"],
                            classes["bottom-left-line"],
                        ].join(" ")}
                    ></div>
                    <div
                        className={[
                            classes["line"],
                            classes["bottom-right-line"],
                        ].join(" ")}
                    ></div>
                </div>
                {
                    //
                }
                <FilledButton
                    text={!scanning ? "Escanear QR" : "Dejar de escanear"}
                    disabled={selectedCamera == ""}
                    onClick={handleStartScanning}
                />
            </section>
            <section className={classes["Form_Container"]}>
                <h3>Registro de autoridades o servicios</h3>
                <div>
                    <InputGroup
                        inputs={INPUTS.ManualInputs}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <FilledButton
                        onClick={handleOnSubmit}
                        disabled={!validForm()}
                        text="Registrar"
                    />
                </div>
            </section>
        </div>
    );
};

export default GuardLanding;
