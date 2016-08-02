const mongoose = require('mongoose')

// const SubjectSchema = mongoose.Schema({
//   name: { type: String }
// })

const EducationSchema = mongoose.Schema({
  school: { type: String, required: true, minlength: 5 },
  qualifications: { type: String },
  period: { type: String }
})

module.exports = mongoose.model('Education', EducationSchema)
