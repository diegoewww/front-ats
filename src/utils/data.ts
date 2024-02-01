import React from 'react'

interface Departamento {
  label: string
  value: string
  description: string
}

export const data: Departamento[] = [
  { label: 'Lima', value: 'lima', description: 'Departamento ubicado en la región del Perú' },
  { label: 'Amazonas', value: 'amazonas', description: 'Departamento ubicado en la región norte del Perú, conocido por su selva y rica biodiversidad' },
  { label: 'Ancash', value: 'ancash', description: 'Departamento ubicado en la región noroeste del Perú, famoso por la Cordillera Blanca y el Callejón de Huaylas' },
  { label: 'Apurímac', value: 'apurimac', description: 'Departamento ubicado en la región sur del Perú, conocido por su paisaje montañoso y culturalmente diverso' },
  { label: 'Arequipa', value: 'arequipa', description: 'Departamento ubicado en la región sur del Perú, conocido por su impresionante paisaje volcánico y la ciudad colonial de Arequipa' },
  { label: 'Ayacucho', value: 'ayacucho', description: 'Departamento ubicado en la región central del Perú, conocido por su rica historia cultural y arquitectura colonial' },
  { label: 'Cajamarca', value: 'cajamarca', description: 'Departamento ubicado en la región norte del Perú, conocido por su historia precolombina y su rica producción agrícola' },
  { label: 'Cusco', value: 'cusco', description: 'Departamento ubicado en la región sur del Perú, famoso por la ciudad de Cusco y las ruinas incas de Machu Picchu' },
  { label: 'Huancavelica', value: 'huancavelica', description: 'Departamento ubicado en la región central del Perú, conocido por su paisaje montañoso y su rica cultura quechua' },
  { label: 'Huánuco', value: 'huanuco', description: 'Departamento ubicado en la región central del Perú, conocido por su biodiversidad y su historia precolombina' },
  { label: 'Ica', value: 'ica', description: 'Departamento ubicado en la región sur del Perú, conocido por su paisaje desértico y sus viñedos' }

]
