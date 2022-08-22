const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  icon: { type: String, required: true }
})

// schema.virtual('children', {
//   localField: 'code',
//   ref: 'SubItem',
//   foreignField: 'parent',
//   justOne: false
// })

module.exports = mongoose.model('Item', schema)
