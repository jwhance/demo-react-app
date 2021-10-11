import mockTimeFetch from './__mock__/mockFetchTime';
import FetchTime from './FetchTime';



beforeEach(() => {
    //fetch.mockClear();
    global.fetch = jest.fn(mockTimeFetch);
});

it("finds current time", async () => {
    const timeData = await FetchTime('http://some.url.com');
    expect(timeData.abbreviation).toEqual('EDT');
});