import { TOption } from '@global-types/global'
import { AppSelect } from './style'

type TSelectProps = {
  placeholder?: string
  options: readonly TOption[]
  resourceName: string
  resourceId: string | undefined
  selected: TOption | null
  onSelectChange: (selection: TOption) => void
}

const Select: React.FC<TSelectProps> = ({
  options,
  selected,
  resourceName,
  resourceId,
  onSelectChange
}) => {
  return (
    <AppSelect
      name={resourceName}
      id={resourceId}
      onChange={(e) => {
        let selection = options.find((op) => op.value === e.target.value)
        if (selection !== undefined) onSelectChange(selection)
      }}>
      {options?.map((op) => (
        <option
          key={op.value}
          value={op.value}
          selected={selected?.value === op.value}>
          {op.label}
        </option>
      ))}
    </AppSelect>
  )
}

export default Select
