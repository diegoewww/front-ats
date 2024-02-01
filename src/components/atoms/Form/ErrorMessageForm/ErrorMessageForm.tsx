'use client'

interface Props {
  name: string
  errors: any
}

export default function ErrorMessageForm (props: Props) {
  const { errors, name } = props
  return (
    <>
      {Boolean(errors[name]) && (
        <small id='tittle-help' className='text-red-500'>
          {errors[name]?.message?.message ??
            errors[name]?.label?.message?.message ??
            errors[name]?.label?.message ??
            errors[name][1]?.message ??
            errors[name][0]?.message ??
            errors[name]?.message}
        </small>
      )}
    </>
  )
}
