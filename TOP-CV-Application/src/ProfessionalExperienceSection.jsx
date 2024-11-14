import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import Modal from "./Modal";

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
            <h4>Professional Experience:</h4>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h4>{exp.title} | {exp.years}</h4>
                    <p>{exp.company} | {exp.location}</p>
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
            <button onClick={() => setIsFormVisible(true)} disabled={experiences.length >= maxEntries}>
                Add Experience
            </button>

            {isFormVisible && (
                <Modal onClose={() => setIsFormVisible(false)}>
                    <ExperienceForm
                        onSave={addExperience}
                        onCancel={() => setIsFormVisible(false)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default ProfessionalExperienceSection;