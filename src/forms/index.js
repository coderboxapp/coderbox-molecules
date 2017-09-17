import React from 'react'
import LoginForm from './LoginForm'
import PositionForm from './PositionForm'
import EducationForm from './EducationForm'
import JobForm from './JobForm'
import UserProfileForm from './UserProfileForm'

const createForm = (data, props) => {
  const map = {
    'position': PositionForm,
    'education': EducationForm,
    'user': UserProfileForm,
    'job': JobForm
  }

  const type = map[data.type]
  if (!type) return
  return React.createElement(type, { data, ...props })
}

export {
  LoginForm,
  PositionForm,
  EducationForm,
  JobForm,
  UserProfileForm,
  createForm
}
