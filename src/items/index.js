import React from 'react'
import Item from './Item'
import EditableItem from './EditableItem'

import JobItem from './JobItem'
import PositionItem from './PositionItem'
import EducationItem from './EducationItem'
import CandidateItem from './CandidateItem'
import ProjectItem from './ProjectItem'

const createItem = (data, props) => {
  const map = {
    'position': PositionItem,
    'education': EducationItem,
    'internship': JobItem,
    'candidate': CandidateItem,
    'project': ProjectItem,
    'job': JobItem
  }

  const type = map[data.type]
  if (!type) return
  return React.createElement(type, { data, ...props })
}

export {
  Item,
  EditableItem,
  JobItem,
  PositionItem,
  CandidateItem,
  EducationItem,
  ProjectItem,
  createItem
}
