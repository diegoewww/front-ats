export default function dateFormat (fecha: string) {
  const today = new Date(fecha)

  const dateFormartter = new Intl.DateTimeFormat('es-Es', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    timeZone: 'UTC'
  })

  return dateFormartter.format(today)
}
