import styled from 'styled-components'

const AppButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  color: white;
  background-color: rebeccapurple;
  border: 1px solid;
  border-color: rebeccapurple;
  border-radius: 20px;
  font-family: sans-serif;
  font-size: 16px;
  text-decoration: none;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: rebeccapurple;
    border-color: pink;
    background-color: pink;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`

export default AppButton
