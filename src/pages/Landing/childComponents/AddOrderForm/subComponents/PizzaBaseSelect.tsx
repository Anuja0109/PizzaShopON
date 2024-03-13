import { useState } from 'react'
import Select from '@ui/Select'
import { SelectComponentsProp, TOption } from '@global-types/global'

const options = [
  { value: 'thick', label: 'Thick' },
  { value: 'thin', label: 'Thin' }
] as const

const PizzaBaseSelect: React.FC<SelectComponentsProp> = ({ updateParent }) => {
  const [selectedOption, setSelectedOption] = useState<TOption>(options[0])

  return (
    <>
      <label>
        <span>Pizza Base</span>
      </label>
      <Select
        resourceName="pizzaBase"
        selected={selectedOption}
        options={options}
        resourceId="pizzaBase"
        onSelectChange={setSelectedOption}
      />
    </>
  )
}

export default PizzaBaseSelect
