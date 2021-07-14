import { addT } from '../addT';


describe('addT', () => {
  it('it adds T to Lng', () => {
    const playerData = [
      { Lng: 10, LngTD: true },
      { Lng: 20, LngTD: false },
      { Lng: 30, LngTD: true },
    ];

    const expected = [
      { Lng: '10T', LngTD: true },
      { Lng: 20, LngTD: false },
      { Lng: '30T', LngTD: true },
    ];
    expect(addT(playerData)).toStrictEqual(expected);
  });
});
