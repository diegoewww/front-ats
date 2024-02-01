import * as Yup from 'yup'

const updateEmpresaData = Yup.object().shape({
  company_name: Yup.string().required('Ingrese el nombre de la empresa'),
  name_recruiter: Yup.string().required('Ingrese el nombre del reclutador'),
  company_address: Yup.string().required('Ingrese la dirección de la empresa'),
  email: Yup.string().email('Ingrese un correo electrónico válido')
})

export default updateEmpresaData
