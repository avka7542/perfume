import useFetch from "../../../hooks/useFetch";
import CategoriesPreview from '../../../component/partials/categories/CategoriesPreview'
import Nav from "../../../component/section/Nav";

const url = "http://localhost:4000/products/managers/all"
const url2 = "http://localhost:4000/categories/managers/all"

function Products() {

  const [data,isLoading,error] = useFetch(url)
  
console.log(data)

  return (
    <div style={{marginTop:'30px'}}>

      {isLoading && <span>Loading...</span>}

      {error && <span>{error.message}</span>}

      {!data && <span>No Products</span>}

      {data && <CategoriesPreview products={data.products}/> }
      
    </div>
  )
}

export default Products