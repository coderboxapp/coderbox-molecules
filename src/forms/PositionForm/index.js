import React from 'react'
import { object, string } from 'yup'
import { isObject } from 'lodash'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { position, suggestions } from '@coderbox/prop-types'
import { Field, Control, Dropdown, DateRange, Textarea } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'

const Component = ({
  profile,
  values,
  errors,
  status,
  suggestions,
  isSubmitting,
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
          <Dropdown
            isSearch
            allowNew
            name='title'
            maxItems={4}
            labelField='name'
            items={suggestions.titles}
            value={values.title}
            borderColor={errors['title.name'] ? 'danger' : undefined}
            onChange={c => props.setFieldValue('title', isObject(c) ? c : {name: c})}
            placeholder='Type title(eg. Web Developer)'
          />
        </Control>
      </Field>

      <Field label='Company:'>
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
            onChange={c => props.setFieldValue('company', isObject(c) ? c : {name: c})}
            placeholder='Type company name'
          />
        </Control>
      </Field>

      <Field label='Technologies:'>
        <Control>
          <Dropdown
            isSearch
            isMultiple
            accentColor='primary'
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

      <Field label='Period:'>
        <DateRange
          isSearch
          isMultiple
          name='dateRange'
          size='small'
          range={values.dateRange}
          onChange={d => props.setFieldValue('dateRange', d)}
        />
      </Field>

      <Field label='Responsabilities:'>
        <Textarea
          rows={10}
          name='responsabilities'
          value={values.responsabilities}
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

Component.displayName = 'PositionForm'
Component.propTypes = {
  data: position,
  suggestions: suggestions
}

export default compose(
  defaultProps({
    data: {},
    suggestions: { companies: [], technologies: [], titles: [] }
  }),
  withFormik({
    validateOnChange: true,
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
        ...data,
        type: 'position'
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
)(Component)
