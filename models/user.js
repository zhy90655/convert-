const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  __v: { select: false },
  username: { type: String, require: true, unique: true },
  password: { type: String, select: false, set: val => require('bcrypt').hashSync(val, 10) },
  balance: { type: Number, default: 10000 }
})
schema.virtual('children', {
  localField: 'code',
  ref: 'Item',
  foreignField: 'parent',
  justOne: false
})
module.exports = mongoose.model('User', schema)
