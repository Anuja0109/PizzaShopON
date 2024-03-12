import { Component, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type TPortalProps = {
  children: ReactNode
}

const modalRoot = document.getElementById('modal-root') as HTMLElement

class Portal extends Component<TPortalProps> {
  el: HTMLElement = document.createElement('div')

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

export default Portal
