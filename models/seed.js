// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/profile.js',
    'models/project.js',
    'models/education.js',
    'models/work.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Profile', 'Project', 'Education', 'Work'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Profile',
    'documents': [
      {
        'name': 'Evon Tay',
        'email': 'fumblies@gmail.com',
        'description': 'Evon is a full-stack web developer with a keen sense of design, web typography, and user experience. ',
        'github': 'https://github.com/evontay',
        'linkedin': 'https://sg.linkedin.com/in/evontay',
        'twitter': 'http://twitter.com/fumblies',    
        'dribbble': 'https://dribbble.com/fumblies',
        'behance': 'https://www.behance.net/fumblies',
        'medium': 'https://medium.com/@fumblies'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'Startups.Sg',
        'description': 'A collaborative data project for the Singapore startup community.',
        'github': 'https://github.com/evontay/startups-sg',
        'website': 'https://evontay.github.io/startups-sg/',
        'image1': 'startupsg1.png',
        'image2': 'startupsg2.png'          
      },
      {
        'title': 'Should I bike today?',
        'description': 'Simple SPA that tells the weather using weather api.',
        'github': 'https://github.com/evontay/should-i-bike-today',
        'website': 'https://evontay.github.io/should-i-bike-today/',
        'image1': 'sibt1.png',
        'image2': 'sibt2.png'
      },
      {
        'title': 'Edible Plants Wiki',
        'description': 'Crowdsourced information about edible local plants for non-profit, Foodscape Collective',
        'github': 'https://github.com/evontay/plants-wiki',
        'website': 'http://plants-wiki.herokuapp.com/',
        'image1': 'plantswiki1.png', 
        'image2': 'plantswiki2.png'
      },
      {
        'title': 'Morse Game',
        'description': 'A quiz game to help you learn Morse Code through audio and visual signals.',
        'github': 'https://github.com/evontay/morse-game',
        'website': 'https://evontay.github.io/morse-game/',
        'image1': 'morse1.png',
        'image2': 'morse2.png'
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
      {
        'school': 'General Assembly - Singapore',
        'qualifications': 'Web Development Immersive',
        'period': 'May - Aug 2016'
      },
      {
        'school': 'Nanyang Technological University, School of Art, Design and Media',
        'qualifications': 'Bachelor of Fine Arts (Visual Communication)',
        'period': '2008 - 2012'
      },
      {
        'school': 'Ngee Ann Polytechnic, School of Film & Media Studies',
        'qualifications': 'Diploma in Mass Communications',
        'period': '2004 - 2007'
      }
    ]
  },
  {
    'model': 'Work',
    'documents': [
      {
        'company': 'Fumblies.Co',
        'role': 'Designer, Founder',
        'description': 'Branding design and strategy, graphic design, web design services for clients of various industries.',
        'period': '2014 - current'
      },
      {
        'company': 'TBWA Singapore',
        'role': 'Social Media Content Designer',
        'description': 'Design and execute social media and web graphics.',
        'period': '2014 - 2015'
      },
      {
        'company': 'Page One Publishing',
        'role': 'Designer',
        'description': 'Book cover design, editorial layout, retail design, merchandise product design.',
        'period': '2012 - 2014'
      }
    ]
  }
]
