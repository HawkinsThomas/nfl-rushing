const HEADERS = require('./constants');


const convertRowToRecord = (row) => {
  let record = '';
  HEADERS.forEach((key) => {
    if (row[key]) record += `${row[key]},`;
    else record += ','
  });
  return record.slice(0, -1) + '\n' // remove the last comma and add a newline
}

const convertToCSV = (data) => {
  let csvString = '';
  const headerString = HEADERS.join(',') + '\n';

  csvString += headerString;
  data.forEach(row => {
    csvString += convertRowToRecord(row)
  });
  return csvString;
}

module.exports = convertToCSV;
