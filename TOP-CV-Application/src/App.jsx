import './App.css'
import CVLayout from './CVLayout';
import CVHeader from './CVHeader';

function App() {
  return (
    <div>
      <CVLayout
        inputContent={''}
        outputContent={<CVHeader />}
      />
    </div>
  );
};

export default App
