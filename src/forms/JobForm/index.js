import React from 'react'
import { object, string } from 'yup'
import { Formik } from 'formik'
import { compose, setDisplayName, defaultProps } from 'recompose'
import { Field, Control, Input, Dropdown, Textarea, Checkbox } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation, MarkdownEditor } from 'components'

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
      <Field label='Title:' isRequired>
        <Control hasLeftIcon>
          <Icon name='info' className='left' />
          <Input
            name='title'
            value={values.title}
            color={errors.title ? 'danger' : null}
            onChange={handleChange}
            placeholder='Type title'
          />
        </Control>
      </Field>

      <Field label='Technologies:'>
        <Control>
          <Dropdown
            isSearch
            isMultiple
            allowNew
            name='technologies'
            maxItems={4}
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
            placeholder='Type location (leave blank for Remote)'
          />
        </Control>
      </Field>

      <Field label='Description:' isRequired>
        <MarkdownEditor
          name='description'
          value={values.description}
          onBlur={(evt, v) => props.setFieldValue('description', v)}
          placeholder='Description ?' />
      </Field>

      <Field>
        <Checkbox
          rows={10}
          name='published'
          checked={values.published}
          onChange={(e, checked) => props.setFieldValue('published', checked)}>
          Published
        </Checkbox>
      </Field>

      <Field>
        <Checkbox
          rows={10}
          name='paid'
          checked={values.paid}
          onChange={(e, checked) => props.setFieldValue('paid', checked)}>
          Paid
        </Checkbox>
      </Field>

      <Field>
        <Checkbox
          rows={10}
          name='teamWork'
          checked={values.teamWork}
          onChange={(e, checked) => props.setFieldValue('teamWork', checked)}>
          Team Work
        </Checkbox>
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
  validateOnChange: false,
  validationSchema: object().shape({
    title: string()
      .min(3, 'Title has to be at least 3 characters long.')
      .required('Title is required'),
    description: string()
      .min(5, 'Description has to be at least 5 characters long.')
      .required()
  }),
  mapPropsToValues: ({ data }) => ({
    ...data
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
