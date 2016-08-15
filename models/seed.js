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
        'description': "Hi! I'm Evon, a full-stack web developer with a keen sense of design, web typography, and user experience. Simply put, I make stuff for people. ",
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
        'description': 'A collaborative data project for the Singapore startup community. Backend API built with Node.JS + Express. Frontend built with HTML, CSS, Javascript, Ajax, JQuery, Algolia. Collaborators -- Geng Sng, Lew Li Min, Winston Mi.',
        'github': 'https://github.com/evontay/startups-sg',
        'website': 'https://evontay.github.io/startups-sg/',
        'image': 'https://c8.staticflickr.com/8/7575/28678304471_a895ba5632_b.jpg',
        'index': '0'
      },
      {
        'title': 'Should I bike today?',
        'description': 'A simple app that advises on the daily weather to decide whether it is a good day for biking. Used the 24-hour weather forecast API from data.gov.sg. Built with Ajax, Jquery, HTML, CSS.',
        'github': 'https://github.com/evontay/should-i-bike-today',
        'website': 'https://evontay.github.io/should-i-bike-today/',
        'image': 'https://c3.staticflickr.com/9/8887/28138010994_d078418e71_b.jpg',
        'index': '1'
      },
      {
        'title': 'Edible Plants of Singapore - Wiki',
        'description': 'Crowdsourced information about edible local plants for non-profit, Foodscape Collective. Built with Ruby on Rails, HTML, CSS.',
        'github': 'https://github.com/evontay/plants-wiki',
        'website': 'http://plants-wiki.herokuapp.com/',
        'image': 'https://c3.staticflickr.com/9/8721/28632536162_44f3fc2d3c_b.jpg',
        'index': '2'
      },
      {
        'title': 'CURIO MORSE: The Decoding Game',
        'description': 'A quiz game to help people learn Morse Code through audio and visual signals. Built with Javascript, Jquery, HTML, CSS.',
        'github': 'https://github.com/evontay/morse-game',
        'website': 'https://evontay.github.io/morse-game/',
        'image': 'https://c2.staticflickr.com/8/7587/28737854345_d763c62cd0_b.jpg',
        'index': '3'
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
