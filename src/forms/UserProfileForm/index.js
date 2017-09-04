import React from 'react'
import yup from 'yup'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps, withPropsOnChange } from 'recompose'
import { user } from '@coderbox/prop-types'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation } from 'components'
import { Avatar } from 'elements'

const Component = ({
  profile,
  values,
  errors,
  status,
  submitting,
  handleChange,
  handleSubmit,
  onCancel,
  ...props
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {status &&
        <Field>
          <Text color='danger' size='normal'>{status}</Text>
        </Field>
      }
      <Field align='center'>
        <Avatar email={profile.email} isEdit />
      </Field>

      <Field label='Name:'>
        <Control hasLeftIcon>
          <Icon name='user' className='left' />
          <Input
            name='name'
            value={values.name}
            color={errors.name ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your name (eg. Darth Vader)'
          />
        </Control>
      </Field>

      <Field label='Location:'>
        <Control hasLeftIcon>
          <Icon name='map-marker' className='left' />
          <AutocompleteLocation
            name='location'
            value={values.location}
            color={errors.location ? 'danger' : null}
            onChange={loc => props.setFieldValue('location', loc)}
            placeholder='Where do you live ?'
          />
        </Control>
      </Field>

      <Field label='Personal website:'>
        <Control hasLeftIcon>
          <Icon name='globe' className='left' />
          <Input
            name='url'
            value={values.url}
            color={errors.url ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your personal website'
          />
        </Control>
      </Field>
      <div>
        <Button color='primary' onClick={handleSubmit} isLoading={submitting}>
          Save
        </Button>
        <Button color='gray' tone='2' onClick={(evt) => props.stack ? props.stack.prev() : onCancel(evt)}>
          Cancel
        </Button>
      </div>
    </form>
  )
}

Component.displayName = 'UserProfileForm'
Component.propTypes = {
  profile: user
}

export default compose(
  defaultProps({
    profile: {},
    submitting: false
  }),
  withPropsOnChange(
    (props, nextProps) => props.submitting && !nextProps.submitting && !nextProps.status,
    (props) => {
      if (props.stack && props.stack.index > 0) props.stack.setIndex(0)
      return {}
    }
  ),
  withFormik({
    mapPropsToValues: ({ profile }) => ({
      name: profile.name,
      location: profile.location,
      url: profile.url
    }),
    validationSchema: yup.object().shape({
      name: yup.string()
        .min(3, 'Name has to be at least 3 characters long.')
        .required('Name is required')
    }),
    handleSubmit: (values, { props }) => {
      if (props.onSubmit) {
        props.onSubmit(values)
      }
    }
  })
)(Component)
