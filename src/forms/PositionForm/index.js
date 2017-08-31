import React from 'react'
import yup from 'yup'
import { shape, object, array } from 'prop-types'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { Field, Control, Input, Dropdown, DateRange } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'

const Component = ({
  profile,
  values,
  errors,
  status,
  submitting,
  suggestions,
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
            name='title'
            value={values.title}
            color={errors.title ? 'danger' : null}
            onChange={handleChange}
            placeholder='Type title(eg. Web Developer)'
          />
        </Control>
      </Field>
      <Field>
        <Control hasLeftIcon>
          <Icon name='building' className='left' />
          <Dropdown
            isSearch
            name='company'
            maxItems={4}
            valueField='_id'
            labelField='name'
            items={suggestions.companies}
            value={values.company}
            onChange={c => props.setFieldValue('company', c)}
            placeholder='Type company name'
          />
        </Control>
      </Field>
      <Field>
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
      <Field>
        <DateRange
          isSearch
          isMultiple
          name='dateRange'
          range={values.dateRange}
          onChange={d => props.setFieldValue('dateRange', d)}
        />
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
  data: shape({
    title: object,
    company: object
  }),
  suggestions: shape({
    companies: array
  })
}

export default compose(
  defaultProps({
    data: { title: { name: '' } },
    suggestions: { companies: [], technologies: [] }
  }),
  withFormik({
    mapPropsToValues: ({ data, suggestions }) => ({
      title: data.title.name,
      company: data.company,
      technologies: data.technologies,
      dateRange: data.timePeriod
    }),
    validationSchema: yup.object().shape({
      title: yup.string()
        .min(3, 'Title has to be at least 3 characters long.')
        .required('Title is required')
    }),
    handleSubmit: (values, { props }) => {
      if (props.onSubmit) {
        props.onSubmit(values)
      }
    }
  })
)(Component)
