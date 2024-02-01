import * as Yup from 'yup'

const empresaValidationSchema = Yup.object().shape({
  companyName: Yup.string().required('El nombre de la empresa es requerido'),
  recruiterName: Yup.string().required('El nombre del reclutador es requerido'),
  companyAddress: Yup.string().required('La dirección de la empresa es requerida'),
  companyEmail: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es requerido'),
  companyPassword: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida')
})

export default empresaValidationSchema
