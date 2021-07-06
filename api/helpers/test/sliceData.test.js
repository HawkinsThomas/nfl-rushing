const sliceData = require('../sliceData');


describe('sliceData', () => {
  it('does some slicin and returns an object with data and result total', () => {
    const data = [1, 2, 3, 4, 5];
    const index = 1;
    const numberOfRows = 3;

    const expected = { data: [2, 3, 4], numberOfResults: 5 };

    expect(sliceData({ data, index, numberOfRows })).toStrictEqual(expected);
  });

  it('will sort if given a key to sort by', () => {
    const data = [
      { key1: 1, key2: 3 },
      { key1: 2, key2: 2 },
      { key1: 3, key2: 1 },
    ];

    const sortedData = [
      { key1: 3, key2: 1 },
      { key1: 2, key2: 2 },
      { key1: 1, key2: 3 },
    ];
    const index = 0;
    const numberOfRows = 3;

    const expected = { data: sortedData, numberOfResults: 3 };

    expect(sliceData({ data, index, numberOfRows, sortKey: 'key1' })).toStrictEqual(expected);
  });

  it('can inverted sort if specified', () => {
    const data = [
      { key1: 1, key2: 3 },
      { key1: 2, key2: 2 },
      { key1: 3, key2: 1 },
    ];

    const sortedData = [
      { key1: 3, key2: 1 },
      { key1: 2, key2: 2 },
      { key1: 1, key2: 3 },
    ];
    const index = 0;
    const numberOfRows = 3;

    const expected = { data: sortedData, numberOfResults: 3 };

    expect(sliceData({
      data,
      index,
      numberOfRows,
      sortKey: 'key2',
      inverted: true
    })).toStrictEqual(expected);
  });
});
