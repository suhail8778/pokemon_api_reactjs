import React, { useEffect, useState } from "react";
import Card from "./Card";
//import PokInfo from "./PokInfo";
import axios from "axios";

export default function Main() {
  const [pokeData, setpokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  // console.log(pokeDex,"pokedex");

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    //  const res = await fetch(url);
    setNextUrl(res.data.next);
    // console.log(nextUrl);

    setPrevUrl(res.data.previous);
    getPokmen(res.data.results);
    setLoading(false);
  };

  const getPokmen = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setpokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        {/* <div className="left-container"> */}
        <Card
          pokeData={pokeData}
          loading={loading}
          pokeDex={pokeDex}
          setPokeDex={(item) => setPokeDex(item)}
        />

        <div className="btn-group mb-5">
          {prevUrl && (
            <button
              onClick={() => {
                setpokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}
          {nextUrl && (
            <button
              onClick={() => {
                setpokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
