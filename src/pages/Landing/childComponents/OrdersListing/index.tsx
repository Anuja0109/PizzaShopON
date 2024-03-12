import RegularList from '@ui/List'
import OrderListItem from './OrderListItem'
import { orderSelector } from '@store/slices/orders'
import { useAppSelector } from '@hooks/useAppSelector'
import { IPizzaOrder } from '@global-types/global'

const OrdersListing: React.FC = () => {
  const orders: IPizzaOrder[] = useAppSelector(orderSelector)
  return (
    <>
      <RegularList
        items={orders}
        resourceName="order"
        itemComponent={OrderListItem}
      />
    </>
  )
}

export default OrdersListing
