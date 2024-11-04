import './CVHeader.css';

const CVHeader = ({ name, occupation, phone, email, github, location }) => {
    return (
        <div className="cv-header">
            <h1 className="cv-name">{name || 'John Doe'}</h1>
            <p className="cv-occupation">{occupation || 'Software Engineer'}</p>
            <div className="cv-contact-info">
                <p>📞 {phone || '+123-456-7890'}</p>    
                <p>✉️ {email || 'johndoe@example.com'}</p>
                <p>🔗 {github || 'github.com/johndoe'}</p>
            </div>
            <p className="cv-location">📍 {location || 'New York, NY'}</p>
        </div>
    );
};

export default CVHeader;