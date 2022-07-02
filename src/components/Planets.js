import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets')
  return res.json();
}

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
 
  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{status}</p> */}
      {status === 'loading' && (
        <div>Data Loading...</div>
      )}
      {status === 'error' && (
        <div>Error data</div>
      )}
       {status === 'success' && (
        <div>{data.results.map(planet =><div>{planet.name}</div>)}</div>
      )}
    </div>
  );
}
 
export default Planets;