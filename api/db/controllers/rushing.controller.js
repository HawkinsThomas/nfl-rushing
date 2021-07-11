const Rushing = require('../models/rushing.model');


const doesPlayerExist = (Player) => {
  return new Promise((resolve, reject) => {
    Rushing.findOne({ Player }, (err, result) => {
      if (err) reject(err);
      resolve(!!result);
    });
  });
}

const create = (rushingYardRow) => {
  return doesPlayerExist(rushingYardRow.Player)
    .then((result) => {
      if (!result) {
        const row = new Rushing(rushingYardRow);
        row.save();
      } else console.log('player already in database')
    }).catch((e) => {console.log(e)});
}

const findSortSlice = ({ index, numberOfRows, sortKey, inverted, filter, all }) => {
  return new Promise((resolve, reject) => {
    Rushing.find(
      filter ? { Player: { $regex: filter, $options: 'i' } } : {},
      null,
      { sort: { [sortKey]: inverted ? 1 : -1 }},
      (err, result) => {
        if (err) reject(err);
        if (all) resolve(result);
        resolve({ data: result.slice(index, index + numberOfRows), numberOfResults: result.length });
      }
    ).exec();
  });
}

module.exports = { create, findSortSlice };
