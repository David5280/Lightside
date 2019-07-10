import { fetchData } from './apicalls';

describe.only('fetchData', () => {

  let mockResponse;
  let mockString;
  beforeEach(() => {
    mockResponse = {
      results: [
        { name: 'name1', height: 'height1', birth_year: 'birth_year1', eye_color: 'eye_color1', gender: 'gender1', isFavorite: false },
        { name: 'name2', height: 'height2', birth_year: 'birth_year2', eye_color: 'eye_color2', gender: 'gender2', isFavorite: false },
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
      await fetchData(mockString);
    } catch(error) {
      expect(error).toMatch(error);
    }
  });
});