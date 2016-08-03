const mongoose = require('mongoose')

// const SkillSchema = mongoose.Schema({
//   name: { type: String }
// })

// const ImageSchema = mongoose.Schema({
//   name: { type: String }
// })

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  description: { type: String, required: true, minlength: 5},
  github: { type: String, required: true },
  website: { type: String, required: true },
  image: { type: String, required: true }
})

module.exports = mongoose.model('Project', ProjectSchema)
