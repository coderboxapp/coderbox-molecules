import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
`

export const ItemLeft = styled.div`
  margin: 0;
  padding: 0;
`

export const ItemContent = styled.div`
  min-width: 0;
  width: auto;
  display: block;
  margin-left: 0;
  padding-left: 1.5em;

  .subtitle {
    margin-bottom: 0.5em !important;
  }
`
