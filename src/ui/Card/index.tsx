import { IPizzaOrder } from '@global-types/global'
import { CardContainer } from './style'

type TCardProps = {
  item: IPizzaOrder
  itemComponent: React.ElementType
}

const Card: React.FC<TCardProps> = ({ item, itemComponent: ItemComponent }) => {
  return (
    <CardContainer>
      <ItemComponent item={item} />
    </CardContainer>
  )
}

export default Card
