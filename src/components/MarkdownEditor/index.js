import React from 'react'
import RichTextEditor from 'react-rte'
import { EditorContainer } from './styles'

class Component extends React.Component {
  static displayName = 'MarkdownEditor'
  static defaultProps = {
    color: 'light'
  }

  constructor (props) {
    super(props)
    this.state = {
      value: props.value
        ? RichTextEditor.createValueFromString(props.value, 'markdown')
        : RichTextEditor.createEmptyValue()
    }

    this.toolbar = {
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'}
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'H1', style: 'header-one'},
        {label: 'H2', style: 'header-two'},
        {label: 'H3', style: 'header-three'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'},
        {label: 'Blockquote', style: 'blockquote'}
      ]
    }
  }

  onChange = (value) => {
    this.setState({value})
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('markdown')
      )
    }
  }

  onBlur = (evt) => {
    if (this.props.onBlur) {
      let { value } = this.state
      this.props.onBlur(
        evt,
        value.toString('markdown')
      )
    }
  }

  render () {
    const { readOnly, color } = this.props

    return (
      <EditorContainer color={color}>
        <RichTextEditor
          readOnly={readOnly}
          toolbarConfig={this.toolbar}
          value={this.state.value}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      </EditorContainer>
    )
  }
}

export default Component
