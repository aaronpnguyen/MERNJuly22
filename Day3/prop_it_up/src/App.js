import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Card last_name="Jane" first_name="Doe" age={45} hair_color= "Black"/>
      <Card last_name="John" first_name="Smith" age={45} hair_color= "Brown"/>
      <Card last_name="Millard" first_name="Fillmore" age={45} hair_color= "Brown"/>
      <Card last_name="Maria" first_name="Smith" age={45} hair_color= "Brown"/>

    </div>
  );
}

export default App;
