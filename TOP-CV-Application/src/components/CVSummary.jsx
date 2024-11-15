import '../styles/CVSummary.css';

const CVSummary = ({ summary }) => {
    return (
        <div className="cv-summary">
            <h3>Summary</h3>
            <hr className="separator" />
            <p>
                {summary || 'Passionate and dedicated software engineer with experience in developing dynamic web applications. Skilled in JavaScript, React, and responsive design. Adept at problem-solving and continuously improving user experience.'}
            </p>
        </div>
    );
};

export default CVSummary;