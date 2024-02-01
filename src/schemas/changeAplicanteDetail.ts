import * as Yup from 'yup'

const changeAplicanteDetail = Yup.object().shape({
  firstName: Yup.string().required('Ingrese sus nombres'),
  lastName: Yup.string().required('Ingrese sus apellidos'),
  dni: Yup.string().matches(/^\d{1,8}$/, 'Ingresa un DNI válido.').required('El DNI es requerido'),
  phone: Yup.string().matches(/^[9]\d{8}$/, 'Ingresa un número de teléfono válido.').required('El número de teléfono es requerido'),
  email: Yup.string().email('Ingrese un correo electrónico válido')
})

export default changeAplicanteDetail
