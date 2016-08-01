const mongoose = require('mongoose')

const SocialSchema = mongoose.Schema({
  name: { type: String }
})

const ProfileSchema = mongoose.Schema({
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  email: { type: String, required: true},
  description: { type: String, required: true},
  socials: [SocialSchema],
  picture: { type: String }
})

ProfileSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    return {
      id: ret._id,
      name: `${ret.first_name} ${ret.last_name}`,
      description: ret.description,
      picture: ret.picture,
      socials: ret.socials
    }
  }
})

module.exports = mongoose.model('Profile', ProfileSchema)
