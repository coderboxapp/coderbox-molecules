import React from 'react'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { Field, Control, Dropdown, DateRange } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'

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
            onChange={c => setFieldValue('institution', c)}
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
            onChange={t => setFieldValue('technologies', t)}
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
          onChange={d => setFieldValue('dateRange', d)}
        />
      </Field>

      <Field label='Degree:'>
        <Dropdown
          name='degree'
          value={values.degree}
          items={[ 'High School', 'Bachelor’s Degree', 'Engineer’s Degree', 'Master’s Degree' ]}
          onChange={d => setFieldValue('degree', d)}
        />
      </Field>

      <div>
        <Button color='primary' onClick={handleSubmit} isLoading={isSubmitting}>
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
