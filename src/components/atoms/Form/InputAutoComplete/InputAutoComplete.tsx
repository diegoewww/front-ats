import useCustomController, { UseControllerPropsCustom } from '@/hooks/useCustomController'
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import ErrorMessageForm from '../ErrorMessageForm/ErrorMessageForm'
import { useState } from 'react'

interface item {
  id: string
  label: string
  value: number
}

type items = item[]

interface inputGroupAutoComplete extends UseControllerPropsCustom {
  title: string
  itemsSelect: items
  placeholder?: string
}

export default function InputAutoComplete (props: inputGroupAutoComplete) {
  const {
    field,
    errors
  } = useCustomController(props)

  const { title, itemsSelect, placeholder } = props

  const [selectedValue, setSelectedValue] = useState<item | null>(null)

  const handleChange = (value: string | number) => {
    // Buscar el elemento seleccionado en la lista itemsSelect
    const selectedItem = itemsSelect.find((item) => item.value === Number(value))
    // console.log('SelectedItem:', selectedItem)

    setSelectedValue(selectedItem ?? null)

    field.onChange((selectedItem != null) ? selectedItem : null)

    // Mostrar el value y el label en la consola
    // console.log('handleChange - field.value:', field.value)
    // console.log('handleChange - (id) Index seleccionado:', selectedItem?.id ?? '')
    // console.log('handleChange - (label) Etiqueta seleccionada:', selectedItem?.label ?? 'No hay elemento seleccionado')
    // console.log('handleChange - (value) Valor seleccionado:', selectedItem?.value ?? 0)
  }

  // console.log('selected value:', selectedValue)

  return (
    <div>
      <p>{title} <span>*</span></p>
      <Autocomplete
        {...field}
        defaultItems={itemsSelect}
        onSelectionChange={handleChange}
        placeholder={placeholder}
        className='w-full'
        defaultInputValue={selectedValue?.label}
        value={field.value as string}
      >
        {(item) => <AutocompleteItem key={item.id}>{item.label}</AutocompleteItem>}
      </Autocomplete>
      <ErrorMessageForm name={field.name} errors={errors} />
    </div>
  )
}
