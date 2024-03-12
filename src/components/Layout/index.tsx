import { ReactNode } from 'react'
import LayoutContainer from './style'
import Header from '@components/Header'
import Footer from '@components/Footer'

type TLayoutProps = {
  children: ReactNode
}

const Layout: React.FC<TLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
