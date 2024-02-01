const columns = [
  { name: 'TITULO DEL AVISO', uid: 'tittle', sortable: true },
  { name: 'CREADO POR', uid: 'name', sortable: true },
  { name: 'STATUS', uid: 'status', sortable: true },
  { name: 'CANDIDATOS', uid: 'candidatos', sortable: true },
  { name: 'ACTIONS', uid: 'actions' }
]

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Paused', uid: 'paused' },
  { name: 'Finalized', uid: 'finalized' }
]

export const INITIAL_VISIBLE_COLUMNS = ['tittle', 'name', 'status', 'actions', 'candidatos']

// const users = [
//   {
//     id: 1,
//     name: 'Tony Reichert',
//     tittle: 'Programador Backend',
//     status: 'active',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 2,
//     name: 'Tony Reichert',
//     tittle: 'Programador Web Frontend',
//     status: 'active',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 3,
//     name: 'Tony Reichert',
//     tittle: 'Programador Backend C#',
//     status: 'paused',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 4,
//     name: 'Ale Reichert',
//     tittle: 'Programador Python',
//     status: 'finalized',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 5,
//     name: 'Tony Reichert',
//     tittle: 'Programador Backend PHP',
//     status: 'active',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 6,
//     name: 'Tony Reichert',
//     tittle: 'Arquitecto de Software',
//     status: 'active',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 7,
//     name: 'Tony Reichert',
//     tittle: 'Arquitecto de Microservicios',
//     status: 'finalized',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 8,
//     name: 'Tony Reichert',
//     tittle: 'Scrum Master',
//     status: 'active',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 9,
//     name: 'Tony Reichert',
//     tittle: 'Pasantia de Ingenieria de Software',
//     status: 'finalized',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 10,
//     name: 'Tony Reichert',
//     tittle: 'Asistenten Comercial',
//     status: 'active',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   },
//   {
//     id: 11,
//     name: 'Tony Reichert',
//     tittle: 'AEM Developer',
//     status: 'paused',
//     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//     email: 'tony.reichert@example.com'
//   }

// ]

export { columns, statusOptions }
