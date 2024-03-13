import { useState } from 'react'
import Select from '@ui/Select'
import { SelectComponentsProp, TOption } from '@global-types/global'

const options = [
  { value: 'large', label: 'Large' },
  { value: 'medium', label: 'Medium' },
  { value: 'small', label: 'Small' }
] as const

const PizzaSizeSelect: React.FC<SelectComponentsProp> = ({ updateParent }) => {
  const [selectedOption, setSelectedOption] = useState<TOption>(options[0])

  return (
    <>
      <label>
        <span>Pizza Size</span>
      </label>
      <Select
        resourceName="pizzaSize"
        selected={selectedOption}
        options={options}
        resourceId="pizzaSize"
        onSelectChange={setSelectedOption}
      />
    </>
  )
}

export default PizzaSizeSelect
