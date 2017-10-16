import React from 'react'
import { object, string } from 'yup'
import { withFormik } from 'formik'
import { compose, defaultProps, setDisplayName } from 'recompose'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation, MarkdownEditor } from 'components'
import { Avatar } from 'elements'

const Component = ({
  data,
  values,
  errors,
  status,
  isSubmitting,
  setFieldValue,
  handleChange,
  handleSubmit,
  onCancel,
  onSubmitComplete,
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
        <Avatar src={data.logo} />
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

      <Field label='YouTube URL:'>
        <Control hasLeftIcon>
          <Icon name='globe' className='left' />
          <Input
            name='video'
            value={values.video}
            color={errors.video ? 'danger' : null}
            onChange={handleChange}
            placeholder='Ex. https://www.youtube.com/watch?v={code}'
          />
        </Control>
      </Field>

      <Field label='Description:'>
        <MarkdownEditor
          name='description'
          value={values.description}
          onBlur={(evt, v) => setFieldValue('description', v)}
          placeholder='Description ?' />
      </Field>

      <div>
        <Button color='primary' onClick={handleSubmit} isLoading={isSubmitting}>
          Save
        </Button>
        <Button color='gray' tone='2' onClick={(evt) => onCancel(evt)}>
          Cancel
        </Button>
      </div>
    </form>
  )
}

const withDefaultProps = defaultProps({ data: {} })
const withDisplayName = setDisplayName('CompanyForm')
const withFormikEnhancer = withFormik({
  mapPropsToValues: ({ data }) => ({
    name: data.name,
    location: data.location,
    video: data.video,
    description: data.description
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
