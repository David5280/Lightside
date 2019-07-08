import fetchData from './apicalls';
import { async } from 'q';

describe('fetchData', () => {

  let mockResponse;
  let mockString;
  let context;
  beforeEach(() => {
    mockResponse = {
      results: [
        { "name": "Luke Skywalker", "height": "172", "mass": "77",},
        { "name": "some guy", "height": "180", "mass": "90", }
      ]
    }
    mockString = 'people';
    context = {setState: jest.fn()};
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })
  });

  it('should be called with the correct params', () => {
    const expected = `https://swapi.co/api/${mockString}/`;

    fetchData(mockString, context);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('it should return a resolved response if status is ok', async() => {
    const result = await fetchData(mockString, context);

    expect(result).toEqual(mockResponse);
  });

  it('it should return a rejected response if status is not ok', () => {
    
  });
})