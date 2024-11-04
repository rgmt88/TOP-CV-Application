import './SummaryForm.css';

const SummaryForm = ({ summaryData, setSummaryData }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        
        // Limit to 400 words
        const wordCount = value.split(/\s+/).filter((word) => word).length;
        if (wordCount <= 400) {
            setSummaryData(value);
        };
    };

    return (
        <form className="summary-form">
            <div>
                <label htmlFor="summary">Summary (max 400 words):</label>
                <textarea
                id="summary"
                name="summary"
                placeholder="Write a brief summary about your professional background..."
                value={summaryData}
                onChange={handleChange}
                rows="5"
                cols="50"
                ></textarea>
                <p className="word-counter">
                    {400 - summaryData.split(/\s+/).filter((word) => word).length} words remaining
                </p>
            </div>
        </form>
    );
};

export default SummaryForm;