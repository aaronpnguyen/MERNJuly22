import './App.css';
import AllNinjas from './components/AllNinjas'
import Form from './components/Form'
import OneNinja from './components/OneNinja'
import EditForm from './components/EditForm'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

function App() {
  let [submit, setSubmit] = useState(false)
  return (
    <div className="App">
      <h1>Wall of Ninjas</h1>
      <Routes>
        <Route exact path="/" element={<><Form submit={submit} setSubmit={setSubmit}/> <AllNinjas submit={submit}/></>}></Route>
        <Route exact path="/ninjas/:id" element={<OneNinja/>}></Route>
        <Route exact path="/ninjas/edit/:id" element={<EditForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
