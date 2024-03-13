import Button from '@ui/Button'
import { HeaderContainer, HeaderLogo, HeaderNav } from './style'
import { useState } from 'react'
import AppModal from '@ui/Modal'
import AddOrderForm from '@pages/Landing/childComponents/AddOrderForm'

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <h1>Pizza Shop On</h1>
        </HeaderLogo>
        <HeaderNav>
          <span>
            <Button
              resourceId="addOrder"
              buttonText="Order"
              type="button"
              onRequestClick={() => setShowModal(!showModal)}
            />
          </span>
        </HeaderNav>
      </HeaderContainer>
      <AppModal
        shouldShow={showModal}
        title="Add Order"
        onRequestClose={() => setShowModal(false)}>
        <AddOrderForm />
      </AppModal>
    </>
  )
}

export default Header
