import styled from 'styled-components'

export const ModalBackGround = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
`
export const ModalDialog = styled.div`
  position: absolute;
  background: #012039;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ccc;
  margin: 10% 25%;
  padding: 20px;
  width: 30%;
`
export const ModalSeperator = styled.hr`
  border: 1px solid #ccc;
  margin-bottom: 0.6rem;
  width: 100%;
`
export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 0.1rem 0.1rem;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
`

export const ModalBody = styled.div``
