import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
export default function Footer () {
  return (
    <footer className='pt-24'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <Divider />
        <div className='flex justify-between items-center py-10'>
          <p className='font-light'>
            Copyright{' '}
            <a
              href='https://twitter.com/gonzalochale'
              target='_blank'
              className='font-medium'
            >
              2023
            </a>{' '}
            Jobint ©️
          </p>
          <a href='https://github.com/gonzalochale' target='_blank'>
            <Button isIconOnly variant='light'>
              <i className='pi pi-github text-4xl' />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  )
}
