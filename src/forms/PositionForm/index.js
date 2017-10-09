import React from 'react'
import { object, string } from 'yup'
import { isObject } from 'lodash'
import { Formik } from 'formik'
import { compose, defaultProps, setDisplayName } from 'recompose'
import { Field, Control, Dropdown, DateRange } from '@coderbox/forms'
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
          <Dropdown
            isSearch
            allowNew
            name='title'
            maxItems={4}
            labelField='name'
            items={suggestions.titles}
            value={values.title}
            borderColor={errors['title.name'] ? 'danger' : undefined}
            onChange={c => setFieldValue('title', isObject(c) ? c : {name: c})}
            placeholder='Type title(eg. Web Developer)'
          />
        </Control>
      </Field>

      <Field label='Company / Organization:' isRequired>
        <Control hasLeftIcon>
          <Icon name='building' className='left' />
          <Dropdown
            isSearch
            allowNew
            name='company'
            maxItems={4}
            labelField='name'
            items={suggestions.companies}
            value={values.company}
            borderColor={errors['company.name'] ? 'danger' : undefined}
            onChange={c => setFieldValue('company', isObject(c) ? c : {name: c})}
            placeholder='Type company name'
          />
        </Control>
      </Field>

      <Field label='Technologies:'>
        <Control>
          <Dropdown
            isSearch
            isMultiple
            allowNew
            accentColor='primary'
            name='technologies'
            maxItems={4}
            labelField='name'
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
          range={values.timePeriod}
          onChange={d => setFieldValue('timePeriod', d)}
        />
      </Field>

      <Field label='Responsabilities:'>
        <MarkdownEditor
          name='responsabilities'
          value={values.responsabilities}
          onBlur={(evt, v) => setFieldValue('responsabilities', v)}
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
  suggestions: { companies: [], technologies: [], titles: [] }
})

const withFormik = Formik({
  validateOnChange: false,
  validationSchema: object().shape({
    title: object().shape({
      name: string()
      .min(3, 'Title has to be at least 3 characters long.')
      .required('Title is required')
    }),
    company: object().shape({
      name: string()
      .min(3, 'Title has to be at least 3 characters long.')
      .required('Title is required')
    })
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
  withFormik
)(Component)
