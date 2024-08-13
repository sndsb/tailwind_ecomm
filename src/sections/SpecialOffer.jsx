import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img src={offer} height={687} width={773} className='object-contain  w-full' />
      </div>

      <div className="flex flex-1 flex-col ">

        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">

            Special <span
            className="text-coral-red ">

            OFfer
          </span>
         
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.facere amet sunt deserunt doloremque. Voluptate.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">

          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More" iconUrl={arrowRight} 
          
           backgroundColor="bg-white" borderColor='border-slate-gray' textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer