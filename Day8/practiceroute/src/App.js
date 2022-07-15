import './App.css';
import {Routes, Route} from 'react-router-dom';
import Input from './components/Input';
import WordColor from './components/WordColor'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<h1>Welcome</h1>}/>
        <Route exact path="/home" element={<h1>Welcome</h1>}/>
        <Route exact path="/:input" element={<Input/>}/>
        <Route exact path="/:string/:color" element={<WordColor/>}/>
      </Routes>
    </div>
  );
}

export default App;
