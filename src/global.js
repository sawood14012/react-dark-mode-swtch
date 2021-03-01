import styled, { createGlobalStyle } from 'styled-components';
import Button from 'react-bootstrap/Button';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin-top: 80px;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }`

  export const Title = styled.text`

  color: ${({ theme }) => theme.title}`


  export const StyledButtonsave = styled(Button)`
  background-color: ${({ theme }) => theme.save};
  color: ${({ theme }) => theme.body};
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const StyledButtonSub = styled(Button)`
background-color: ${({ theme }) => theme.submit};
color: ${({ theme }) => theme.body};
border: none;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;

`;