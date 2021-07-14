export const addT = (playerData) => (
  playerData.map((row) => {
    if (row.LngTD) {
      row.Lng = `${row.Lng}T`;
    }
    return row;
  })
);
