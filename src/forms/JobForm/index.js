import React from 'react'
import { Formik as withFormik } from 'formik'
import { compose } from 'recompose'
import { job } from '@coderbox/prop-types'
import { Field, Control, Input, Dropdown, Textarea } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'
import { AutocompleteLocation } from 'components'

const Component = ({
  values,
  errors,
  status,
  submitting,
  suggestions,
  handleChange,
  handleSubmit,
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

      <Button color='primary' onClick={handleSubmit} isLoading={submitting}>
        Login
      </Button>
    </form>
  )
}

Component.displayName = 'JobForm'
Component.defaultProps = {
  data: job
}

export default compose(
  withFormik({
    mapPropsToValues: ({ data }) => ({
      title: data.title,
      technologies: data.technologies.concat(),
      location: data.location,
      description: data.description
    }),
    handleSubmit: (values, { props }) => {
      if (props.onSubmit) {
        props.onSubmit(values)
      }
    }
  })
)(Component)
