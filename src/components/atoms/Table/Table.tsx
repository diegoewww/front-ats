/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Input } from '@nextui-org/input'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Selection,
  SortDescriptor
} from '@nextui-org/table'
import { SearchIcon } from '../../../../public/svgComponent'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'
import { Pagination } from '@nextui-org/pagination'
import DropDownAtomNext from '../DropdownNext/DropdownNext'
import { Chip, ChipProps } from '@nextui-org/chip'
import { User } from '@nextui-org/user'
import { Tooltip } from '@nextui-org/tooltip'
import { columns, statusOptions, INITIAL_VISIBLE_COLUMNS } from './data'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover'
import { Template } from '@/service/types/interface'
import { OfferRecluterTable } from '@/service/supabase/offersSupabase'
import Link from 'next/link'

export default function TableAtom ({ templates, offersRecluter }: { templates: Template[], offersRecluter: OfferRecluterTable[] }) {
  const [usersData, setUsersData] = useState<OfferRecluterTable[]>([])
  const [filterValue, setFilterValue] = useState('')
  const [filterValues, setFilterValues] = useState({
    tittle: '',
    name: '',
    status: ''
  })
  const [statusFilter, setStatusFilter] = useState<Selection>('all')
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS))
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'tittle',
    direction: 'ascending'
  })
  const [page, setPage] = useState(1)

  const statusColorMap: Record<string, ChipProps['color']> = {
    active: 'success',
    paused: 'warning',
    finalized: 'danger'
  }

  const onSearchChange = useCallback((value?: string) => {
    if (value != null) {
      setFilterValue(value)
    } else {
      setFilterValue('')
    }
  }, [])

  const onClear = useCallback(() => {
    setFilterValue('')
  }, [])

  const onSearchChangeFilters = (field: string, value: string) => {
    setFilterValues({
      ...filterValues,
      [field]: value
    })
  }

  const hasSearchFilter = Boolean(filterValue)
  const hasFiltersColumns = Boolean((Boolean(filterValues.tittle)) || (Boolean(filterValues.name)) || Boolean(filterValues.status))

  const headerColumns = useMemo(() => {
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid))
  }, [visibleColumns])

  const filteredItems = useMemo(() => {
    let filteredUsers = [...usersData]
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        Object.values(user).some((value) =>
          typeof value === 'string' && value.toLowerCase().includes(filterValue.toLowerCase())
        )
      )
    }

    if (hasFiltersColumns) {
      // filtrar por tittle
      if ((filterValues.tittle.length > 0)) {
        filteredUsers = filteredUsers.filter((user) =>
          user.tittle.toLowerCase().includes(filterValues.tittle.toLowerCase())
        )
      }
      // filtrar por name
      if ((filterValues.name.length > 0)) {
        filteredUsers = filteredUsers.filter((user) =>
          user.name.toLowerCase().includes(filterValues.name.toLowerCase())
        )
      }

      // filtrar por status
      if ((filterValues.status.length > 0)) {
        filteredUsers = filteredUsers.filter((user) =>
          user.status.toLowerCase().includes(filterValues.status.toLowerCase())
        )
      }
    }

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      )
    }

    return filteredUsers
  }, [offersRecluter, filterValue, statusFilter, usersData, hasSearchFilter, hasFiltersColumns, filterValues])

  const pages = Math.ceil(filteredItems.length / rowsPerPage)

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems?.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const sortedItems = useMemo(() => {
    // console.log('sortDescriptor', sortDescriptor.column as keyof User)
    return [...items].sort((a: OfferRecluterTable, b: OfferRecluterTable) => {
      // console.log('a', a)
      // console.log('b', b)
      const first = a[sortDescriptor.column as keyof OfferRecluterTable] as unknown as number
      const second = b[sortDescriptor.column as keyof OfferRecluterTable] as unknown as number
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1)
    }
  }, [page, pages])

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page])

  const onRowsPerPageChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
  }, [])

  useEffect(() => {
    setUsersData(offersRecluter)
  }, [])
  const topContent = useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between gap-3 items-end'>
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search...'
            variant='bordered'
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className='flex gap-3'>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button variant='flat'>
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode='multiple'
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className='capitalize'>
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button variant='flat'>
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode='multiple'
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className='capitalize'>
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <DropDownAtomNext templates={templates} />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          {/* //Todo: Falta arreglar el Total de empleos */}
          <span className='text-default-400 text-small'>Total de empleos {sortedItems.length === 0 ? usersData.length : sortedItems.length}</span>
          <label className='flex items-center text-default-400 text-small'>
            Rows per page:
            <select
              className='bg-transparent outline-none text-default-400 text-small'
              onChange={onRowsPerPageChange}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </label>
        </div>
      </div>
    )
  }, [filterValue,
    usersData,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    offersRecluter.length,
    hasSearchFilter])

  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        {/* //?Codigo para seleccionar por fila con un checkbox -> descomentar si es que se implementa esta funcionalidad */}
        {/* <span className='w-[30%] text-small text-default-400'>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span> */}
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages === 0 ? 1 : pages}
          onChange={setPage}
        />
        <div className='hidden sm:flex w-[30%] justify-end gap-2'>
          <Button isDisabled={pages === 1} size='sm' variant='flat' onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size='sm' variant='flat' onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    )
  }, [selectedKeys, items.length, page, pages, hasSearchFilter])

  const renderCell = (user: OfferRecluterTable, columnKey: React.Key) => {
    // @ts-expect-error
    const cellValue = user[columnKey]
    switch (columnKey) {
      case 'tittle':
        return (
          <div className='capitalize'>{user.tittle}</div>
        )
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            description={user.email}
            name={user.name}
          >
            {user.email}
          </User>
        )
      case 'status':
        return (
          <Chip className='capitalize' color={statusColorMap[user.status]} size='sm' variant='flat'>
            {cellValue}
          </Chip>
        )
      case 'candidatos':
        return (

          <Tooltip content='Ver candidatos' color='primary' showArrow delay={400}>
            <Link className='w-36' href={`/candidatos/${user.id}`}>

              <Chip color='primary' size='sm' variant='flat'>
                {cellValue}
              </Chip>
              <span className='capitalize text-primary-500'> nuevos</span>

            </Link>
          </Tooltip>

        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Ver postulantes'>
              <Button isIconOnly variant='flat' color='default' size='sm'>
                <i className='pi pi-eye text-base' />
              </Button>
            </Tooltip>
            <Tooltip content='Edit user' color='primary'>
              <Button isIconOnly variant='flat' color='primary' size='sm'>
                <i className='pi pi-file-edit text-base' />
              </Button>
            </Tooltip>
            <Tooltip
              color='danger' content='Delete user'
            >
              <span className='text-2xl text-danger cursor-pointer active:opacity-50'>
                <Button
                  isIconOnly variant='flat' size='sm' color='danger' onPress={(prev) => {
                    setUsersData([...usersData].filter((item) => item.id !== user.id))
                  }}
                >
                  <i className='pi pi-trash text-base' />
                </Button>
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }

  const renderCellColumn = (column: any, columnUID: React.Key) => {
    const cellValue = column.name // Todo: falta arreglar esta parte
    switch (columnUID) {
      case 'tittle':
        return (
          <>
            <Popover
              placement='bottom-start' showArrow size='sm'
              classNames={{
                base: 'py-3 px-4 border border-default-200 bg-gradient-to-br from-white to-default-300 dark:from-default-100 dark:to-default-50'
              }}
            >
              <PopoverTrigger>
                <Button isIconOnly variant='flat' size='sm'>
                  <i className='pi pi-filter-fill' />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className='px-1 py-2 grid gap-4'>
                  <div className='text-small font-bold'>Filtro por columna</div>
                  <Input
                    isClearable
                    className='w-full'
                    placeholder='Search by tittle...'
                    variant='bordered'
                    startContent={<SearchIcon />}
                    value={filterValues.tittle}
                    onClear={() => onSearchChangeFilters('tittle', '')}
                    onValueChange={(value: string) => onSearchChangeFilters('tittle', value)}
                  />
                  <Button color='primary' onClick={() => {}}>
                    Filtrar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <div className='inline ml-2'>{column.name}</div>
          </>
        )
      case 'name':
        return (
          <>
            <Popover
              placement='bottom-start' showArrow size='sm'
              classNames={{
                base: 'py-3 px-4 border border-default-200 bg-gradient-to-br from-white to-default-300 dark:from-default-100 dark:to-default-50'
              }}
            >
              <PopoverTrigger>
                <Button isIconOnly variant='flat' size='sm'>
                  <i className='pi pi-filter-fill' />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className='px-1 py-2 grid gap-4'>
                  <div className='text-small font-bold'>Filtro Nombre</div>
                  <Input
                    isClearable
                    className='w-full'
                    placeholder='Search by tittle...'
                    variant='bordered'
                    startContent={<SearchIcon />}
                    value={filterValues.name}
                    onClear={() => onSearchChangeFilters('name', '')}
                    onValueChange={(value: string) => onSearchChangeFilters('name', value)}
                  />
                  <Button color='primary' onClick={() => {}}>
                    Filtrar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <div className='inline'>{column.name}</div>
          </>
        )
      case 'status':
        return (
          <>
            <Popover
              placement='bottom-start' showArrow size='sm'
              classNames={{
                base: 'py-3 px-4 border border-default-200 bg-gradient-to-br from-white to-default-300 dark:from-default-100 dark:to-default-50'
              }}
            >
              <PopoverTrigger>
                <Button isIconOnly variant='flat' size='sm'>
                  <i className='pi pi-filter-fill' />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className='px-1 py-2 grid gap-4'>
                  <div className='text-small font-bold'>Filtro Status</div>
                  <Input
                    isClearable
                    className='w-full'
                    placeholder='Search by tittle...'
                    variant='bordered'
                    startContent={<SearchIcon />}
                    value={filterValues.status}
                    onClear={() => onSearchChangeFilters('status', '')}
                    onValueChange={(value: string) => onSearchChangeFilters('status', value)}
                  />
                  <Button color='primary' onClick={() => {}}>
                    Filtrar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <div className='inline'>{column.name}</div>
          </>
        )
      case 'actions':
        return (
          <>
            <div className='inline'>{column.name}</div>
          </>
        )
      default:
        return cellValue
    }
  }

  const classNames = useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider', 'text-sm'],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none'
      ]
    }),
    []
  )

  return (
    <Table
      aria-label='Example static collection table'
      topContentPlacement='outside'
      removeWrapper
      topContent={topContent}
      sortDescriptor={sortDescriptor}
      bottomContentPlacement='outside'
      bottomContent={bottomContent}
      classNames={classNames}
      onSortChange={setSortDescriptor}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader>
        {
            headerColumns.map((column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === 'actions' ? 'center' : 'start'}
                allowsSorting={column.sortable}
              >
                {renderCellColumn(column, column.uid)}
              </TableColumn>
            ))
          }
      </TableHeader>
      <TableBody emptyContent='No users found'>
        {
            sortedItems.map((item) => (
              <TableRow key={item.id}>
                {
                  headerColumns.map((column) => (

                    <TableCell key={column.uid}>
                      {renderCell(item, column.uid)}
                    </TableCell>

                  ))
                }
              </TableRow>
            ))
          }
      </TableBody>
    </Table>
  )
}
