const { parseForTD, massageData } = require('../massageData');


describe('parseForTD', () => {
  it('removes T from string and sets lngTD to true', () => {
    const expected = { lng: 50, lngTD: true };

    expect(parseForTD('50T')).toEqual(expected);
  });

  it('does not modify an int and sets lngTD to false', () => {
    const expected = { lng: 50, lngTD: false };

    expect(parseForTD(50)).toEqual(expected);
  });
});

describe('massageData', () => {
  it('massages fields Yds, Lng and TD in a data row', () => {
    const dataRow = [{
      otherField: 'hello!',
      Yds: '-2',
      Lng: '60T',
      TD: '5',
    }];

    const expected = [{
      otherField: 'hello!',
      Yds: -2,
      Lng: 60,
      TD: 5,
      LngTD: true,
    }];

    expect(massageData(dataRow)).toEqual(expected);
  });
});
