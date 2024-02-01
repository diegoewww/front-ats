import * as Yup from 'yup'

const changePassword = Yup.object().shape({
  password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir').required('Confirme la contraseña'),
  currentPassword: Yup.string().required('La contraseña actual es requerida')
})

export default changePassword
