import React from 'react'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { education, suggestions } from '@coderbox/prop-types'
import { Field, Control, Dropdown, DateRange } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
// import yup from 'yup'

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

      <Field label='Institutions:'>
        <Control hasLeftIcon>
          <Icon name='building' className='left' />
          <Dropdown
            isSearch
            name='institution'
            maxItems={4}
            valueField='_id'
            labelField='name'
            items={suggestions.institutions}
            value={values.institution}
            onChange={c => props.setFieldValue('institution', c)}
            placeholder='Type institution name (eg. West University)'
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

      <Field label='Period:'>
        <DateRange
          isSearch
          isMultiple
          name='dateRange'
          range={values.dateRange}
          label='In progress...'
          size='small'
          onChange={d => props.setFieldValue('dateRange', d)}
        />
      </Field>

      <Field label='Degree:'>
        <Dropdown
          name='degree'
          value={values.degree}
          items={[ 'High School', 'Bachelor’s Degree', 'Engineer’s Degree', 'Master’s Degree' ]}
          onChange={d => props.setFieldValue('degree', d)}
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

Component.displayName = 'EducationForm'
Component.propTypes = {
  data: education,
  suggestions: suggestions
}

export default compose(
  defaultProps({
    data: {},
    suggestions: { institutions: [], technologies: [] }
  }),
  withFormik({
    mapPropsToValues: ({ data }) => ({
      _id: data._id,
      institution: data.institution,
      technologies: data.technologies,
      dateRange: data.timePeriod,
      degree: data.degree || '',
      type: data.type
    }),
    handleSubmit: (values, { props }) => {
      if (props.onSubmit) {
        props.onSubmit(values)
      }
    }
  })
)(Component)
