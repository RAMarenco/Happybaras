import { QRCode } from "react-qrcode-logo";

const QRGenerator = ({value}) => {
    return(
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode value={value} logoImage="/src/assets/Logo.svg" logoPadding={4}/>
        </div>
    )
}

export default QRGenerator;