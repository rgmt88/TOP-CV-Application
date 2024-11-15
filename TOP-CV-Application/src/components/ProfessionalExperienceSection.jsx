import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import Modal from "./Modal";
import '../styles/ProfessionalExperienceSection.css';

const ProfessionalExperienceSection = ({ experiences, setExperiences }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const maxEntries = 4;

    const addExperience = (newExperience) => {
        if (experiences.length < maxEntries) {
            setExperiences([...experiences, newExperience]);
            setIsFormVisible(false);
        }
    };

    const updateExperience = (updatedExperience) => {
        const updatedExperiences = experiences.map((exp, index) =>
            index === editingIndex ? updatedExperience : exp
        );
        setExperiences(updatedExperiences);
        setEditingIndex(null);
        setIsFormVisible(false);
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

    const handleEdit = (index) => {
        setEditingIndex(index);
        setIsFormVisible(true);
    };

    return (
        <div className="professional-experience-section">
            <h4>Professional Experience:</h4>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h4>{exp.title} | {exp.years}</h4>
                        <p>{exp.company} | {exp.location}</p>
                        <ul>
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                        <div className="experience-buttons">
                            <button onClick={() => moveExperience(index, -1)} disabled={index === 0}>Move Up</button>
                            <button onClick={() => moveExperience(index, 1)} disabled={index === experiences.length - 1}>Move Down</button>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => removeExperience(index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-experience" onClick={() => setIsFormVisible(true)} disabled={experiences.length >= maxEntries}>
                Add Experience
            </button>

            {isFormVisible && (
                <Modal onClose={() => { setIsFormVisible(false); setEditingIndex(null); }}>
                    <ExperienceForm
                        onSave={editingIndex !== null ? updateExperience : addExperience}
                        onCancel={() => { setIsFormVisible(false); setEditingIndex(null); }}
                        initialData={editingIndex !== null ? experiences[editingIndex] : null}
                    />
                </Modal>
            )}
        </div>
    );
};

export default ProfessionalExperienceSection;