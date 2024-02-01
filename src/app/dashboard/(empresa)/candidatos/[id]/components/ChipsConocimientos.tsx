import { Chip } from '@nextui-org/chip'
// constante de habilidades de porgramacion
const initialHabilidades = [
  'Java',
  'JavaScript',
  'Lua',
  'Julia',
  'ABAP',
  'Groovy',
  'Assembly',
  'Scratch',
  'PostScript',
  'Rexx',
  'Erlang',
  'AutoLISP',
  'Crystal',
  'Apex',
  'F#',
  'OpenEdge ABL',
  'LabVIEW',
  'Prolog']

export default function ChipConocimientos () {
  return (
    <>
      {initialHabilidades.map((habilidad, index) => (
        <Chip key={index} variant='dot'>
          {habilidad}
        </Chip>
      ))}
    </>
  )
}
