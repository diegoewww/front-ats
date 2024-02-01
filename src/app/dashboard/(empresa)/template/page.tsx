import { Card, CardHeader, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import Link from 'next/link'
import { getTemplate } from '@/service/offers'
import DropdownTemplate from './DropdownTemplate'

export default async function Template () {
  const dataTemplate = await getTemplate()

  return (
    <>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-bold'>Mis Templates</h3>
        <Button as={Link} href='/template/createTemplate' startContent={<i className='pi pi-plus' />}>Crear Template</Button>
      </div>
      <Divider className='my-4' />
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3'>
        {dataTemplate.map((template) => (
          <Card className='max-w-[400px]' key={template.id}>
            <CardHeader className='flex gap-3 justify-between'>
              <div className='flex gap-3 items-center'>
                <img
                  alt='nextui logo'
                  height={40}
                  src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
                  width={40}
                />
                <div className='flex flex-col'>
                  <p className='text-md capitalize'>{template.nameTemplate}</p>
                </div>
              </div>

              <DropdownTemplate id={template.id} />

            </CardHeader>
            <Divider />
            <CardFooter>
              <Button
                as={Link}
                href={`/dashboard/editOferta/${template.id ?? ''}`}
                variant='solid'
              >
                Usar Template
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
