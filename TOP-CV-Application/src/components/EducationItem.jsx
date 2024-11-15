import '../styles/EducationItem.css';

const EducationItem = ({ degree, years, school, location }) => {
    return (
        <div className="education-item">
            <div className="education-title-container">
                <p className="education-degree">{degree}</p>
                <p className="education-years">{years}</p>
            </div>
            <div className="education-details-container">
                <p className="education-school">{school}</p>
                <p className="education-location">{location}</p>
            </div>
        </div>
    );
};

export default EducationItem;