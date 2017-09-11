import React from 'react'
import { Formik } from 'formik'
import { compose, setDisplayName, defaultProps } from 'recompose'
import { Field, Control, Input, Dropdown, Textarea } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation } from 'components'

const Component = ({
  values,
  errors,
  status,
  isSubmitting,
  suggestions,
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
      <Field label='Title:'>
        <Control hasLeftIcon>
          <Icon name='info' className='left' />
          <Input
            name='title'
            value={values.title}
            color={errors.title ? 'danger' : null}
            onChange={handleChange}
            placeholder='Your email address'
          />
        </Control>
      </Field>

      <Field label='Technologies:'>
        <Control>
          <Dropdown
            isSearch
            isMultiple
            name='technologies'
            maxItems={4}
            valueField='_id'
            labelField='name'
            items={suggestions.technologies}
            value={values.technologies}
            onChange={t => props.setFieldValue('technologies', t)}
            placeholder='Type technologies'
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

      <Field label='Description:'>
        <Textarea
          rows={10}
          name='description'
          value={values.description}
          onChange={handleChange}
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

const withDisplayName = setDisplayName('PositionForm')
const withDefaultProps = defaultProps({
  data: {},
  suggestions: { technologies: [] }
})
const withFormik = Formik({
  mapPropsToValues: ({ data }) => ({
    ...data,
    type: 'job'
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
  withFormik
)(Component)
