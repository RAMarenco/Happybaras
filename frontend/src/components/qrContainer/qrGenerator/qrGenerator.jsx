import QRCode from "react-qr-code";

const QRGenerator = ({value}) => {
    return(
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode value={value} />
        </div>
    )
}

export default QRGenerator;