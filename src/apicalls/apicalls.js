import cleaner from './cleaner';

export const fetchData = (string) => {
  const data = fetch(`https://swapi.co/api/${string}/`)
    .then(res => res.json())
    .then(data => data.results)
    .then(results => cleaner(results, string))
    .catch(error => error.message);
    
  return data
}
