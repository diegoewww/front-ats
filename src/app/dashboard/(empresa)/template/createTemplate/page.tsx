import CrearOfertaForm from '@/components/atoms/Form/CrearOfertaForm'
import { defaultValues, defaultValuesOptional } from '../../crearOferta/const/defaulValuesForm'
import { getTempateId } from '@/service/offers'

export default async function CreateTemplatePage ({ params }: { params: { id: string | undefined } }) {
  let defaultValuesData: any = {
    ...defaultValues,
    ...defaultValuesOptional
  }
  if (params.id !== undefined) {
    const template = await getTempateId(params.id)
    defaultValuesData = {
      ...defaultValuesData,
      ...template
    }
  }
  return (
    <CrearOfertaForm defaultValuesDataProps={defaultValuesData} />
  )
}
