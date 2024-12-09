import '../styles/CVLayout.css'

const CVLayout = ({ inputContent, outputContent }) => {
    const handlePrint = () => {
        // Trigger the browser's print functionality
        window.print(); 
    };

    return (
        <div className="cv-container">
            <div className="input-section">
                <h2>Input Data</h2>
                {inputContent}
            </div>
            <div className="output-section">
                <div className="output-header">
                    <h2>CV Preview</h2>
                    <button onClick={handlePrint} className="print-button">Print / Save as PDF</button>
                </div>
                <div className="cv-preview">
                    {outputContent}
                </div>
            </div>
        </div>
    );
};

export default CVLayout;