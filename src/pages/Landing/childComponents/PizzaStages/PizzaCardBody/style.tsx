import styled from 'styled-components'

/* red: FF3333, #009966*/

export const CardPane = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #000;
  border: 1px solid #ddc23f;
  border-radius: 10px;
  width: 100% !important;
  max-width: 100%;
  overflow-x: hidden;
  height: 100% !important;
  padding: 0;
  margin: 0;
  background: ${(p) => p.color};
`
export const CardHeader = styled.div`
  font-size: 20px;
  font-variant: all-petite-caps;
  font-family: cursive;
  font-style: italic;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const CardSeperator = styled.hr`
  border: 1px solid #ddc23f;
`
export const CardBody = styled.div`
  font-size: 20px;
  color: dark grey;
  line-height: initial;
  font-weight: normal;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

export const CardBtnHolder = styled.div`
  margin: auto;
  padding-inline: 25px;
`

export const CardText = styled.span`
  text-decoration: none;
  display: block;
  font-weight: 400px;
  padding: 2px;
  align-items: center;
  text-align: center;
`
