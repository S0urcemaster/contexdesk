import './globals.css'
import App from './app'

export default function Page() {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#25293C', height: 720, width: 1280, overflow: 'scroll', boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.1)'}}>
            <App />
        </div>
    )
}