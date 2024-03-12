import { Component, ErrorInfo, ReactNode } from 'react'

type TErrorProps = {
  children?: ReactNode
}

type TErrorState = {
  hasError: boolean
}

class ErrorBoundary extends Component<TErrorProps, TErrorState> {
  public state: TErrorState = {
    hasError: false
  }

  public static getDerivedStateFromError(): TErrorState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
