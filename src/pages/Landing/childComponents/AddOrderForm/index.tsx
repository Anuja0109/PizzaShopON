import Button from '@ui/Button'
import PizzaBaseSelect from './subComponents/PizzaBaseSelect'
import PizzaSizeSelect from './subComponents/PizzaSizeSelect'
import PizzaTypeSelect from './subComponents/PizzaTypeSelect'
import { FormDiv } from './style'
import { useState } from 'react'
import { TPizzaDetails, UpdateParent } from '@global-types/global'

const AddOrderForm: React.FC = () => {
  const [formState, setFormState] = useState<TPizzaDetails>({
    type: null,
    size: null,
    base: null
  })

  const getValueFromFomField: UpdateParent = ({ name, value }) =>
    setFormState((prev) => ({ ...prev, [name]: value }))
  return (
    <FormDiv>
      <PizzaTypeSelect updateParent={getValueFromFomField} />
      <PizzaSizeSelect updateParent={getValueFromFomField} />
      <PizzaBaseSelect updateParent={getValueFromFomField} />
      <Button
        resourceId="addOrderSave"
        buttonText="Add"
        type="submit"
        onRequestClick={(e: Event) => console.log(e)}
      />
    </FormDiv>
  )
}

export default AddOrderForm
