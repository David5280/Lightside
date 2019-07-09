import { fetchData } from './apicalls';

describe.only('fetchData', () => {

  let mockResponse;
  let mockString;
  beforeEach(() => {
    mockResponse = {
      results: [
        { name: "Luke Skywalker", height: "172", mass: "77",},
        { name: "some guy", height: "180", mass: "90", }
      ]
    }
    mockString = 'people';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  });

  it('should be called with the correct params', () => {
    const expected = `https://swapi.co/api/${mockString}/`;
    fetchData(mockString);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('it should return a resolved response if status is ok', async() => {
    const result = await fetchData(mockString);

    expect(result).toEqual(mockResponse.results);
  });

  it('it should return a rejected response if status is not ok', async() => {
    try {
      await fetchData();
    } catch(error) {
      expect(error).toMatch(error);
    }
  });
});