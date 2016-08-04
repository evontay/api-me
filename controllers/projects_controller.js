const Project = require('../models/project')

function listProjects (req, res) {
  Project.find((err, projectsArray) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < projectsArray.length; ++i) {
      simplifiedList.push({_id: projectsArray[i].id, title: projectsArray[i].title, description: projectsArray[i].description, github: projectsArray[i].github, website: projectsArray[i].website, image: projectsArray[i].image, index: projectsArray[i].index})
    }
    res.status(200).json({projects: projectsArray})
  })
}
function showProjects (req, res) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    res.status(200).json(project)
  })
}

module.exports = {
  index: listProjects,
  show: showProjects
}
