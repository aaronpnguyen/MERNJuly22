import './App.css';
import {Routes, Route} from 'react-router-dom'
import Products from './components/Products'
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<OneProduct/>}/>
        <Route exact path="/products/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
