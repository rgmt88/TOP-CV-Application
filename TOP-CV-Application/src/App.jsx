import './App.css'
import CVLayout from './CVLayout';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';

function App() {
  return (
    <div>
      <CVLayout
        inputContent={''}
        outputContent={
        <>
          <CVHeader />
          <CVSummary />
          <ProfessionalExperience />
          <Education />
        </>
        }
      />
    </div>
  );
};

export default App
