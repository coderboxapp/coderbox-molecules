import React from 'react'
import { PositionForm, EducationForm, JobForm } from 'forms'
import { PositionItem, EducationItem, JobItem } from 'items'

export class Factory {
  constructor () {
    this.items = {
      'position': PositionItem,
      'education': EducationItem,
      'job': JobItem
    }

    this.forms = {
      'position': PositionForm,
      'education': EducationForm,
      'job': JobForm
    }
  }

  createFromMap = (map) => (data, props) => {
    const type = map[data.type]

    if (!type) return
    return React.createElement(type, { data, ...props })
  }

  createItem = (data, props) => {
    return this.createFromMap(this.items)(data, props)
  }

  createForm = (data, props) => {
    return this.createFromMap(this.forms)(data, props)
  }
}
