import React, { useState } from 'react';
import './App.css'
import CVLayout from './CVLayout';
import HeaderForm from './HeaderForm';
import SummaryForm from './SummaryForm';
import ProfessionalExperienceSection from './ProfessionalExperienceSection';
import EducationSection from './EducationSection';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';

const App = () => {
  const [headerData, setHeaderData] = useState({
    name: '',
    occupation: '',
    phone: '',
    email: '',
    github: '',
    location: ''
  });

  const [summaryData, setSummaryData] = useState('');
  const [experiences, setExperiences] = useState([]);
  const [educationList, setEducationList] = useState([]);

  return (
    <div>
      <CVLayout
        inputContent={
          <>
            <HeaderForm headerData={headerData} setHeaderData={setHeaderData} />
            <SummaryForm summaryData={summaryData} setSummaryData={setSummaryData} />
            <ProfessionalExperienceSection
              experiences={experiences}
              setExperiences={setExperiences}
            />
            <EducationSection 
              educationList={educationList}
              setEducationList={setEducationList}
            />
          </>
        }
        outputContent={
        <>
          <CVHeader {...headerData} />
          <CVSummary summary={summaryData}/>
          <ProfessionalExperience experiences={experiences} />
          <Education educationList={educationList} />
        </>
        }
      />
    </div>
  )
}

export default App
