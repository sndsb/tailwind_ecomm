import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
     <section id="products" className="max-container max-sm:mt-12" >
      <div className="flex flex-col justify-start gap-5 ">
         <h2 className="text-4xl font-palanquin font-bold">
           Our 
            <span className="text-coral-red"> Popular </span>
            Products
         </h2>
         <p className="max-lg:max-w-lg mt-2 font-montserrat text-slate-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore veritatis voluptas tenetur tempore, quo, cum, minus culpa excepturi ratione temporibus laboriosam reiciendis sequi nam natus error quisquam obcaecati saepe!</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product)=>(
            <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
     </section>
  )
}

export default PopularProduct