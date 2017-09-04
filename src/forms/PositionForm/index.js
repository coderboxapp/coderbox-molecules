import React from 'react'
import yup from 'yup'
import { Formik as withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { position, suggestions } from '@coderbox/prop-types'
import { Field, Control, Input, Dropdown, DateRange, Textarea } from '@coderbox/forms'
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
      <Field label='Title:'>
        <Control hasLeftIcon>
          <Icon name='info' className='left' />
          <Input
            name='title'
            value={values.title}
            color={errors.title ? 'danger' : null}
            onChange={handleChange}
            placeholder='Type title(eg. Web Developer)'
          />
        </Control>
      </Field>

      <Field label='Company:'>
        <Control hasLeftIcon>
          <Icon name='building' className='left' />
          <Dropdown
            isSearch
            name='company'
            maxItems={4}
            labelField='name'
            items={suggestions.companies}
            value={values.company}
            onChange={c => props.setFieldValue('company', c)}
            placeholder='Type company name'
          />
        </Control>
      </Field>

      <Field label='Technologies:'>
        <Control>
          <Dropdown
            isSearch
            isMultiple
            color='primary'
            accentColor='danger'
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
  data: position,
  suggestions: suggestions
}

export default compose(
  defaultProps({
    data: {},
    suggestions: { companies: [], technologies: [] }
  }),
  withFormik({
    mapPropsToValues: ({ data, suggestions }) => ({
      _id: data._id,
      title: data.title && data.title.name,
      company: data.company,
      technologies: data.technologies.concat(),
      dateRange: data.timePeriod,
      responsabilities: data.responsabilities,
      type: data.type
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
