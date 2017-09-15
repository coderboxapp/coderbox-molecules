import { PropTypes as mobxTypes } from 'mobx-react'
import {
  shape,
  string,
  arrayOf,
  number,
  object,
  bool
} from 'prop-types'

const { arrayOrObservableArrayOf } = mobxTypes

export const technology = shape({
  _id: number,
  name: string.isRequired
})

export const title = shape({
  _id: number,
  name: string.isRequired
})

export const company = shape({
  _id: number,
  name: string.isRequired,
  logo: string,
  shortBio: string
})

export const equal = (value) => (props, name, component) => {
  if (props[name] === value) return
  return new Error(`Invali prop ${name} supplied to ${component}. It must equal "${value}".`)
}

export const dateRange = shape({
  start: string.isRequired,
  end: string
})

export const user = shape({
  name: string,
  website: string,
  location: object
})

export const education = shape({
  _id: number,
  institution: shape({ logo: string, name: string }),
  technologies: arrayOrObservableArrayOf(technology),
  timePeriod: dateRange,
  degree: string,
  type: equal('education')
})

export const position = shape({
  _id: number,
  company: company,
  title: title,
  responsabilities: string,
  technologies: arrayOrObservableArrayOf(technology),
  timePeriod: dateRange,
  type: equal('position')
})

export const job = shape({
  _id: number,
  title: string,
  description: string,
  paid: bool,
  published: bool,
  teamWork: bool,
  minSalary: number,
  technologies: arrayOrObservableArrayOf(technology),
  company: company,
  type: equal('job')
})

export const suggestions = shape({
  technologies: arrayOf(technology),
  companies: arrayOf(company)
})
