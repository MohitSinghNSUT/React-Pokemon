import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { Input } from './Input';
import { Box } from './Box';
import { AllPokemons } from './AllPokemons';

function App() {
  const [count, setCount] = useState(0);
  const [apidata, setApiData] = useState({});
  const [loading, setLoading] = useState(1);
  const [error, setError] = useState('');
  const [inputChange,setInputChange]=useState("");
  const [searchPokemon, setSearchPokemon] = useState('');
  const allUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';
  const FetchDataPromises = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(0);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
        setLoading(0);
      });
  };
  const FetchDataAsyncAwiat = async (allUrl) => {
    try {
      const res = await fetch(allUrl);
      const data = await res.json();
      setApiData(data);
      setLoading(0);
      console.log(data);
    } catch (error) {
      setError(error);
      setLoading(0);
    }
  };
  useEffect(() => {
    FetchDataAsyncAwiat(allUrl);
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    // error contains a message class as well to indicate
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h1>Pokemon</h1>
      {/* <Input inputChange={inputChange} /> */}
      {console.log("app ",inputChange)}
      <input type="text"  value={inputChange} onChange={(e)=>setInputChange(e.target.value)}  className="pkinput" />
      <AllPokemons allData={apidata.results}  inputChange={inputChange}/>
    </>
  );
}

export default App;
