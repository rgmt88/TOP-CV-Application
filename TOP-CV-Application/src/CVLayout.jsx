import './CVLayout.css'

const CVLayout = ({ inputContent, outputContent }) => {
    return (
        <div className="cv-container">
            <div className="input-section">
                <h2>Input Data</h2>
                {inputContent}
            </div>
            <div className="output-section">
                <h2>CV Preview</h2>
                <div className="cv-preview">
                    {outputContent}
                </div>
            </div>
        </div>
    );
};

export default CVLayout;