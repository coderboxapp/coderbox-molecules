import React from 'react'
import { string, object } from 'yup'
import { Formik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'

const Component = ({
  values,
  errors,
  status,
  state,
  isSubmitting,
  handleChange,
  handleSubmit,
  handleBlur
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {status &&
        <Field>
          <Text color='danger' size='normal'>{status}</Text>
        </Field>
      }
      <Field>
        <Control hasIcons>
          <Input
            isInverted
            name='email'
            type='email'
            value={values.email}
            color={errors.email ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your Email' />
          <Icon
            color={errors.email ? 'white' : null}
            name='envelope'
            className='left' />
        </Control>
      </Field>

      <Field>
        <Control hasIcons>
          <Input
            isInverted
            name='name'
            value={values.name}
            color={errors.name ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your Name' />
          <Icon
            color={errors.name ? 'white' : null}
            name='user'
            className='left' />
        </Control>
      </Field>

      <Field>
        <Control hasIcons>
          <Input
            name='password'
            placeholder='Your Password'
            type='password'
            value={values.password}
            onChange={handleChange} />
          <Icon name='lock' className='left' />
        </Control>
      </Field>

      <Field>
        <Button color='primary' isLoading={isSubmitting} onClick={handleSubmit}>
          Create account
        </Button>
      </Field>
    </form>
  )
}

const withDefaultProps = defaultProps({
})

const withFormik = Formik({
  validateOnChange: false,
  validationSchema: object().shape({
    email: string().email().required('Email is required'),
    name: string().min(4, 'Must be longer than 4 characters').required('Name is required'),
    password: string().min(4, 'Must be longer than 4 characters').required('Password is required')
  }),
  mapPropsToValues: p => ({
    email: '',
    name: '',
    password: '',
    emailTemplate: 'dream-internship-schimba-parola'
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    if (props.onSubmit) {
      props
        .onSubmit(values)
        .then((result) => {
          setSubmitting(false)
          if (props.onSubmitComplete) {
            props.onSubmitComplete()
          }
        })
    }
  }
})

export default compose(
  withFormik,
  withDefaultProps
)(Component)
