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
      { sort: { [sortKey]: inverted ? 1 : -1 }, skip: index, limit: numberOfRows},
      (err, result) => {
        if (err) reject(err);
        if (all) resolve(result);
        resolve({ data: result });
      }
    ).exec();
  });
}

const count = (filter) => {
  return new Promise((resolve, reject) => {
    Rushing.countDocuments(
      filter ? { Player: { $regex: filter, $options: 'i' } } : {},
      (err, count) => {
        if (err) reject(err);
        resolve(count);;
      }
    );
  });
}

module.exports = { create, findSortSlice, count };
