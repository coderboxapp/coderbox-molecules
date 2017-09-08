import React from 'react'
import { PositionForm, EducationForm } from 'forms'
import { PositionItem, EducationItem } from 'items'

export class Factory {
  constructor () {
    this.items = {
      'position': PositionItem,
      'education': EducationItem
    }

    this.forms = {
      'position': PositionForm,
      'education': EducationForm
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
