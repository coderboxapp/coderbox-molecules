import React from 'react'
import yup from 'yup'
import { shape, string, object } from 'prop-types'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation } from 'components'

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
      <Field>
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
      <Field>
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
      <Field>
        <Control hasLeftIcon>
          <Icon name='globe' className='left' />
          <Input
            name='website'
            value={values.website}
            color={errors.website ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your website'
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

Component.displayName = 'PositionForm'
Component.propTypes = {
  profile: shape({
    name: string,
    location: object,
    website: string
  })
}

export default compose(
  defaultProps({
    profile: {}
  }),
  withFormik({
    mapPropsToValues: ({ profile }) => ({
      name: profile.name,
      location: profile.location,
      website: profile.website
    }),
    validationSchema: yup.object().shape({
      name: yup.string()
        .min(2, 'Name has to be at least 3 characters long.')
        .required('Email is required')
    }),
    handleSubmit: (values, { props }) => {
      if (props.onSubmit) {
        props.onSubmit(values)
      }
    }
  })
)(Component)
