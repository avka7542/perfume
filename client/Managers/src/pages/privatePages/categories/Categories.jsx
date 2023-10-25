import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { Spinner } from '@chakra-ui/react'
import CategoriesTable from '../../../component/partials/categories/CategoriesTable'

const url = "http://localhost:4000/categories/managers/all"

function Categories() {

    const [data,loading,error] = useFetch(url)

  return (
    <>
    {loading && <Spinner color="red.500" size='xl' />}

   {error && <h1>{error.message}</h1>}

   {data && <CategoriesTable data={data.categories} />}
    </>
  )
}

export default Categories