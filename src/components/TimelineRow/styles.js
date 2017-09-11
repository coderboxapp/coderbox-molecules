import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2.5rem 0;

  & > .icon {
    border: 2px solid;
    margin: 0 1.4rem;
    width: 2.2em;
    height: 2.2em;
    background: white;
    z-index: 4;
  }
`

export const Item = styled.div`
  flex: 100px;
  text-align: ${p => p.isOdd ? 'right' : 'left'};
  
  & form {
    margin-top: 10px;
  }

  & .box {
    min-height: 20px;
  }
`
