// Need to be able to sort by Yds, Lng and TD, so they have to be numbers.
// T denotes a touchdown in Lng. Need to parse this out and save to binary value

const parseForTD = (lng) => {
  if (typeof(lng) === 'string' && lng.includes('T')) return ({
    lng: parseInt(lng.replace(/T/g, '')),
    lngTD: true,
  });

  return ({
    lng,
    lngTD: false,
  });
}

const massageData = (data) => {
  const massagedData = data.map((row) => {
    if (typeof(row['Yds']) === 'string') {
      row['Yds'] = row['Yds'].replace(/,/g, '');
      row['Yds'] = parseInt(row['Yds']);
    }
    if (typeof(row['TD']) === 'string') row['TD'] = parseInt(row['TD']);

    const { lng, lngTD } = parseForTD(row['Lng']);
    row['Lng'] = lng;
    row['LngTD'] = lngTD;
    return row;
  });
  return massagedData;
}

module.exports = { massageData, parseForTD };
