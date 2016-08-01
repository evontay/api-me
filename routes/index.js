const express = require('express')
const router = express.Router()

const Profile = require('../models/profile')
const projectsController = require('../controllers/projects_controller')
const educationsController = require('../controllers/educations_controller')
const worksController = require('../controllers/works_controller')

// enable cors for all api routes - we could also define this on the app object in app.js
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Get home page
router.get('/', (req, res) => {
  // we only have a single profile in the db, so the first one is fine
  Profile.findOne({}, (err, profile) => {
    if (err) return res.status(404).json({message: 'Profile not found'})
    res.json(profile)
  })
})

/* GET projects page. */
router.get('/projects', projectsController.index)

/* GET projects/:id page. */
router.get('/projects/:id', projectsController.show)

/* GET education page. */
router.get('/education', educationsController.index)

/* GET education/:id page. */
router.get('/education/:id', educationsController.show)

/* GET work page. */
router.get('/work', worksController.index)

//
// router.route('/projects')
//   .post(projectsController.createProjects)
//
// router.route('/projects/:id')
//   .get(projectsController.getProject)
//   .put(projectsController.updateProject)
//   .delete(projectsController.destroyProject)
//
//
// // Keep project routes in a seperate controller file
// router.get('/projects', projectsController.index)
// router.get('/projects/:id', projectsController.show)

// export the router so the main app can access it
module.exports = router
