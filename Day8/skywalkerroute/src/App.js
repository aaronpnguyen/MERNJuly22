import './App.css';
import Skywalker from './components/Skywalker'

function App() {
  return (
    <div className="App">
      <Skywalker/>
      <Routes>
        <Route exact path="/:dataQuery/:dataId" element={<People/>}/>
      </Routes>
    </div>
  );
}

export default App;
