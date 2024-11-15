import EducationItem from "./EducationItem";
import './Education.css';

const Education = ({ educationList }) => {
    const placeholderEducation = [
        {
            degree: "MS in Computer Science",
            years: "2016 - 2018",
            school: "Stanford University",
            location: "Stanford, CA",
        },
        {
            degree: "BS in Software Engineering",
            years: "2012 - 2016",
            school: "University of California",
            location: "Berkeley, CA",
        },
    ];

    const educationDataToDisplay = educationList.length > 0 ? educationList : placeholderEducation;

    return (
        <div className="education">
            <h3>Education</h3>
            <hr className="separator" />
            {educationDataToDisplay.map((edu, index) => (
                <EducationItem 
                    key={index}
                    degree={edu.degree}
                    years={edu.years}
                    school={edu.school}
                    location={edu.location}
                />
            ))}
        </div>
    );
};

export default Education;