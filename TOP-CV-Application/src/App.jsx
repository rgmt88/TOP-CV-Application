import React, { useState } from 'react';
import './App.css'
import CVLayout from './CVLayout';
import CVHeader from './CVHeader';
import HeaderForm from './HeaderForm';
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

  return (
    <div>
      <CVLayout
        inputContent={
          <HeaderForm headerData={headerData} setHeaderData={setHeaderData} />
        }
        outputContent={
        <>
          <CVHeader {...headerData} />
          <CVSummary />
          <ProfessionalExperience />
          <Education />
        </>
        }
      />
    </div>
  )
}

export default App
