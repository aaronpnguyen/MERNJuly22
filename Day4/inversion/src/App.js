import './App.css';
import Personcard from './Components/Personcard'

var people = [
  {'first_name': "Jane", 'last_name': "Doe", 'age': 45, 'hair_color': "Black"},
  {'first_name': "John", 'last_name': "Smith", 'age': 88, 'hair_color': "Brown"},
  {'first_name': "Millard", 'last_name': "Fillmore", 'age': 50, 'hair_color': "Brown"},
  {'first_name': "Maria", 'last_name': "Smith", 'age': 62, 'hair_color': "Brown"}
]

function App() {
  return (
    <div className="App">
      {people.map(person => {
        return <Personcard {...person}/>})
      }
    </div>
  );
}

export default App;
