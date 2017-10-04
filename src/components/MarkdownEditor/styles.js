import styled from 'styled-components'
import { bgColor } from 'styled-utils'

export const EditorContainer = styled.div`
  width: 100%;
  font-family: ${p => p.theme.fonts.primary};
  border: 1px solid transparent;
  border-color: ${bgColor};
  border-radius: 3px;
  line-height: 1.5em;

  & .ButtonWrap__root___1EO_R {
    z-index: 2;
  }

  & > div {
    box-shadow: inset 0 1px 2px rgba(100,100,100,0.12);
  }

  & span {
    font-family: ${p => p.theme.fonts.primary};
  }

  & a {
    color: ${p => p.theme.palettes.primary[0]};
    text-decoration: none;
  }

  & blockquote {
    margin: 0;
    padding: 0 0 0 6px;
    border-left: 4px solid #E5E5E5;
  }

  & ul {
    margin: 0;
    padding: 0 20px;
    li {
      margin-bottom: 0;
    }
  }

  & code {
    margin: 0;
    padding: 2px 6px;
    white-space: pre-wrap;
    background-color: #FAFAFA;
    border: 1px solid;
    border-color: #dadada;
    border-radius: 4px;
  }
`

export const EditorToolbar = styled.div`
  display: flex;
  & > * {
    margin: 0 0.5rem 0.5rem 0;
  }
`
