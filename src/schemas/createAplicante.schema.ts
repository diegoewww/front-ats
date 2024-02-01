import * as Yup from 'yup'

const aplicanteValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Ingrese sus nombres'),
  lastName: Yup.string().required('Ingrese sus apellidos'),
  dni: Yup.string().matches(/^\d{1,8}$/, 'Ingresa un DNI válido.').required('El DNI es requerido'),
  phone: Yup.string().matches(/^[9]\d{8}$/, 'Ingresa un número de teléfono válido.').required('El número de teléfono es requerido'),
  email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es requerido'),
  password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida')
})

export default aplicanteValidationSchema
