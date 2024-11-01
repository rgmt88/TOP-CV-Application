import './JobExperience.css';

const JobExperience = ( { title, years, company, location, responsibilities }) => {
    return (
        <div className="job-experience">
            <div className="job-title-container">
                <p className="job-title">{title}</p>
                <p className="job-years">{years}</p>
            </div>
            <div className="job-details-container">
                <p className="job-company">{company}</p>
                <p className="job-location">{location}</p>
            </div>
            <ul>
                {responsibilities.map((bullet, index) =>(
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobExperience;