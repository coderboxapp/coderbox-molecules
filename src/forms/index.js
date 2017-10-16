import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import PositionForm from './PositionForm'
import EducationForm from './EducationForm'
import JobForm from './JobForm'
import CompanyForm from './CompanyForm'
import ProjectForm from './ProjectForm'
import UserProfileForm from './UserProfileForm'

const createForm = (data, props) => {
  const map = {
    'position': PositionForm,
    'education': EducationForm,
    'project': ProjectForm,
    'user': UserProfileForm,
    'internship': JobForm,
    'job': JobForm
  }

  const type = map[data.type]
  if (!type) return
  return React.createElement(type, { data, ...props })
}

export {
  LoginForm,
  SignupForm,
  PositionForm,
  EducationForm,
  JobForm,
  CompanyForm,
  ProjectForm,
  UserProfileForm,
  createForm
}
