import styled from 'styled-components'

export const Tags = styled.div`
  margin: ${p => p.margin || '0.5em 0'};
  display: inline-flex;

  & .tag {
    margin-bottom: 0.25em;
  }

  & .group:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
`
