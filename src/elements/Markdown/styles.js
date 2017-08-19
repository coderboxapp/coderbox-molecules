import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Markdown = styled(ReactMarkdown)`
  font-family: ${p => p.theme.fonts.primary};
  line-height: 1.5em;

  p {
    margin-bottom: 15px;
  }

  a {
    color: ${p => p.theme.palettes.primary[0]};
    text-decoration: none;
  }

  blockquote {
    margin: 0;
    padding: 0 0 0 6px;
    border-left: 4px solid #E5E5E5;
  }

  ul {
    margin: 0;
    padding: 0 20px;
    li {
      margin-bottom: 0;
    }
  }

  code {
    margin: 0;
    padding: 2px 6px;
    white-space: pre-wrap;
    background-color: #FAFAFA;
    border: 1px solid;
    border-color: #dadada;
    border-radius: 4px;
  }
`
