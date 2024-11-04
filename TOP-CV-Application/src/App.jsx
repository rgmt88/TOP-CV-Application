import React, { useState } from 'react';
import './App.css'
import CVLayout from './CVLayout';
import HeaderForm from './HeaderForm';
import SummaryForm from './SummaryForm';
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

  return (
    <div>
      <CVLayout
        inputContent={
          <>
            <HeaderForm headerData={headerData} setHeaderData={setHeaderData} />
            <SummaryForm summaryData={summaryData} setSummaryData={setSummaryData} />
          </>
        }
        outputContent={
        <>
          <CVHeader {...headerData} />
          <CVSummary summary={summaryData}/>
          <ProfessionalExperience />
          <Education />
        </>
        }
      />
    </div>
  )
}

export default App
