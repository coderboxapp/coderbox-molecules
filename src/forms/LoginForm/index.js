import React from 'react'
import yup from 'yup'
import { Formik as withFormik } from 'formik'
import { compose } from 'recompose'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'

const Component = ({
  values,
  errors,
  status,
  submitting,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {status &&
        <Field>
          <Text color='danger' size='normal'>{status}</Text>
        </Field>
      }
      <Field>
        <Control hasLeftIcon>
          <Icon name='user' className='left' />
          <Input
            type='email'
            name='email'
            value={values.email}
            color={errors.email ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your email address'
          />
        </Control>
      </Field>
      <Field>
        <Control hasLeftIcon>
          <Icon name='lock' className='left' />
          <Input
            type='password'
            name='password'
            value={values.password}
            color={errors.password ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your password'
          />
        </Control>
      </Field>
      <Button color='primary' onClick={handleSubmit} isLoading={submitting}>
        Login
      </Button>
    </form>
  )
}

Component.displayName = 'LoginForm'
Component.defaultProps = {
  email: '',
  password: ''
}

export default compose(
  withFormik({
    mapPropsToValues: (p) => ({ email: p.email || '', password: p.password || '' }),
    validationSchema: yup.object().shape({
      email: yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: yup.string()
        .required('Password is required')
    }),
    handleSubmit: (values, { props }) => {
      if (props.onSubmit) {
        props.onSubmit(values)
      }
    }
  })
)(Component)
