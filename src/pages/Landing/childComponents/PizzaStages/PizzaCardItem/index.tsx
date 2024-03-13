import { IPizzaOrder } from '@global-types/global'
import Card from '@ui/Card'
import PizzaCardBody from '../PizzaCardBody'
import { CardParentDiv } from './style'

type TOrderListItemProps = {
  order: IPizzaOrder
  key?: string
}
const PizzaCard: React.FC<TOrderListItemProps> = ({ order, key }) => {
  console.log({ order })
  return (
    <CardParentDiv>
      <Card key={key} item={order} itemComponent={PizzaCardBody} />
    </CardParentDiv>
  )
}

export default PizzaCard
