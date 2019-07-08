const fetchData = (string, context) => {
  const data = fetch(`https://swapi.co/api/${string}/`)
    .then(res => res.json())
    .then(data => context.setState({ [string]: data.results }))
    .catch(error => context.setState({ error: error }));
  return data
}

export default fetchData;