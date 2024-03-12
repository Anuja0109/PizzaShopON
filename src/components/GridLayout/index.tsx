import { useState, useEffect, createRef } from 'react'
import { Grid } from './style'

export interface GridLayoutProps {
  columnsAmount: number
  rowHeight?: number
  children: (width: number) => JSX.Element | JSX.Element[]
}

const GridLayout = ({
  children,
  columnsAmount,
  rowHeight
}: GridLayoutProps): JSX.Element => {
  const gridRef = createRef<HTMLDivElement>()
  const [elementWidth, setElementWidth] = useState<number>(0)

  useEffect(() => {
    const { current } = gridRef
    let gridWidth = current!.getBoundingClientRect().width
    setElementWidth(Math.round(gridWidth / columnsAmount))
  }, [columnsAmount, rowHeight, gridRef])

  return (
    <Grid columnsAmount={columnsAmount} rowHeight={rowHeight} ref={gridRef}>
      {children(elementWidth)}
    </Grid>
  )
}

export default GridLayout
