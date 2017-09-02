import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
`

export const ItemLeft = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  width: 80px;

  & .tag {
    padding: 0 0.35rem;
  }
`

export const ItemContent = styled.div`
  display: block;
  margin-left: 0;
  padding-left: 1.5em;

  .subtitle {
    margin-bottom: 0.5em !important;
  }
`
