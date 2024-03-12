import { IPizzaOrder } from '@global-types/global'

type TFilterItemsProps = {
  items: IPizzaOrder[]
  key: keyof IPizzaOrder
  value: string
}

export const filterItems = ({ items, key, value }: TFilterItemsProps) => {
  const filtered = items.filter((item) => item[key] === value)
  return filtered
}
