import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Edit from './components/Edit'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}></Route>
        <Route exact path="/new" element={<Form/>}></Route>
        <Route exact path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
