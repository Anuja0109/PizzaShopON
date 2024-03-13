import { useState } from 'react'
import Select from '@ui/Select'
import { SelectComponentsProp, TOption } from '@global-types/global'

const options = [
  { value: 'veg', label: 'Veg' },
  { value: 'nonveg', label: 'Non Veg' }
] as const

const PizzaTypeSelect: React.FC<SelectComponentsProp> = ({ updateParent }) => {
  const [selectedOption, setSelectedOption] = useState<TOption>(options[0])

  return (
    <>
      <label>
        <span>Pizza Type</span>
      </label>
      <Select
        resourceName="pizzaType"
        selected={selectedOption}
        options={options}
        resourceId="pizzaType"
        onSelectChange={setSelectedOption}
      />
    </>
  )
}

export default PizzaTypeSelect
