import styled from 'styled-components'

export const Avatar = styled.div`
  display: inline-flex;
  font-size: ${p => p.size / 5}px;
  padding: 0.35em;
  border: 1px solid;
  border-color: #cacaca;
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  text-align: center;
  margin: 0 0 0.5rem 0;
  vertical-align: middle;

  & img {
    border-radius: ${p => p.theme.sizes.radius} !important;
  }
`
