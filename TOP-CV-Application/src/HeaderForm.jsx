const HeaderForm = ({ headerData, setHeaderData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setHeaderData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form className="header-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={headerData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="occupation">Occupation:</label>
                <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    placeholder="Software Engineer"
                    value={headerData.occupation}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input 
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+123-456-7890"
                    value={headerData.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    value={headerData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="github">GitHub:</label>
                <input 
                    type="text"
                    id="github"
                    name="github"
                    placeholder="github.com/johndoe"
                    value={headerData.github}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="New York, NY"
                    value={headerData.location}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default HeaderForm;