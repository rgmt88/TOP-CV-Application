import './App.css'
import CVLayout from './CVLayout';
import CVHeader from './CVHeader';
import CVSummary from './CVSummary';

function App() {
  return (
    <div>
      <CVLayout
        inputContent={''}
        outputContent={
        <>
          <CVHeader />
          <CVSummary />
        </>
        }
      />
    </div>
  );
};

export default App
