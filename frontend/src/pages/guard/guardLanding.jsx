import { useEffect } from "react";
import useForm from "./../../hooks/form/useForm";
import { BsCameraFill } from "react-icons/bs";
import useScanner from "../../hooks/scanner/useScanner";
import classes from "./GuardLanding.module.scss";
import InputGroup from "../../components/inputs/inputGroup";
import { INPUTS } from "../../consts/consts";

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
                <button
                    disabled={selectedCamera == ""}
                    onClick={handleStartScanning}
                >
                    {!scanning ? "Escanear QR" : "Dejar de escanear"}
                </button>
            </section>
            <section className={classes["Form_Container"]}>
                <h3>Registro de autoridades o servicios</h3>
                <div>
                    <InputGroup
                        inputs={INPUTS.ManualInputs}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <button onClick={handleOnSubmit} disabled={!validForm()}>
                        Registrar
                    </button>
                </div>
            </section>
        </div>
    );
};

export default GuardLanding;
