import type { yupError } from '@/schemas/types'

export function convertYupErrorToCustomError<T> (error: any): T {
  const errors: T = (error as yupError).inner.reduce<any>((acc, err) => {
    acc[err.path as string] = err.message
    return acc
  }, {})
  return errors
}
