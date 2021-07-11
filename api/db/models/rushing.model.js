const mongoose = require('mongoose');


const rushingSchema = mongoose.Schema({
  Player: String,
  Team: String,
  Pos: String,
  ['Att/G']: Number,
  Att: Number,
  Yds: Number,
  Avg: Number,
  ['Yds/G']: Number,
  TD: Number,
  Lng: Number,
  LngTD: Boolean,
  ['1st']: Number,
  ['1st%']: Number,
  ['20+']: Number,
  ['40+']: Number,
  FUM: Number,
});

module.exports = mongoose.model('rushing', rushingSchema);
