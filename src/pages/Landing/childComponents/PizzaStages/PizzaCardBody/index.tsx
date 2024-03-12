import { IPizzaOrder } from '@global-types/global'

type TPizzaCardBodyProps = {
  item: IPizzaOrder
}

const PizzaCardBody: React.FC<TPizzaCardBodyProps> = ({ item }) => {
  return (
    <div id={item.id}>
      <h4>{item.currentStatus?.toLocaleUpperCase()}</h4>
    </div>
  )
}

export default PizzaCardBody
