const Work = require('../models/work')

function listWorks (req, res) {
  Work.find((err, worksArray) => {
    if (err) return res.status(404).json({message: 'Work not found'})

    const simplifiedList = []
    for (let i = 0; i < worksArray.length; ++i) {
      simplifiedList.push({_id: worksArray[i].id, company: worksArray[i].company, role: worksArray[i].role, description: worksArray[i].description})
    }
    res.status(200).json({works: worksArray})
  })
}

function showWorks (req, res) {
  Work.findById({_id: req.params.id}, (err, work) => {
    if (err) return res.status(404).json({message: 'Work not found'})

    res.status(200).json(work)
  })
}

module.exports = {
  index: listWorks,
  show: showWorks
}
