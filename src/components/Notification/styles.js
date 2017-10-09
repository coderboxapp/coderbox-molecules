import styled from 'styled-components'
import { bgColor } from 'styled-utils'

export const Notification = styled.div`
  border: 1px solid ${bgColor};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 0 0 0em 0;
  padding-right: 1em;
  border-radius: 3px;

  & > .icon {
    margin-right: 0.25rem;
    height: auto
  }

  & .content {
    flex: 1;
    padding: 0.75em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & .content .button {
    margin-top: 0.5rem;
  }

  & p.time {
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin: 0.2rem 0 0.5rem 0;
  }
`
