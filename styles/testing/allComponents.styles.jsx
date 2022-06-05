import styled from 'styled-components';

export const Button = styled.button`
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  background: ${props => props.theme.background};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;