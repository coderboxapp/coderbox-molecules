
export const user = {
  name: 'Alexandru Ghiura',
  email: 'ghalex@gmail.com',
  url: 'http://twitter.com/ghalex',
  location: {
    formatted_address: 'Timisoara, Romania'
  }
}

export const location = { formatted_address: 'Timișoara, România' }

export const technologies = [
  {_id: 93, name: 'java', category: 'backend', 'duration': 96},
  {_id: 70, name: 'spring', category: 'backend', 'duration': 96},
  {_id: 1, name: 'css', category: 'frontend', 'duration': 96},
  {_id: 3, name: 'javascript', category: 'frontend', 'duration': 96}
]

export const companies = [
  {
    _id: 4,
    name: 'coderbox',
    logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/coderbox-blue.png',
    shortBio: 'Manage your **{** tech career **}**. Stop searching for jobs, join [Coderbox](http://www.coderbox.me) and we will help you have a successful **{** tech career **}**.',
    location: location
  },
  {_id: 104, name: 'tibco software innovations romania'},
  {_id: 103, name: 'tibco software'},
  {_id: 101, name: 'intelligent software system'},
  {_id: 97, name: 'bolue couch'},
  {_id: 96, name: 'saguaro'},
  {_id: 94, name: 'epoint web solutions'},
  {_id: 93, name: 'nokia'},
  {_id: 932, name: 'nok it'},
  {_id: 92, name: 'athos'}
]

export const titles = [
  {_id: 104, name: 'web developer'},
  {_id: 103, name: 'front-end developer'},
  {_id: 3, name: 'manager engineer'},
  {_id: 4, name: 'software engineer'}
]

export const institutions = [
  {
    _id: 22,
    name: 'west university of timisoara',
    logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/uvt.png'
  },
  {
    _id: 234,
    name: 'politehnica university of timisoara',
    logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/uvt.png'
  },
  {
    _id: 1118,
    name: 'economics university of timisoara',
    logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/uvt.png'
  }
]

export const company = companies[0]
export const institution = institutions[0]

export const position = {
  _id: 125,
  company: company,
  responsabilities: "You can use [Markdown](https://daringfireball.net/projects/markdown/) in your description.\n\n> You can add quotes\n\nQuote break.\n\n> Another quote\n\nMake a list of things:\n* **bold**\n* *italicized*\n* or even `crossed` out\n\n`Oh, and you can even add code blocks.`\n\nWe're excited to bring back beautiful formatting for your updates!",
  technologies: technologies.concat().slice(0, 2),
  timePeriod: { end: '2015-06-08T12:57:34.716Z', start: '2009-12-31T22:00:00.000Z' },
  title: titles[2],
  type: 'position',
  icon: 'briefcase'
}

export const project = {
  _id: 2,
  title: 'Thanky',
  url: 'http://thanky.ro',
  technologies: technologies.concat().slice(0, 2),
  timePeriod: { end: '2017-06-01T12:57:34.716Z', start: '2016-11-01T22:00:00.000Z' },
  description: '**Thanky** is a digital loyalty program.'
}
export const education = {
  _id: 55,
  degree: 'Master’s Degree',
  institution: institution,
  technologies: technologies,
  timePeriod: { end: '2008-04-30T21:00:00.000Z', start: '2004-04-30T21:00:00.000Z' },
  type: 'education',
  icon: 'graduation-cap'
}

export const job = {
  _id: 38,
  company: company,
  title: 'Front-End Developer',
  location: location,
  description: `Join the Engineering Team of the world's most widely used Business Intelligence product. Help us continue our market dominance using cutting edge technologies and modern software development techniques.

### Skills & Requirements

- 4+ years experience building Web based enterprise business applications
- 4+ years experience with \`ReactJs\`,  \`JavaScript\` and cross-browser development
- 2+ years experience with \`CSS\` development
- 2+ years experience with JavaScript libraries such as \`jQuery\`
  `,
  published: true,
  paid: true,
  score: 0,
  teamWork: true,
  minSalary: 1400,
  views: 12,
  technologies: technologies.concat().slice(0, 2),
  industry: 3,
  categories: [{'name': 'backend', 'duration': 96}, {'name': 'frontend', 'duration': 96}],
  createdAt: '2017-06-07T08:49:01.358Z',
  type: 'job'
}

export const items = [
  position,
  education
]

export const candidate = {
  '_id': 63,
  'createdAt': '2017-07-08T11:22:02.834Z',
  'status': 'apply',
  'job': {
    '_id': 30,
    'company': 4,
    'title': 'FullStack Engineer (MERN)',
    'radar': {
      'technologies': [{'_id': 155, 'name': 'reactjs', 'category': 'frontend', 'duration': 96}, {'_id': 116, 'name': 'express', 'category': 'backend', 'duration': 96}, {'_id': 87, 'name': 'mongodb', 'category': 'database', 'duration': 96}, {'_id': 77, 'name': 'nodejs', 'category': 'backend', 'duration': 96}, {'_id': 4, 'name': 'redux', 'category': 'frontend', 'duration': 96}],
      'categories': [{'name': 'frontend', 'duration': 96}, {'name': 'backend', 'duration': 96}, {'name': 'database', 'duration': 96}]
    }
  },
  'user': {
    '_id': '584dd7ff734d1d55b6dcfa90',
    'email': 'ghalex@gmail.com',
    'name': 'Alexandru Ghiura',
    'radar': {
      'technologies': [{'_id': 93, 'name': 'java', 'category': 'backend', 'duration': 7}, {'_id': 70, 'name': 'spring', 'category': 'backend', 'duration': 7}, {'_id': 155, 'name': 'reactjs', 'category': 'frontend', 'duration': 65}, {'_id': 87, 'name': 'mongodb', 'category': 'database', 'duration': 65}, {'_id': 77, 'name': 'nodejs', 'category': 'backend', 'duration': 65}, {'_id': 59, 'name': 'javascript', 'category': 'frontend', 'duration': 65}, {'_id': 4, 'name': 'redux', 'category': 'frontend', 'duration': 65}],
      'categories': [{'name': 'backend', 'duration': 72}, {'name': 'frontend', 'duration': 65}, {'name': 'database', 'duration': 65}]
    }
  }
}
