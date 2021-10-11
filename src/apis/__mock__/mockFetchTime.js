const mockTimeFetch = jest.fn(() => {
    console.log('MOCK FETCH');
    Promise.resolve({
        json: () => Promise.resolve({
            "abbreviation": "EDT",
            "client_ip": "68.38.236.255",
            "datetime": "2021-10-11T06:08:13.388931-04:00",
            "day_of_week": 1,
            "day_of_year": 284,
            "dst": true,
            "dst_from": "2021-03-14T07:00:00+00:00",
            "dst_offset": 3600,
            "dst_until": "2021-11-07T06:00:00+00:00",
            "raw_offset": -18000,
            "timezone": "America/Indiana/Indianapolis",
            "unixtime": 1633946893,
            "utc_datetime": "2021-10-11T10:08:13.388931+00:00",
            "utc_offset": "-04:00",
            "week_number": 41
        })
    });

});

export default mockTimeFetch;