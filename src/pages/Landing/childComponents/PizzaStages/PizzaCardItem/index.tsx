import { IPizzaOrder } from '@global-types/global'
import Card from '@ui/Card'
import PizzaCardBody from '../PizzaCardBody'

type TOrderListItemProps = {
  order: IPizzaOrder
  key?: string
}
const PizzaCard: React.FC<TOrderListItemProps> = ({ order }) => {
  console.log({ order })
  return <Card item={order} itemComponent={PizzaCardBody} />
}

export default PizzaCard
