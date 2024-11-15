import { useState } from 'react';
import EducationForm from './EducationForm';
import Modal from './Modal';
import './EducationSection.css'

const EducationSection = ({ educationList, setEducationList }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const maxEntries = 2;

    const addEducation = (newEducation) => {
        if (educationList.length < maxEntries) {
            setEducationList([...educationList, newEducation]);
            setIsFormVisible(false);
        }
    };

    const removeEducation = (index) => {
        setEducationList(educationList.filter((_, i) => i !== index));
    };

    return (
        <div className="education-section">
            <h4>Education Input:</h4>
            
            <div className="education-list">
                {educationList.map((edu, index) => (
                    <div key={index} className="education-entry">
                        <p>{edu.degree} ({edu.years})</p>
                        <p>{edu.school}, {edu.location}</p>
                        <button onClick={() => removeEducation(index)} className="remove-education">Remove</button>
                    </div>
                ))}
            </div>

            <button onClick={() => setIsFormVisible(true)} disabled={educationList.length >= maxEntries} className="add-education">Add Education</button>

            {isFormVisible && (
                <Modal onClose={() => setIsFormVisible(false)}>
                    <EducationForm 
                        onSave={addEducation}
                        onCancel={() => setIsFormVisible(false)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default EducationSection;