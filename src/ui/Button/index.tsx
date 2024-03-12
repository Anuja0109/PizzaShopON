import AppButton from './style'

type TAppButtonProps = {
  resourceId: string
  buttonText: string
  readonly?: boolean
  textColor?: string
  bgColor?: string
  type: 'button' | 'reset' | 'submit'
  size?: 'small' | 'big' | 'icon'
  variant?: 'primary' | 'secondary'
  onRequestClick: any
}

const Button: React.FC<TAppButtonProps> = ({
  resourceId,
  buttonText,
  type = 'button',
  onRequestClick
}) => {
  return (
    <AppButton type={type} id={resourceId} onClick={onRequestClick}>
      {buttonText}
    </AppButton>
  )
}

export default Button
