import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem 0;
  background-color: transparent;
`
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 5rem;
  span {
    font-size: 1.8rem;
    color: #01be96;
  }
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`
export const HeaderNav = styled.div`
  span {
    margin-right: 5rem;
  }
`
