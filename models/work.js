const mongoose = require('mongoose')

const WorkSchema = mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  period: { type: String }
})

module.exports = mongoose.model('Work', WorkSchema)
