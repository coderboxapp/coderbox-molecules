
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
  {_id: 1, name: 'css', category: 'frontend', 'duration': 96}
]

export const company = {
  _id: 4,
  name: 'coderbox',
  logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/coderbox-blue.png',
  shortBio: 'Manage your **{** tech career **}**. Stop searching for jobs, join [Coderbox](http://www.coderbox.me) and we will help you have a successful **{** tech career **}**.',
  location: location
}

export const institution = {
  _id: 22,
  name: 'west university of timisoara',
  logo: 'https://s3-eu-west-1.amazonaws.com/coderbox/logos/uvt.png'
}

export const position = {
  _id: 125,
  company: company,
  responsabilities: "You can use [Markdown](https://daringfireball.net/projects/markdown/) in your description.\n\n> You can add quotes\n\nQuote break.\n\n> Another quote\n\nMake a list of things:\n* **bold**\n* *italicized*\n* or even `crossed` out\n\n`Oh, and you can even add code blocks.`\n\nWe're excited to bring back beautiful formatting for your updates!",
  technologies: technologies,
  timePeriod: { end: '2015-06-08T12:57:34.716Z', start: '2009-12-31T22:00:00.000Z' },
  title: {_id: 28, name: 'web developer'},
  type: 'position',
  icon: 'briefcase'
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

export const items = [
  position,
  education
]

export const job = {
  _id: 38,
  company: company,
  title: 'Front-End Developer',
  location: location,
  description: 'Job responsabilities are to do **this** and work on ...',
  published: true,
  paid: false,
  teamWork: true,
  minSalary: 1400,
  views: 1,
  technologies: technologies,
  industry: 3,
  categories: [{'name': 'backend', 'duration': 96}, {'name': 'frontend', 'duration': 96}],
  createdAt: '2017-06-07T08:49:01.358Z',
  type: 'job'
}
