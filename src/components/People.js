import React from 'react';
import { useQuery } from 'react-query';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people')
  return res.json();
}
const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data)
  return (
    <div>
      <h2>People</h2>
      {status === 'loading' && (
        <div>Data Loading...</div>
      )}
      {status === 'error' && (
        <div>Error data</div>
      )}
       {status === 'success' && (
        <div>{data.results.map(people =><div>{people.name}</div>)}</div>
      )}
    </div>
  );
}
 
export default People;