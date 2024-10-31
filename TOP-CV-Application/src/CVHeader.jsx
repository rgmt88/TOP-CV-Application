import './CVHeader.css';

const CVHeader = () => {
    return (
        <div className="cv-header">
            <h1 className="cv-name">John Doe</h1>
            <p className="cv-occupation">Software Engineer</p>
            <div className="cv-contact-info">
                <p>📞 +123-456-7890</p>    
                <p>✉️ johndoe@example.com</p>
                <p>🔗 github.com/johndoe</p>
            </div>
            <p className="cv-location">📍 New York, NY</p>
        </div>
    );
};

export default CVHeader;