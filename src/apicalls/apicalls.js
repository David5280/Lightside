const fetchData = (string, context) => {
  const data = fetch(`https://swapi.co/api/${string}/`)
    .then(res => res.json())
    .then(data => data.results)
    .then(results => context.setState({ [string]: results }))
    .catch(error => context.setState({ error: error }));
  return data
}

export default fetchData;