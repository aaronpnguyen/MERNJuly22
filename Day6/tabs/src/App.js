import './App.css';
import Tabs from './Components/Tabs'

let tabs = [
  {header: "Tab 1", context: "This is the first tab"},
  {header: "Tab 2", context: "This is the second tab"},
  {header: "Tab 3", context: "This is the third tab"},
]

function App() {
  return (
    <div className="App">
      <h1>Successful reset</h1>
      <Tabs/>
    </div>
  );
}

export default App;
