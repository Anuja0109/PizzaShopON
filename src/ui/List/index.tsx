import { IPizzaOrder } from '@global-types/global'

type TRegularListProps = {
  items: IPizzaOrder[]
  resourceName: string
  itemComponent: React.ElementType
}

const RegularList: React.FC<TRegularListProps> = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {items?.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  )
}

export default RegularList
