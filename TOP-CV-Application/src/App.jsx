import React, { useState } from 'react';
import './App.css'
import HeaderForm from './components/HeaderForm';
import SummaryForm from './components/SummaryForm';
import ProfessionalExperienceSection from './components/ProfessionalExperienceSection';
import EducationSection from './components/EducationSection';
import CVHeader from './components/CVHeader';
import CVSummary from './components/CVSummary';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import CVLayout from './components/CVLayout';

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
