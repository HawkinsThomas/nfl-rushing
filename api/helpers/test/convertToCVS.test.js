const convertToCSV = require('../convertToCSV');


describe('convertToCSV', () => {
  it('takes a data array and converts it to a csv string', () => {
    const data = [
      {Player: 'Thomas Hawkins', Yds: '9001'},
      {Player: 'Gucci Mane', Yds: '2'},
    ];
    const expected = 'Player,Team,Pos,Att/G,Att,Yds,Avg,Yds/G,TD,Lng,LngTD,1st,1st%,20+,40+,FUM\nThomas Hawkins,,,,,9001,,,,,,,,,,\nGucci Mane,,,,,2,,,,,,,,,,\n'

    expect(convertToCSV(data)).toBe(expected);
  });
});