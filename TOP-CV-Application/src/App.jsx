import './App.css'
import CVLayout from './CVLayout';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';
import ProfessionalExperience from './ProfessionalExperience';

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
        </>
        }
      />
    </div>
  );
};

export default App
