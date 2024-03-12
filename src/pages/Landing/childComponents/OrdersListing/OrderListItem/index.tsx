import { IPizzaOrder } from '@global-types/global'

type TOrderListItemProps = {
  order: IPizzaOrder
  key: string
}
const OrderListItem: React.FC<TOrderListItemProps> = ({ order, key }) => {
  return <div key={key}></div>
}

export default OrderListItem
