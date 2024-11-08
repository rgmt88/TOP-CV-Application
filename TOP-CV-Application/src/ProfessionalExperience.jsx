import JobExperience from "./JobExperience";
import './ProfessionalExperience.css';

const ProfessionalExperience = ( { experiences }) => {
    const placeholderJobs = [
        {
            title: "Software Engineer",
            years: "2019 - Present",
            company: "TechCorp",
            location: "New York, NY",
            responsibilities: [
                "Developed and maintained web applications using React and Node.js.",
                "Collaborated with cross-functional teams to design user-friendly interfaces.",
                "Implemented responsive design to ensure compatibility across devices.",
            ],
        },
        {
            title: "Frontend Developer",
            years: "2017 - 2019",
            company: "Web Solutions",
            location: "San Francisco, CA",
            responsibilities: [
                "Created dynamic user interfaces with modern JavaScript frameworks.",
                "Optimized website performance, reducing load time by 30%.",
                "Worked closely with UX designers to improve user experience.",
            ],
        },
        {
            title: "Junior Developer",
            years: "2015 - 2017",
            company: "Startup Inc.",
            location: "Austin, TX",
            responsibilities: [
                "Assisted in developing client projects, primarily using HTML, CSS, and JavaScript.",
                "Participated in code reviews and contributed to project documentation.",
                "Wrote automated tests to ensure code quality and reliability.",
            ],
        },
        {
            title: "Intern Developer",
            years: "2014 - 2015",
            company: "Innovate Lab",
            location: "Seattle, WA",
            responsibilities: [
                "Supported senior developers in building prototype applications.",
                "Gained hands-on experience with agile development practices.",
                "Performed debugging and troubleshooting on existing codebases.",
            ],
        },
    ];

    const jobsToDisplay = experiences.length > 0 ? experiences : placeholderJobs;

    return (
        <div className="professional-experience">
            <h3>Professional Experience</h3>
            <hr className="separator"/>
            {jobsToDisplay.map((job, index) => (
                <JobExperience 
                    key={index}
                    title={job.title}
                    years={job.years}
                    company={job.company}
                    location={job.location}
                    responsibilities={job.responsibilities}
                />
            ))}
        </div>
    );
};

export default ProfessionalExperience;