import { useState } from "react";
import '../styles/EducationForm.css';

const EducationForm = ({ onSave, onCancel }) => {
    const [education, setEducation] = useState({
        degree:'',
        years: '',
        school: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(education);
    };

    return (
        <form onSubmit={handleSubmit} className="education-form">
            <div>
                <label htmlFor="degree">Degree:</label>
                <input 
                    type="text"
                    id="degree"
                    name="degree"
                    value={education.degree}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="years">Years:</label>
                <input 
                    type="text"
                    id="years"
                    name="years"
                    value={education.years}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="school">School:</label>
                <input 
                    type="text"
                    id="school"
                    name="school"
                    value={education.school}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input 
                    type="text"
                    id="location"
                    name="location"
                    value={education.location}
                    onChange={handleChange}
                />
            </div>
            <button type="Submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EducationForm;