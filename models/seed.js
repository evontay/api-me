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
        'first_name': 'Evon',
        'last_name': 'Tay',
        'email': 'fumblies@gmail.com',
        'description': 'Evon is a full-stack web developer with a keen sense of design and web typography.',
        'socials': [{ name: 'https://github.com/evontay' },
          { name: 'http://twitter.com/fumblies' }, { name: 'https://sg.linkedin.com/in/evontay'}],
        'picture': '../public/me.png'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'Startups.Sg',
        'description': 'A cool project for the Singapore startup community.',
        'link': 'https://evontay.github.io/startups-sg/',
        'skills': [{name: 'javascript'}, {name: 'node.js'}]
      },
      {
        'title': 'Should I bike today?',
        'description': 'Simple SPA that tells the weather using weather api.',
        'link': 'https://evontay.github.io/should-i-bike-today/',
        'skills': [{name: 'jquery'}, {name: 'api'}]
      },
      {
        'title': 'Edible Plants Wiki',
        'description': 'Crowdsourced information about edible local plants for non-profit, Foodscape Collective',
        'link': 'http://plants-wiki.herokuapp.com/',
        'skills': [{name: 'ruby'}, {name: 'rails'}]
      },
      {
        'title': 'Morse Game',
        'description': 'A quiz game to help you learn Morse Code through audio and visual signals.',
        'link': 'https://evontay.github.io/morse-game/',
        'skills': [{name: 'html+css'}, {name: 'javascript'}]
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
      {
        'school': 'General Assembly - Web Development Immersive',
        'subjects': [{name: 'HTML'}, {name: 'CSS'}, {name: 'Javascript'}, {name: 'Ruby'}, {name: 'Rails'}, {name: 'Node.js'}, {name: 'Ember.js'}, {name: 'JSON API'}]
      },
      {
        'school': 'Nanyang Technological University, School of Art, Design and Media',
        'subjects': [{name: 'Bachelor of Fine Arts (Visual Communication)'}]
      },
      {
        'school': 'Ngee Ann Polytechnic, School of Film & Media Studies',
        'subjects': [{name: 'Diploma in Mass Communications'}]
      }
    ]
  },
  {
    'model': 'Work',
    'documents': [
      {
        'company': 'Fumblies.Co',
        'role': 'Designer, Founder',
        'description': 'Branding design and strategy, graphic design, web design services for clients of various industries.'
      },
      {
        'company': 'TBWA Singapore',
        'role': 'Social Media Content Designer',
        'description': 'Design and execute social media and web graphics.'
      },
      {
        'company': 'Page One Publishing',
        'role': 'Designer',
        'description': 'Book cover design, editorial layout, retail design, merchandise product design.'
      }
    ]
  }
]
