import React, { useState } from 'react';
import '../styles/ExperienceForm.css';

const ExperienceForm = ({ onSave, onCancel, initialData }) => {
    const [experience, setExperience] = useState(() => ({
        title: initialData?.title || '',
        years: initialData?.years || '',
        company: initialData?.company || '',
        location: initialData?.location || '',
        responsibilities: initialData?.responsibilities || ['', '', ''],
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleResponsibilityChange = (index, value) => {
        const updatedResponsibilities = [...experience.responsibilities];
        updatedResponsibilities[index] = value;
        setExperience((prev) => ({
            ...prev,
            responsibilities: updatedResponsibilities,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(experience);
    };

    return (
        <form className="experience-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={experience.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="years">Years:</label>
                <input
                    type="text"
                    id="years"
                    name="years"
                    value={experience.years}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={experience.company}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={experience.location}
                    onChange={handleChange}
                />
            </div>
            {experience.responsibilities.map((resp, index) => (
                <div key={index}>
                    <label htmlFor={`responsibility-${index}`}>Responsibility {index + 1}:</label>
                    <input
                        type="text"
                        id={`responsibility-${index}`}
                        value={resp}
                        onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                    />
                </div>
            ))}
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default ExperienceForm;