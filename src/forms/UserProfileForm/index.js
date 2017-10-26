import React from 'react'
import { object, string } from 'yup'
import { withFormik } from 'formik'
import { compose, defaultProps, setDisplayName } from 'recompose'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation } from 'components'
import { Avatar } from 'elements'

const Component = ({
  data,
  values,
  errors,
  status,
  isSubmitting,
  handleChange,
  handleSubmit,
  onCancel,
  onSubmitComplete,
  ...props
}) => {
  return (
    <form onSubmit={handleSubmit} className={props.className}>
      {status &&
        <Field>
          <Text color='danger' size='normal'>{status}</Text>
        </Field>
      }
      <Field align='center'>
        <Avatar email={data.email} isEdit />
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
        <Button className='btn-save' color='primary' onClick={handleSubmit} isLoading={isSubmitting}>
          Save
        </Button>
        <Button className='btn-cancel' color='gray' tone='2' onClick={(evt) => onCancel(evt)}>
          Cancel
        </Button>
      </div>
    </form>
  )
}

const withDefaultProps = defaultProps({ data: {} })
const withDisplayName = setDisplayName('UserProfileForm')
const withFormikEnhancer = withFormik({
  mapPropsToValues: ({ data }) => ({
    name: data.name,
    location: data.location,
    url: data.url
  }),
  validationSchema: object().shape({
    name: string()
      .min(3, 'Name has to be at least 3 characters long.')
      .required('Name is required')
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
  withDisplayName,
  withDefaultProps,
  withFormikEnhancer
)(Component)
