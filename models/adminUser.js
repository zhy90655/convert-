const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  __v: { select: false },
  username: { type: String, require: true, unique: true },
  password: { type: String, select: false, set: val => require('bcrypt').hashSync(val, 10) }
})

module.exports = mongoose.model('AdminUser', schema)
