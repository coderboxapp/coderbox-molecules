import styled from 'styled-components'
import { bgColor } from 'styled-utils'

export const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  min-height: 200px;
  padding: 50px 20px;
  margin: 40px auto;

  &.hidden {
    display: none;
  }
  &:before,
  &:after {
    top: 0;
    left: 50%;
    content: "";
    position: absolute;
    transform: translateX(-50%);
    background: ${bgColor};
    z-index: 0;
  }
  &:before {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  &:after {
    bottom: 0;
    width: 2px;
  }

  .timeline-item:last-child:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${bgColor};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`
