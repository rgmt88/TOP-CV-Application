import React, { useState } from 'react';

const ExperienceForm = ({ onSave, onCancel }) => {
    const [experience, setExperience] = useState({
        title: '',
        years: '',
        company: '',
        location: '',
        responsibilities: ['', '', ''],
    });

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={experience.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Years:</label>
                <input
                    type="text"
                    name="years"
                    value={experience.years}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Company:</label>
                <input
                    type="text"
                    name="company"
                    value={experience.company}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={experience.location}
                    onChange={handleChange}
                />
            </div>
            {experience.responsibilities.map((resp, index) => (
                <div key={index}>
                    <label>Responsibility {index + 1}</label>
                    <input
                        type="text"
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