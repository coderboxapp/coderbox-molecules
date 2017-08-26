import React from 'react'
import { isString } from 'lodash'
import Autocomplete from 'react-google-autocomplete'
import { Container } from './styles'

class AutocompleteLocation extends React.Component {
  state = {
    formatted_address: this.convertAddress(this.props.value)
  }

  static defaultProps = {
    placeholder: '',
    size: 'normal'
  }

  convertAddress (address) {
    if (!address) return ''
    return isString(address) ? address : address.formatted_address
  }

  formatPlace (place) {
    return {
      formatted_address: place.formatted_address,
      geometry: place.geometry
    }
  }

  onPlaceSelected = (place) => {
    this.setState({formatted_address: place.formatted_address})

    if (this.props.onChange) {
      this.props.onChange(this.formatPlace(place))
    }
  }

  onChange = (evt) => {
    this.setState({ formatted_address: evt.target.value })
  }

  render () {
    let { placeholder, ...props } = this.props

    return (
      <Container {...props}>
        <Autocomplete
          types={['(regions)']}
          className='input'
          value={this.state.formatted_address}
          placeholder={placeholder}
          onChange={this.onChange}
          onPlaceSelected={this.onPlaceSelected}
        />
      </Container>
    )
  }
}

export default AutocompleteLocation
