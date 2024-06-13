import { useState, useEffect } from "react";
import { useContinuousScanner } from '@yudiel/react-qr-scanner';

const useScanner = () => {
    const [ cameras, setCameras ] = useState([]);
    const [ selectedCamera, setSelectedCamera] = useState("");
    const [ startScan, setStartScan ] = useState(false);
    const [ scanResult, setScanResult ] = useState('');
    const { ref, startScanning, stopScanning, scanning } = useContinuousScanner({
        onResult: (data) => {
            if (data) {
                console.log(data);
                setScanResult(data);
            }
        },
        onError: (error) => {
            console.log(error);
        },
        options: {
            deviceId: selectedCamera,
        },
        audio: true
    });

    useEffect(() => {
        const constraints = { video: true };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                return navigator.mediaDevices.enumerateDevices();
            })
            .then(devices => {
                const cameraDevices = devices.filter(device => device.kind === 'videoinput');
                setCameras(cameraDevices);
                setSelectedCamera(cameraDevices[0]?.deviceId);
            })
            .catch(error => {
                console.error('Error enumerating devices:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedCamera != "" && startScan) {
            startScanning();
        }
    }, [scanning]);

    const handleChange = (e) => {
        const selectedDeviceId = e.target.value;
        setSelectedCamera(selectedDeviceId);
    };


    const handleStartScanning = () => {
        if (selectedCamera != "") {
            if (!scanning) {
                startScanning();
                setStartScan(true);
            }
            else {
                setStartScan(false);
                stopScanning();
            }
        }
    };

    return {handleChange, handleStartScanning, cameras, selectedCamera, ref, scanning, scanResult}
}

export default useScanner;