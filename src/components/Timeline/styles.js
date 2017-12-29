import styled from 'styled-components'
import { onMobile } from 'mqcss'
import * as color from 'styled-utils/color'

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  min-height: 140px;
  padding: 2.5rem 0;
  margin: 40px auto;
  box-sizing: border-box;

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
    background: ${color.bg};
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

  & > .timeline-row:last-child:after {
    content: '';
    position: absolute;
    bottom: -90px;
    left: 50%;
    transform: translateX(-50%);
    background: ${color.bg};
    height: 12px;
    width: 12px;
    border-radius: 50%;

    ${onMobile} {
      bottom: -110px;
    }
  }
`
