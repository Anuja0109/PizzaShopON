import styled from 'styled-components'

const AppButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  width: 5rem;
  color: black;
  background-color: #ddc23f;
  border: 1px solid;
  border-color: #ddc23f;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 14px;
  text-decoration: none;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: #ddc23f;
    border-color: #c84d5f;
    background-color: #c84d5f;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`

export default AppButton
