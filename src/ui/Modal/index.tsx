import { ReactNode } from 'react'
import Portal from '@ui/Portal'
import Button from '@ui/Button'
import { ModalBackGround, ModalDialog, ModalBody, ModalTitle } from './style'

type TAppModalProps = {
  children: ReactNode
  shouldShow: Boolean
  onRequestClose: any
  // React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

const AppModal: React.FC<TAppModalProps> = ({
  children,
  shouldShow = false,
  onRequestClose,
  title = 'Modal'
}) => {
  if (!shouldShow) return null

  return (
    <Portal>
      <ModalBackGround>
        <ModalDialog onClick={(e) => e.stopPropagation()}>
          <ModalTitle>
            {title}
            <Button
              onRequestClick={onRequestClose}
              resourceId="modalCloseButton"
              size="icon"
              type="button"
              buttonText="Close"
            />
          </ModalTitle>
          <ModalBody>{children}</ModalBody>
        </ModalDialog>
      </ModalBackGround>
    </Portal>
  )
}

export default AppModal
