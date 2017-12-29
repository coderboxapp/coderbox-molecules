import styled, { injectGlobal } from 'styled-components'
import { withSize } from 'styled-utils'

export const Container = styled.div`
  width: 100%;
  & input {
    font-size: inherit;
    font-family: ${(p) => p.theme.fonts.primary};
    font-weight: 400;
    background: white;
    margin: 0;
    outline: 0;
    padding: 0 0.55rem;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    max-width: 100%;
    width: 100%;
    height: 2.40em;
    box-sizing: border-box;
    appearance: none;
    box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);
  }

  ${withSize}
`

injectGlobal`
  .pac-container {
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    box-shadow: none;
    margin-top: 2px;
  }
`
