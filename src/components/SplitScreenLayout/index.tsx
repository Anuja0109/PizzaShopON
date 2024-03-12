import { ReactNode } from 'react'
import { SplitScreenContainer, SplitScreenPane } from './style'

type TSplitScreenProps = {
  children: [top: ReactNode, bottom: ReactNode]
}

const SplitScreenLayout: React.FC<TSplitScreenProps> = ({ children }) => {
  const [top, bottom] = children
  return (
    <SplitScreenContainer>
      <SplitScreenPane>{top}</SplitScreenPane>
      <SplitScreenPane>{bottom}</SplitScreenPane>
    </SplitScreenContainer>
  )
}

export default SplitScreenLayout
