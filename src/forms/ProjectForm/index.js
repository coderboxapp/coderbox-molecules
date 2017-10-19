import React from 'react'
import { object, string } from 'yup'
import { withFormik } from 'formik'
import { compose, defaultProps, setDisplayName } from 'recompose'
import { Field, Control, Input, Dropdown, DateRange } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { MarkdownEditor } from 'components'

const Component = ({
  values,
  errors,
  status,
  suggestions,
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
      <Field label='Title:' isRequired>
        <Control hasLeftIcon>
          <Icon name='info' className='left' />
          <Input
            name='title'
            value={values.title}
            color={errors.title ? 'danger' : null}
            onChange={handleChange}
            placeholder='Type project name'
          />
        </Control>
      </Field>

      <Field label='Logo URL:'>
        <Control hasLeftIcon>
          <Icon name='picture-o' className='left' />
          <Input
            name='logo'
            value={values.logo}
            onChange={handleChange}
            placeholder='Project logo (60x60)'
          />
        </Control>
      </Field>

      <Field label='URL:'>
        <Control hasLeftIcon>
          <Icon name='link' className='left' />
          <Input
            name='url'
            value={values.url}
            onChange={handleChange}
            placeholder='Type project name'
          />
        </Control>
      </Field>

      <Field label='Technologies:'>
        <Control>
          <Dropdown
            isSearch
            isMultiple
            allowNew
            maxItems={4}
            labelField='name'
            accentColor='primary'
            name='technologies'
            items={suggestions.technologies}
            value={values.technologies}
            onChange={t => setFieldValue('technologies', t)}
            placeholder='Type technologies'
          />
        </Control>
      </Field>

      <Field label='Period:'>
        <DateRange
          isSearch
          isMultiple
          name='timePeriod'
          size='small'
          label='Still working on this...'
          range={values.timePeriod}
          onChange={d => setFieldValue('timePeriod', d)}
        />
      </Field>

      <Field label='Description:' isRequired>
        <MarkdownEditor
          name='description'
          value={values.description}
          color={errors.description ? 'danger' : null}
          onBlur={(evt, v) => setFieldValue('description', v)}
          placeholder='Type project description' />
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

const withDisplayName = setDisplayName('ProjectForm')
const withDefaultProps = defaultProps({
  data: {},
  suggestions: { companies: [], technologies: [], titles: [] }
})

const withFormikEnhancer = withFormik({
  validateOnChange: false,
  validationSchema: object().shape({
    title: string()
      .min(3, 'Title has to be at least 3 characters long.')
      .required('Title is required'),
    description: string()
      .min(5, 'Description has to be at least 5 characters long.')
      .required()
  }),
  mapPropsToValues: ({ data }) => {
    return {
      ...data
    }
  },
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
