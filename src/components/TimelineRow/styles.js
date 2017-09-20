import styled from 'styled-components'
import { onMobile } from 'mqcss'

export const Container = styled.div`
  position: relative;
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

  ${onMobile} {
    z-index: 100;
    margin: 4rem 0.5rem;

    & > .icon {
      top: -50px;
      left: 50%;
      margin: 0;
      position: absolute;
      transform: translateX(-50%);
    }
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

  ${onMobile} {
    display: ${p => p.isTitle ? 'none' : 'block'};
  }
`
