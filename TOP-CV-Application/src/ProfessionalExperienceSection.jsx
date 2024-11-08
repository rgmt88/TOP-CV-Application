import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const ProfessionalExperienceSection = ({ experiences, setExperiences }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const maxEntries = 4;

    const addExperience = (newExperience) => {
        if (experiences.length < maxEntries) {
            setExperiences([...experiences, newExperience]);
            setIsFormVisible(false);
        }
    };

    const removeExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const moveExperience = (index, direction) => {
        const newOrder = [...experiences];
        const [removed] = newOrder.splice(index, 1);
        newOrder.splice(index + direction, 0, removed);
        setExperiences(newOrder);
    };

    return (
        <div>
            <h3>Professional Experience</h3>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h4>{exp.title} at {exp.company}</h4>
                    <p>{exp.years} | {exp.location}</p>
                    <ul>
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                    <button onClick={() => moveExperience(index, -1)} disabled={index === 0}>Move Up</button>
                    <button onClick={() => moveExperience(index, 1)} disabled={index === experiences.length - 1}>Move Down</button>
                    <button onClick={() => removeExperience(index)}>Remove</button>
                </div>
            ))}
            {isFormVisible ? (
                <ExperienceForm
                    onSave={addExperience}
                    onCancel={() => setIsFormVisible(false)}
                />
            ) : (
                <button onClick={() => setIsFormVisible(true)} disabled={experiences.length >= maxEntries}>Add Experience</button>
            )}
        </div>
    );
};

export default ProfessionalExperienceSection;