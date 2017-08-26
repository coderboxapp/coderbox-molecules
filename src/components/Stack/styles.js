import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Stack = styled.div`
  position: relative;
  overflow: hidden;
`

export const StackItem = styled.div`
  display: ${p => p.isVisible ? 'block' : 'none'};
  animation: ${fade} 0.25s linear;
`
