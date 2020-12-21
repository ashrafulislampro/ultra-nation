import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect ( () => {
   fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => setCountries(data));
  },[])
  let handleAddCountry = (country) => {
    const newCart = [...carts, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Loaded country : {countries.length}</h1>
        
        <Cart cart={carts}></Cart>
       {
         countries.map(country =>  <Country country={country} handleAddCountry={handleAddCountry}></Country>)
       }
       
      </header>
    </div>
  );
}


export default App;
