const fs = require('fs');


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
  })
}

const massageData = () => {
  const data = JSON.parse(fs.readFileSync('helpers/rushing.json', 'utf8'));
  const massagedData = data.rushingYardData.map((row) => {
    if (typeof(row['Yds']) === 'string') row['Yds'] = parseInt(row['Yds']);
    if (typeof(row['TD']) === 'string') row['TD'] = parseInt(row['TD']);

    const { lng, lngTD } = parseForTD(row['Lng']);
    row['Lng'] = lng;
    row['LngTD'] = lngTD;
    console.log(row);
    return row;
  });
  return massagedData;
}

massageData();

module.exports = massageData


