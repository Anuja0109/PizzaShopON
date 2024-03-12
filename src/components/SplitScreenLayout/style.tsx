import styled from 'styled-components'

export const SplitScreenContainer = styled.div`
  height: 92vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  #top {
    grid-column: 1;
    grid-row: 1;
  }
  #bottom {
    grid-column: 1;
    grid-row: 2;
  }
`

export const SplitScreenPane = styled.div``
